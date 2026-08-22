#!/usr/bin/env python3
"""Build the static interview study site from the Markdown knowledge base."""

from __future__ import annotations

import argparse
import html
import json
import re
import shutil
from datetime import UTC, datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

import markdown

from build_index import Question, load_questions


ROOT = Path(__file__).resolve().parents[1]
SITE_SOURCE = ROOT / "site"
ANSWER_HEADING_RE = re.compile(r"^## 我的答案\s*$", re.MULTILINE)
HTML_COMMENT_RE = re.compile(r"<!--.*?-->", re.DOTALL)
MATH_RE = re.compile(r"(\$\$.*?\$\$|\\\[.*?\\\]|(?<!\\)\$(?!\s).*?(?<!\s)(?<!\\)\$)", re.DOTALL)

ALLOWED_TAGS = {
    "a", "blockquote", "br", "code", "del", "div", "em", "h1", "h2", "h3",
    "h4", "h5", "h6", "hr", "li", "ol", "p", "pre", "span", "strong", "sub",
    "sup", "table", "tbody", "td", "th", "thead", "tr", "ul",
}
VOID_TAGS = {"br", "hr"}


class SafeHTML(HTMLParser):
    """Keep Markdown-generated markup while dropping executable raw HTML."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag not in ALLOWED_TAGS:
            return
        clean_attrs: list[str] = []
        for name, value in attrs:
            if value is None:
                continue
            if tag == "a" and name == "href":
                parsed = urlparse(value)
                if parsed.scheme and parsed.scheme not in {"http", "https", "mailto"}:
                    continue
                clean_attrs.append(f'href="{html.escape(value, quote=True)}"')
            elif tag == "a" and name in {"title"}:
                clean_attrs.append(f'{name}="{html.escape(value, quote=True)}"')
            elif tag == "code" and name == "class" and value.startswith("language-"):
                clean_attrs.append(f'class="{html.escape(value, quote=True)}"')
            elif tag in {"td", "th"} and name == "align" and value in {"left", "right", "center"}:
                clean_attrs.append(f'align="{value}"')
        suffix = f" {' '.join(clean_attrs)}" if clean_attrs else ""
        self.parts.append(f"<{tag}{suffix}>")

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag: str) -> None:
        if tag in ALLOWED_TAGS and tag not in VOID_TAGS:
            self.parts.append(f"</{tag}>")

    def handle_data(self, data: str) -> None:
        self.parts.append(data)

    def handle_entityref(self, name: str) -> None:
        self.parts.append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        self.parts.append(f"&#{name};")

    def result(self) -> str:
        return "".join(self.parts)


def extract_answer(content: str) -> str:
    match = ANSWER_HEADING_RE.search(content)
    if not match:
        return ""
    return HTML_COMMENT_RE.sub("", content[match.end() :]).strip()


def render_markdown(source: str) -> str:
    math_fragments: list[str] = []

    def mask_math(match: re.Match[str]) -> str:
        math_fragments.append(match.group(0))
        return f"MATHPLACEHOLDER{len(math_fragments) - 1}END"

    masked = MATH_RE.sub(mask_math, source)
    rendered = markdown.markdown(
        masked,
        extensions=["extra", "sane_lists"],
        output_format="html5",
    )
    for index, fragment in enumerate(math_fragments):
        rendered = rendered.replace(
            f"MATHPLACEHOLDER{index}END",
            html.escape(fragment, quote=False),
        )

    sanitizer = SafeHTML()
    sanitizer.feed(rendered)
    sanitizer.close()
    return sanitizer.result()


def question_payload(question: Question, order: int) -> dict[str, object]:
    return {
        "id": question.question_id,
        "title": question.text,
        "section": question.section,
        "bank": question.bank_title,
        "order": order,
        "sourcePath": question.answer_path.relative_to(ROOT).as_posix(),
    }


def build(output: Path) -> None:
    if output.exists():
        shutil.rmtree(output)
    output.mkdir(parents=True)

    shutil.copy2(SITE_SOURCE / "index.html", output / "index.html")
    shutil.copytree(SITE_SOURCE / "assets", output / "assets")
    for public_file in ("robots.txt", "sitemap.xml"):
        shutil.copy2(SITE_SOURCE / public_file, output / public_file)

    banks = load_questions()
    questions = [question for _, bank_questions in banks for question in bank_questions]
    payload = [question_payload(question, index) for index, question in enumerate(questions)]

    sections: list[dict[str, object]] = []
    for bank_title, bank_questions in banks:
        for section_name in dict.fromkeys(question.section for question in bank_questions):
            section_questions = [q for q in bank_questions if q.section == section_name]
            sections.append(
                {
                    "name": section_name,
                    "bank": bank_title,
                    "count": len(section_questions),
                    "prefixes": list(dict.fromkeys(q.prefix.upper() for q in section_questions)),
                }
            )

    data_dir = output / "data"
    data_dir.mkdir()
    answer_dir = data_dir / "answers"
    answer_dir.mkdir()
    for question in questions:
        content = question.answer_path.read_text(encoding="utf-8")
        answer_markdown = extract_answer(content)
        (answer_dir / f"{question.question_id}.json").write_text(
            json.dumps({"answerHtml": render_markdown(answer_markdown)}, ensure_ascii=False),
            encoding="utf-8",
        )
    (data_dir / "questions.json").write_text(
        json.dumps(
            {
                "generatedAt": datetime.now(UTC).isoformat(),
                "repository": "https://github.com/AuroraEchos/LLM-Agent-Basic",
                "total": len(payload),
                "sections": sections,
                "questions": payload,
            },
            ensure_ascii=False,
            separators=(",", ":"),
        ),
        encoding="utf-8",
    )
    (output / ".nojekyll").touch()
    print(f"站点构建完成：{len(payload)} 道题 → {output}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        default=ROOT / "_site",
        help="生成目录（默认：_site）",
    )
    args = parser.parse_args()
    build(args.output.resolve())
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

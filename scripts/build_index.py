#!/usr/bin/env python3
"""Build the clickable knowledge index and synchronize answer-note stubs."""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INDEX_PATH = ROOT / "INDEX.md"
QUESTION_BANKS = (
    ROOT / "INTERVIEW_QUESTIONS_AGENT_HARNESS_EXPANDED.md",
    ROOT / "ENGINEERING_FOUNDATIONS_PATCH.md",
)

SECTION_RE = re.compile(r"^##\s+\d+\.\s+(.+?)\s*$")
QUESTION_RE = re.compile(
    r"^- \[(?P<checked>[ xX])\]\s+`(?P<id>[A-Z]{2,5}-\d{3})`\s+(?P<rest>.+?)\s*$"
)
LEADING_TAG_RE = re.compile(r"^`([^`]+)`\s*")
ANSWER_RE = re.compile(r"^## 我的答案\s*$\n(?P<body>.*?)(?=^##\s|\Z)", re.MULTILINE | re.DOTALL)
HTML_COMMENT_RE = re.compile(r"<!--.*?-->", re.DOTALL)
AUTO_QUESTION_RE = re.compile(
    r"<!-- AUTO-QUESTION:START -->.*?<!-- AUTO-QUESTION:END -->",
    re.DOTALL,
)


@dataclass(frozen=True)
class Question:
    question_id: str
    text: str
    tags: tuple[str, ...]
    section: str
    bank_title: str
    source: Path

    @property
    def prefix(self) -> str:
        return self.question_id.split("-", 1)[0].lower()

    @property
    def answer_path(self) -> Path:
        return ROOT / "answers" / self.prefix / f"{self.question_id}.md"


def parse_bank(path: Path) -> tuple[str, list[Question]]:
    if not path.exists():
        raise ValueError(f"题库文件不存在：{path.relative_to(ROOT)}")

    bank_title = path.stem
    section = "未分类"
    questions: list[Question] = []

    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            bank_title = line[2:].strip()
            continue

        section_match = SECTION_RE.match(line)
        if section_match:
            section = section_match.group(1)
            continue

        question_match = QUESTION_RE.match(line)
        if not question_match:
            continue

        rest = question_match.group("rest")
        tags: list[str] = []
        while tag_match := LEADING_TAG_RE.match(rest):
            tags.append(tag_match.group(1))
            rest = rest[tag_match.end() :]

        questions.append(
            Question(
                question_id=question_match.group("id"),
                text=rest.strip(),
                tags=tuple(tags),
                section=section,
                bank_title=bank_title,
                source=path,
            )
        )

    if not questions:
        raise ValueError(f"没有从题库中识别出问题：{path.relative_to(ROOT)}")
    return bank_title, questions


def managed_question_block(question: Question) -> str:
    source = question.source.relative_to(ROOT).as_posix()
    tags = " · ".join(question.tags) if question.tags else "无"
    return (
        "<!-- AUTO-QUESTION:START -->\n"
        f"> **问题：** {question.text}\n"
        ">\n"
        f"> **分类：** {question.section} · {tags}\n"
        ">\n"
        f"> **来源：** [{source}](../../{source})\n"
        "<!-- AUTO-QUESTION:END -->"
    )


def new_answer_note(question: Question) -> str:
    return (
        f"# {question.question_id}\n\n"
        "[← 返回知识库索引](../../INDEX.md)\n\n"
        f"{managed_question_block(question)}\n\n"
        "## 我的答案\n\n"
        "<!-- 在这里写答案。删除本注释并开始记录后，总索引会自动标记为已完成。 -->\n\n"
        "## 延伸阅读\n\n"
        "- \n"
    )


def sync_answer_note(question: Question, *, check: bool) -> tuple[bool, str]:
    path = question.answer_path
    if path.exists():
        current = path.read_text(encoding="utf-8")
        block = managed_question_block(question)
        if AUTO_QUESTION_RE.search(current):
            desired = AUTO_QUESTION_RE.sub(lambda _: block, current, count=1)
        else:
            desired = current
        changed = desired != current
    else:
        desired = new_answer_note(question)
        changed = True

    if changed and not check:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(desired, encoding="utf-8")
    return changed, desired


def has_answer(content: str) -> bool:
    match = ANSWER_RE.search(content)
    if not match:
        return False
    body = HTML_COMMENT_RE.sub("", match.group("body"))
    return bool(body.strip())


def relative_answer_link(question: Question) -> str:
    return question.answer_path.relative_to(ROOT).as_posix()


def build_index(
    banks: list[tuple[str, list[Question]]], answer_contents: dict[str, str]
) -> str:
    all_questions = [question for _, questions in banks for question in questions]
    answered = sum(has_answer(answer_contents[q.question_id]) for q in all_questions)

    lines = [
        "<!-- 此文件由 scripts/build_index.py 自动生成，请勿手工编辑。 -->",
        "# 知识库索引",
        "",
        "> 点击问题即可进入对应的答案笔记。填写“我的答案”后，下一次生成索引时会自动勾选。",
        "",
        f"当前进度：**{answered} / {len(all_questions)}**",
        "",
        "## 题库导航",
        "",
    ]

    for bank_number, (bank_title, questions) in enumerate(banks, start=1):
        lines.append(f"- [{bank_title}](#bank-{bank_number})（{len(questions)} 题）")
    lines.append("")

    for bank_number, (bank_title, questions) in enumerate(banks, start=1):
        source = questions[0].source.relative_to(ROOT).as_posix()
        lines.extend(
            [
                f'<a id="bank-{bank_number}"></a>',
                f"## {bank_title}",
                "",
                f"题目来源：[{source}]({source})",
                "",
            ]
        )

        current_section: str | None = None
        section_number = 0
        for question in questions:
            if question.section != current_section:
                current_section = question.section
                section_number += 1
                lines.extend(
                    [
                        f'<a id="bank-{bank_number}-section-{section_number}"></a>',
                        f"### {current_section}",
                        "",
                    ]
                )

            checked = "x" if has_answer(answer_contents[question.question_id]) else " "
            tags = " ".join(f"`{tag}`" for tag in question.tags)
            suffix = f" {tags}" if tags else ""
            lines.append(
                f"- [{checked}] [{question.question_id} · {question.text}]"
                f"({relative_answer_link(question)}){suffix}"
            )
        lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def load_questions() -> list[tuple[str, list[Question]]]:
    banks = [parse_bank(path) for path in QUESTION_BANKS]
    seen: dict[str, Path] = {}
    for _, questions in banks:
        for question in questions:
            if question.question_id in seen:
                first = seen[question.question_id].relative_to(ROOT)
                second = question.source.relative_to(ROOT)
                raise ValueError(
                    f"问题编号重复：{question.question_id}（{first}、{second}）"
                )
            seen[question.question_id] = question.source
    return banks


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--check",
        action="store_true",
        help="只检查生成内容是否最新，不写入文件",
    )
    args = parser.parse_args()

    try:
        banks = load_questions()
    except ValueError as error:
        print(f"错误：{error}", file=sys.stderr)
        return 2

    changed_notes = 0
    answer_contents: dict[str, str] = {}
    for _, questions in banks:
        for question in questions:
            changed, desired = sync_answer_note(question, check=args.check)
            changed_notes += int(changed)
            answer_contents[question.question_id] = desired

    desired_index = build_index(banks, answer_contents)
    current_index = INDEX_PATH.read_text(encoding="utf-8") if INDEX_PATH.exists() else ""
    index_changed = desired_index != current_index
    if index_changed and not args.check:
        INDEX_PATH.write_text(desired_index, encoding="utf-8")

    question_count = sum(len(questions) for _, questions in banks)
    if args.check and (changed_notes or index_changed):
        print(
            f"索引未同步：{changed_notes} 个答案文件、"
            f"{int(index_changed)} 个索引文件需要更新。"
        )
        return 1

    action = "检查完成" if args.check else "生成完成"
    print(f"{action}：{question_count} 道题，{changed_notes} 个答案文件已更新。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

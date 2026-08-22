# LLM-Agent-Basic

我的 LLM 与 Agent 个人知识库。

## 在线背题

[打开 LLM 面试备忘录](https://auroraechos.github.io/LLM-Agent-Basic/)

网页支持全文搜索、知识领域筛选、随机抽题、先回忆后显示答案，以及掌握度和收藏记录。学习进度只保存在当前浏览器中，不会上传。

## 开始阅读

[进入知识库总索引](INDEX.md)

总索引中的每道问题都会链接到独立答案笔记。答案写入后，索引中的复选框会自动变为已完成状态。

题目只按照知识领域和唯一编号组织，不再使用题目来源标签进行区分。

## 维护方式

1. 在对应知识领域下新增问题，并为问题分配唯一编号，例如 `ARC-031`。
2. 本地运行 `python3 scripts/build_index.py`；脚本会创建答案模板并重建索引。
3. 打开 `answers/<分类编号>/<问题编号>.md`，在“我的答案”下记录笔记。
4. 提交并推送。GitHub Actions 会再次同步索引，无需手工修改 `INDEX.md`。

只检查索引是否最新、不修改文件时，可以运行：

```bash
python3 scripts/build_index.py --check
```

> `INDEX.md`、答案笔记中的问题引用块由脚本维护；“我的答案”和“延伸阅读”区域可以自由编辑，不会被覆盖。

## 网页维护

网页内容同样来自现有答案笔记。推送到 `main` 后，GitHub Actions 会重新生成并发布静态站点，不需要手工同步两份内容。

本地构建：

```bash
python3 -m pip install -r requirements-site.txt
python3 scripts/build_site.py --output _site
python3 -m http.server 8000 --directory _site
```

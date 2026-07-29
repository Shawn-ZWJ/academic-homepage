#!/usr/bin/env python3
"""Convert the doctoral research-plan DOCX into a self-contained web reader."""

from __future__ import annotations

import argparse
import html
from pathlib import Path

from docx import Document
from docx.document import Document as DocumentObject
from docx.table import Table
from docx.text.paragraph import Paragraph


def iter_blocks(document: DocumentObject):
    for child in document.element.body.iterchildren():
        if child.tag.endswith("}p"):
            yield Paragraph(child, document)
        elif child.tag.endswith("}tbl"):
            yield Table(child, document)


def render_runs(paragraph: Paragraph) -> str:
    fragments: list[str] = []
    for run in paragraph.runs:
        text = html.escape(run.text).replace("\n", "<br>")
        if not text:
            continue
        if run.bold:
            text = f"<strong>{text}</strong>"
        if run.italic:
            text = f"<em>{text}</em>"
        if run.underline:
            text = f"<u>{text}</u>"
        fragments.append(text)
    return "".join(fragments) or html.escape(paragraph.text)


def render_table(table: Table) -> str:
    rows: list[str] = []
    for row_index, row in enumerate(table.rows):
        cells = []
        tag = "th" if row_index == 0 and len(table.rows) > 4 else "td"
        for cell in row.cells:
            value = "<br>".join(
                render_runs(paragraph) for paragraph in cell.paragraphs
            )
            cells.append(f"<{tag}>{value}</{tag}>")
        rows.append(f"<tr>{''.join(cells)}</tr>")
    return f'<div class="table-wrap"><table>{"".join(rows)}</table></div>'


def render_document(source: Path) -> tuple[str, str, str]:
    document = Document(source)
    blocks: list[str] = []
    normal_index = 0
    title = "面向高职学生发展支持的人本教育智能体：设计、交互机制与效果评估"
    subtitle = (
        "Human-Centred Agentic AI for Student Development Support in Vocational "
        "Higher Education: Design, Interaction Mechanisms, and Evaluation"
    )

    for block in iter_blocks(document):
        if isinstance(block, Table):
            blocks.append(render_table(block))
            continue

        text = block.text.strip()
        if not text:
            continue

        content = render_runs(block)
        style = block.style.name
        if normal_index == 0 and text == "博士研究计划":
            blocks.append(f'<p class="document-eyebrow">{content}</p>')
        elif normal_index == 1:
            blocks.append(f"<h1>{content}</h1>")
        elif normal_index == 2:
            blocks.append(f'<p class="document-subtitle">{content}</p>')
        elif style == "Heading 1":
            blocks.append(f"<h2>{content}</h2>")
        elif style == "Heading 2":
            blocks.append(f"<h3>{content}</h3>")
        elif style == "Reference":
            blocks.append(f'<p class="reference">{content}</p>')
        elif text.startswith("关键词"):
            blocks.append(f'<p class="keywords">{content}</p>')
        else:
            blocks.append(f"<p>{content}</p>")
        normal_index += 1

    return title, subtitle, "\n".join(blocks)


def build_html(title: str, subtitle: str, body: str) -> str:
    return f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(title)}｜博士研究计划书</title>
  <meta name="description" content="{html.escape(subtitle)}">
  <style>
    :root {{
      color-scheme: light;
      --ink: #162131;
      --soft: #68717d;
      --paper: #fffefb;
      --ground: #e7e3da;
      --line: rgba(22, 33, 49, .14);
      --accent: #c84c37;
    }}
    * {{ box-sizing: border-box; }}
    html {{ scroll-behavior: smooth; }}
    body {{
      margin: 0;
      background: var(--ground);
      color: var(--ink);
      font-family: "Songti SC", "STSong", "Noto Serif CJK SC", serif;
      line-height: 1.95;
    }}
    .progress {{
      position: fixed;
      z-index: 20;
      top: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: var(--accent);
    }}
    .reader-bar {{
      position: sticky;
      z-index: 10;
      top: 0;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 13px 5vw;
      border-bottom: 1px solid rgba(22, 33, 49, .1);
      background: rgba(247, 244, 237, .94);
      color: var(--soft);
      font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
      font-size: 11px;
      letter-spacing: .08em;
      backdrop-filter: blur(14px);
    }}
    .reader-bar strong {{ color: var(--ink); font-weight: 600; }}
    article {{
      width: min(880px, calc(100% - 48px));
      margin: 28px auto 72px;
      padding: clamp(42px, 7vw, 86px);
      background: var(--paper);
      box-shadow: 0 22px 70px rgba(16, 23, 35, .14);
    }}
    .document-eyebrow {{
      margin: 0 0 18px;
      color: var(--accent);
      font-family: "PingFang SC", sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .18em;
    }}
    h1 {{
      margin: 0;
      font-size: clamp(28px, 5vw, 46px);
      font-weight: 600;
      letter-spacing: -.04em;
      line-height: 1.35;
    }}
    .document-subtitle {{
      margin: 22px 0 48px;
      color: var(--soft);
      font-family: Georgia, serif;
      font-size: 14px;
      font-style: italic;
      line-height: 1.7;
    }}
    h2 {{
      margin: 58px 0 22px;
      padding-top: 22px;
      border-top: 1px solid var(--line);
      font-size: 26px;
      line-height: 1.45;
    }}
    h3 {{
      margin: 36px 0 14px;
      font-size: 18px;
      line-height: 1.5;
    }}
    p {{
      margin: 0 0 17px;
      font-size: 15px;
      text-align: justify;
    }}
    .keywords {{
      margin: 26px 0 40px;
      padding: 16px 18px;
      border-left: 3px solid var(--accent);
      background: #f3f0e9;
      font-family: "PingFang SC", sans-serif;
      font-size: 13px;
      text-align: left;
    }}
    .reference {{
      margin-bottom: 10px;
      padding-left: 26px;
      text-indent: -26px;
      color: #3e4855;
      font-size: 12px;
      line-height: 1.7;
      text-align: left;
    }}
    .table-wrap {{
      overflow-x: auto;
      margin: 34px 0 46px;
      border: 1px solid var(--line);
    }}
    table {{
      width: 100%;
      min-width: 640px;
      border-collapse: collapse;
      font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
      font-size: 12px;
      line-height: 1.65;
    }}
    th, td {{
      padding: 13px 15px;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      vertical-align: top;
      text-align: left;
    }}
    th {{
      background: #e8edf0;
      font-weight: 700;
    }}
    tr:last-child td {{ border-bottom: 0; }}
    th:last-child, td:last-child {{ border-right: 0; }}
    ::selection {{ background: rgba(200, 76, 55, .18); }}
    @media (max-width: 620px) {{
      .reader-bar {{ padding: 11px 18px; }}
      article {{
        width: 100%;
        margin: 0;
        padding: 38px 22px 64px;
        box-shadow: none;
      }}
      h1 {{ font-size: 30px; }}
      h2 {{ font-size: 22px; }}
      p {{ font-size: 14px; line-height: 1.9; }}
    }}
  </style>
</head>
<body>
  <div class="progress" aria-hidden="true"></div>
  <div class="reader-bar">
    <strong>博士研究计划书 · 全文</strong>
    <span>向下滚动阅读</span>
  </div>
  <article>{body}</article>
  <script>
    const progress = document.querySelector(".progress");
    const updateProgress = () => {{
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = `${{max > 0 ? (scrollY / max) * 100 : 100}}%`;
    }};
    addEventListener("scroll", updateProgress, {{ passive: true }});
    addEventListener("resize", updateProgress);
    updateProgress();
  </script>
</body>
</html>
"""


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()

    title, subtitle, body = render_document(args.source)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(build_html(title, subtitle, body), encoding="utf-8")


if __name__ == "__main__":
    main()

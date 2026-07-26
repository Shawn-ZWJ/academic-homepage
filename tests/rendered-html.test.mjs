import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const credentialFiles = [
  "undergraduate-transcript.webp",
  "graduate-transcript.webp",
  "national-scholarship-certificate.webp",
  "senior-vocational-lecturer-certificate.webp",
  "software-designer-certificate.webp",
  "syb-instructor-certificate.webp",
  "mandarin-certificate.webp",
  "cet6-score-report.webp",
];

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the academic profile and credentials archive", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>钟文精｜个人学术履历<\/title>/);
  assert.match(html, /学历与资格证明/);
  assert.match(html, /博士研究意向/);
  assert.match(html, /既往课题 · 研究生阶段/);
  assert.match(html, /发表于 2021/);
  assert.match(html, /会议年份 2020/);
  assert.match(html, /当前研究重点见“博士研究意向”/);
  assert.match(html, /本科成绩单/);
  assert.match(html, /研究生成绩单/);
  assert.match(html, /硕士研究生国家奖学金证书/);
  assert.match(html, /中华人民共和国教育部 · 国家奖学金/);
  assert.match(html, /高职讲师职称证明/);
  assert.match(html, /软件设计师资格证书/);
  assert.match(html, /SYB 讲师证书/);
  assert.match(html, /普通话水平测试等级证书/);
  assert.match(html, /大学英语六级成绩报告单/);
  assert.match(html, /15170755136/);
  assert.match(html, /15170755136@163\.com/);
  assert.doesNotMatch(html, /公开版暂不展示私人联系方式/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
  assert.doesNotMatch(
    html,
    /360727199512200032|20142110010319|1190265005|SSY202125065/,
  );
});

test("ships every privacy-redacted credential image", async () => {
  await Promise.all(
    credentialFiles.map((file) =>
      access(new URL(`../public/credentials/${file}`, import.meta.url)),
    ),
  );

  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  for (const file of credentialFiles) {
    assert.match(page, new RegExp(file.replaceAll(".", "\\.")));
  }

  assert.match(page, /公开版本已隐藏个人编号及验证信息/);
  assert.match(css, /\.credential-archive/);
  assert.match(css, /\.transcript-gallery/);
  assert.match(css, /\.certificate-gallery/);
});

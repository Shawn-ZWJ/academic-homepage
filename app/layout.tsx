import type { Metadata } from "next";
import "./globals.css";

const title = "钟文精｜个人学术履历";
const description =
  "教育技术与人工智能方向的个人学术履历，涵盖研究兴趣、论文成果、教育经历、证明材料与博士研究计划书。";
const publicSiteUrl = "https://shawn-zwj.github.io/academic-homepage/";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title,
  description,
  openGraph: {
    description,
    images: [
      {
        alt: "钟文精｜个人学术履历",
        height: 909,
        url: "og.png",
        width: 1730,
      },
    ],
    locale: "zh_CN",
    title,
    type: "website",
    url: publicSiteUrl,
  },
  twitter: {
    card: "summary_large_image",
    description,
    images: ["og.png"],
    title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

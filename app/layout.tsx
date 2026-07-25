import type { Metadata } from "next";
import "./globals.css";

const title = "钟文精｜教育技术与人工智能";
const description =
  "钟文精的个人学术主页，关注生成式 AI、高职院校学生工作、教育治理与学生发展支持。";
const publicSiteUrl = "https://shawn-zwj.github.io/academic-homepage/";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title,
  description,
  openGraph: {
    description,
    images: [
      {
        alt: "钟文精｜教育技术与人工智能",
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

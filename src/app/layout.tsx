import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "公务员考试学习平台",
  description: "专业的公务员考试备考平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

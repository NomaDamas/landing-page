import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NomaDamas | AI 오픈소스 해커하우스",
  description: "강남 한복판에서 AI와 오픈소스로 미래를 함께 만들어가는 너드 커뮤니티. 해커톤, 코워킹, 오픈소스 프로젝트를 함께하세요.",
  keywords: ["AI", "오픈소스", "해커하우스", "강남", "커뮤니티", "해커톤", "코워킹"],
  openGraph: {
    title: "NomaDamas | AI 오픈소스 해커하우스",
    description: "강남 한복판에서 AI와 오픈소스로 미래를 함께 만들어가는 너드 커뮤니티",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

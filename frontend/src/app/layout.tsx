import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevPlatform - 비전공자를 위한 개발 학습 플랫폼",
  description:
    "개발을 배우는 모든 사람들이 자신의 학습 과정과 프로젝트를 공유하고, 서로 피드백을 주고받을 수 있는 커뮤니티 플랫폼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

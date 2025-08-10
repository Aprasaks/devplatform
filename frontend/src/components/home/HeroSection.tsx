"use client";

import { motion } from "framer-motion";
import { RiArrowRightLine } from "@remixicon/react";
import Button from "@/components/ui/Button";
import TerminalWindow from "@/components/ui/TerminalWindow";
import FloatingElements from "@/components/ui/FloatingElements";
import AnimatedText from "@/components/ui/AnimatedText";

export default function HeroSection() {
  const codeText = `export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="ko">
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    );
  }`;

  const floatingElements = [
    {
      position: "top-right" as const,
      size: "lg" as const,
      gradient: "from-pink-500 to-violet-500",
      duration: 4,
    },
    {
      position: "bottom-left" as const,
      size: "md" as const,
      gradient: "from-blue-500 to-cyan-500",
      duration: 3,
    },
  ];

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <AnimatedText
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              delay={0.2}
            >
              내가 아는 코드가
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                전부일까?
              </span>
            </AnimatedText>

            <AnimatedText className="text-xl text-gray-600 leading-relaxed" delay={0.4}>
              세상의 모든 개발 지식을 같이 담아주세요.
            
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                variant="hero"
                size="lg"
                icon={
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <RiArrowRightLine size={20} />
                  </motion.div>
                }
              >
                Go to Learn
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Terminal Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <TerminalWindow fileName="DevPlatform.tsx" codeText={codeText} typingSpeed={50} />

            <FloatingElements elements={floatingElements} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

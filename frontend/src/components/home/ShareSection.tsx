"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RiArrowRightLine } from "@remixicon/react";
import Button from "@/components/ui/Button";
import GlowingComponents from "@/components/ui/GlowingComponents";
import FloatingElements from "@/components/ui/FloatingElements";
import AnimatedText from "@/components/ui/AnimatedText";

export default function ShareSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const floatingElements = [
    {
      position: "top-right" as const,
      size: "lg" as const,
      gradient: "from-orange-400 to-red-400",
      duration: 4,
    },
    {
      position: "bottom-left" as const,
      size: "md" as const,
      gradient: "from-red-400 to-orange-400",
      duration: 3.5,
    },
    {
      position: "center-left" as const,
      size: "sm" as const,
      gradient: "from-pink-400 to-orange-400",
      duration: 5,
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-red-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <AnimatedText
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              delay={isInView ? 0.2 : 0}
            >
              나의 컴포넌트가
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                다른 이에게 힘이 되는 곳
              </span>
            </AnimatedText>

            <AnimatedText
              className="text-xl text-gray-600 leading-relaxed"
              delay={isInView ? 0.4 : 0}
            >
              당신이 만든 아름다운 컴포넌트를 공유하세요.
              <br />
              다른 개발자들의 프로젝트에 영감을 주고 도움이 되어보세요.
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                variant="share"
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
                Go to Product
              </Button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-6 border-t border-gray-200"
            >
              
            </motion.div>
          </motion.div>

          {/* Right - Glowing Components */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-3xl blur-3xl opacity-20"></div>

            {/* Components Container */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">컴포넌트 갤러리</h3>
                <p className="text-sm text-gray-600">재사용 가능한 UI 컴포넌트들을 만나보세요</p>
              </div>

              <GlowingComponents />
            </div>

            <FloatingElements elements={floatingElements} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

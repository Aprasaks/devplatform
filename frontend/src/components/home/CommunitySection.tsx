"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RiArrowRightLine } from "@remixicon/react";
import Button from "@/components/ui/Button";
import ChatWindow from "@/components/ui/ChatWindow";
import FloatingElements from "@/components/ui/FloatingElements";
import AnimatedText from "@/components/ui/AnimatedText";
import { ChatMessageData } from "@/components/ui/ChatMessage";

export default function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const chatMessages: ChatMessageData[] = [
    {
      user: "김개발",
      message: "취업이 너무 힘들어요",
      time: "2분 전",
      isQuestion: true,
    },
    {
      user: "박멘토",
      message: "사실 그건 저도 힘들어요...",
      time: "1분 전",
      isQuestion: false,
    },
    {
      user: "이초보",
      message: "저는 어떡하죠...",
      time: "방금",
      isQuestion: false,
    },
  ];

  const floatingElements = [
    {
      position: "top-left" as const,
      size: "lg" as const,
      gradient: "from-purple-400 to-pink-400",
      duration: 4,
    },
    {
      position: "bottom-right" as const,
      size: "md" as const,
      gradient: "from-pink-400 to-purple-400",
      duration: 3.5,
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <ChatWindow
              title="DevPlatform Community"
              messages={chatMessages}
              startAnimation={isInView}
            />

            <FloatingElements elements={floatingElements} />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <AnimatedText
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              delay={isInView ? 0.3 : 0}
            >
              때로는 찾아보는 것보다
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                질문이 더 유용한 법
              </span>
            </AnimatedText>

            <AnimatedText
              className="text-xl text-gray-600 leading-relaxed"
              delay={isInView ? 0.5 : 0}
            >
              혼자 고민하지 마세요. 경험 많은 개발자들과
              <br />
              실시간으로 소통하며 더 빠르게 성장할 수 있어요.
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button
                variant="community"
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
                Go to Community
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

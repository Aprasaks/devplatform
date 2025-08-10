"use client";

import { useState, useEffect } from "react";
import { RiSendPlaneLine } from "@remixicon/react";
import ChatMessage, { ChatMessageData } from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

interface ChatWindowProps {
  title?: string;
  messages: ChatMessageData[];
  startAnimation?: boolean;
  className?: string;
}

export default function ChatWindow({
  title = "DevPlatform Community",
  messages,
  startAnimation = false,
  className = "",
}: ChatWindowProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // 메시지 순차 표시 애니메이션
  useEffect(() => {
    if (startAnimation && currentMessageIndex < messages.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setCurrentMessageIndex((prev) => prev + 1);
        setIsTyping(false);
      }, 1000 + currentMessageIndex * 800);

      return () => clearTimeout(timer);
    }
  }, [startAnimation, currentMessageIndex, messages.length]);

  return (
    <div
      className={`bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 ${className}`}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
          <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="ml-4 text-white font-medium">{title}</div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-80 p-6 space-y-4 overflow-y-auto bg-gray-50">
        {messages.slice(0, currentMessageIndex).map((msg, index) => (
          <ChatMessage key={index} message={msg} index={index} />
        ))}

        {/* Typing Indicator */}
        {isTyping && currentMessageIndex < messages.length && <TypingIndicator />}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="질문을 입력해보세요..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          />
          <button className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-200">
            <RiSendPlaneLine size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

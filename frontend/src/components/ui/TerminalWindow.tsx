"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TerminalWindowProps {
  fileName?: string;
  codeText: string;
  typingSpeed?: number;
  startTyping?: boolean;
}

export default function TerminalWindow({
  fileName = "DevPlatform.tsx",
  codeText,
  typingSpeed = 50,
  startTyping = true,
}: TerminalWindowProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // 타이핑 애니메이션 효과
  useEffect(() => {
    if (startTyping && currentIndex < codeText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + codeText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, codeText, typingSpeed, startTyping]);

  return (
    <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="ml-4 text-gray-400 text-sm">{fileName}</div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 h-80 bg-gray-900">
        <pre className="text-green-400 font-mono text-sm leading-relaxed">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="text-green-400"
          >
            |
          </motion.span>
        </pre>
      </div>
    </div>
  );
}

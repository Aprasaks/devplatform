"use client";

import { motion } from "framer-motion";
import { RiUser3Line } from "@remixicon/react";

export interface ChatMessageData {
  user: string;
  message: string;
  time: string;
  isQuestion: boolean;
}

interface ChatMessageProps {
  message: ChatMessageData;
  index: number;
}

export default function ChatMessage({ message, index }: ChatMessageProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex ${message.isQuestion ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs px-4 py-3 rounded-2xl ${
          message.isQuestion
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            : "bg-white text-gray-800 shadow-md"
        }`}
      >
        <div className="flex items-center space-x-2 mb-1">
          <RiUser3Line size={14} className={message.isQuestion ? "text-white" : "text-gray-600"} />
          <span
            className={`text-xs font-medium ${message.isQuestion ? "text-white" : "text-gray-600"}`}
          >
            {message.user}
          </span>
          <span className={`text-xs ${message.isQuestion ? "text-purple-100" : "text-gray-400"}`}>
            {message.time}
          </span>
        </div>
        <p className="text-sm leading-relaxed">{message.message}</p>
      </div>
    </motion.div>
  );
}

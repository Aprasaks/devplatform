"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
}: AnimatedTextProps) {
  const getInitialPosition = () => {
    const positions = {
      up: { opacity: 0, y: 20 },
      down: { opacity: 0, y: -20 },
      left: { opacity: 0, x: -20 },
      right: { opacity: 0, x: 20 },
    };
    return positions[direction];
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}

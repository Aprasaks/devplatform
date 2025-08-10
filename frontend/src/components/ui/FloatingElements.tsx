"use client";

import { motion } from "framer-motion";

interface FloatingElement {
  position:
    | "top-right"
    | "bottom-left"
    | "top-left"
    | "bottom-right"
    | "center-left"
    | "center-right";
  size: "sm" | "md" | "lg";
  gradient: string;
  duration?: number;
  delay?: number;
}

interface FloatingElementsProps {
  elements?: FloatingElement[];
}

const defaultElements: FloatingElement[] = [
  {
    position: "top-right",
    size: "md",
    gradient: "from-pink-500 to-violet-500",
    duration: 4,
    delay: 0,
  },
  {
    position: "bottom-left",
    size: "sm",
    gradient: "from-blue-500 to-cyan-500",
    duration: 3,
    delay: 0,
  },
];

export default function FloatingElements({ elements = defaultElements }: FloatingElementsProps) {
  const getPositionClasses = (position: FloatingElement["position"]) => {
    const positions = {
      "top-right": "-top-4 -right-4",
      "bottom-left": "-bottom-4 -left-4",
      "top-left": "-top-4 -left-4",
      "bottom-right": "-bottom-4 -right-4",
      "center-left": "top-1/2 -left-8",
      "center-right": "top-1/2 -right-8",
    };
    return positions[position];
  };

  const getSizeClasses = (size: FloatingElement["size"]) => {
    const sizes = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
    };
    return sizes[size];
  };

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          animate={{
            y: element.position.includes("top") ? [-10, 10, -10] : [10, -10, 10],
            x: element.position.includes("center") ? [-5, 5, -5] : [0, 0, 0],
            rotate: [0, element.position.includes("right") ? 5 : -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: element.duration || 4,
            delay: element.delay || 0,
          }}
          className={`
            absolute 
            ${getPositionClasses(element.position)} 
            ${getSizeClasses(element.size)} 
            bg-gradient-to-r ${element.gradient} 
            rounded-full blur-sm opacity-60
          `}
        />
      ))}
    </>
  );
}

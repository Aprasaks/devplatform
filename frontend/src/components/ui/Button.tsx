"use client";

import { motion } from "framer-motion";
import { ButtonProps } from "@/types/button";
import {
  BUTTON_VARIANT_STYLES,
  BUTTON_SIZE_STYLES,
  BUTTON_GLOW_GRADIENTS,
  BUTTON_ANIMATION,
  BUTTON_BASE_STYLES,
} from "@/constants/button";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  icon,
  animated = true,
  glow = true,
  fullWidth = false,
}: ButtonProps) {
  const buttonStyles = `
    ${BUTTON_BASE_STYLES}
    ${fullWidth ? "w-full" : ""}
    ${BUTTON_VARIANT_STYLES[variant]}
    ${BUTTON_SIZE_STYLES[size]}
    ${className}
  `;

  const buttonContent = (
    <div className="relative flex items-center justify-center space-x-2">
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </div>
  );

  // Glow 효과가 필요한 variant들
  const hasGlow =
    glow &&
    (variant === "primary" || variant === "hero" || variant === "community" || variant === "share");

  if (!animated) {
    return (
      <button className={`group ${buttonStyles}`} onClick={onClick} disabled={disabled}>
        {/* Glow effect */}
        {hasGlow && (
          <div
            className={`absolute inset-0 bg-gradient-to-r ${BUTTON_GLOW_GRADIENTS[variant]} rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
          />
        )}
        {buttonContent}
      </button>
    );
  }

  return (
    <motion.button
      className={`group ${buttonStyles}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : BUTTON_ANIMATION.hover}
      whileTap={disabled ? {} : BUTTON_ANIMATION.tap}
      transition={BUTTON_ANIMATION.transition}
    >
      {/* Glow effect */}
      {hasGlow && (
        <div
          className={`absolute inset-0 bg-gradient-to-r ${BUTTON_GLOW_GRADIENTS[variant]} rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300`}
        />
      )}

      {buttonContent}
    </motion.button>
  );
}

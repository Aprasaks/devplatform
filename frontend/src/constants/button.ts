import { ButtonVariant, ButtonSize } from "@/types/button";

// Variant별 스타일
export const BUTTON_VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl",
  secondary:
    "bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50",
  hero: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl",
  community: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl",
  share: "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-xl",
  outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
};

// Size별 스타일
export const BUTTON_SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

// Glow 효과용 그라데이션
export const BUTTON_GLOW_GRADIENTS: Record<ButtonVariant, string> = {
  primary: "from-indigo-600 to-purple-600",
  secondary: "from-gray-300 to-gray-400",
  hero: "from-indigo-600 to-purple-600",
  community: "from-purple-600 to-pink-600",
  share: "from-orange-600 to-red-600",
  outline: "from-indigo-600 to-purple-600",
};

// 애니메이션 설정
export const BUTTON_ANIMATION = {
  hover: {
    scale: 1.05,
    y: -2,
  },
  tap: {
    scale: 0.95,
  },
  transition: {
    duration: 0.2,
    ease: "easeOut" as const,
  },
};

// 기본 스타일
export const BUTTON_BASE_STYLES = `
  relative overflow-hidden rounded-xl font-semibold
  transition-all duration-300 cursor-pointer
  disabled:opacity-50 disabled:cursor-not-allowed
`;

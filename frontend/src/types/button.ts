import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "hero" | "community" | "share" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  animated?: boolean;
  glow?: boolean;
  fullWidth?: boolean;
}

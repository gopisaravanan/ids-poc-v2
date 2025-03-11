import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import "../styles/tailwind.css"
export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "success" | null | undefined;
  size?: "sm" | "md" | "lg" | null | undefined
}

const buttonVariants = cva(
  "px-4 py-2 text-white border-none rounded-md cursor-pointer transition-all",
  {
    variants: {
      variant: {
        primary: "bg-primary-2 hover:bg-primary-3/20",
        secondary: "bg-secondary-1 hover:bg-secondary-1/90",
        success: "bg-success-2 hover:bg-success-2/90",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button: React.FC<ButtonProps> = ({ children, onClick, variant, size, className }) => {
  return (
    <button
    className={buttonVariants({ variant, size, className })}
    onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
import React from "react";
import './index.css'
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
    className="px-4 py-2 bg-red-600 text-white border-none rounded-md cursor-pointer"
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

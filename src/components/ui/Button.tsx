import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn-primary focus:outline focus:outline-offset-2 outline-primary ${className}`}
    >
      {children}
    </button>
  );
};

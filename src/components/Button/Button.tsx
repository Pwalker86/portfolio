import React, { FC } from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClickFunc?: () => void;
  role?: string;
  disabled?: boolean;
  corners?: "rounded" | "square";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
  children,
  onClickFunc,
  role = "button",
  disabled = false,
  corners = "rounded",
  size = "medium",
  type = "button",
}) => {
  return (
    <button
      className={`Button ${corners} ${size} primary`}
      onClick={onClickFunc}
      role={role}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

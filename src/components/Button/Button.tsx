import React, { FC } from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClickFunc?: Function;
  corners?: "rounded" | "square" | "rounded-square";
  size?: "tiny" | "small" | "medium" | "large";
  color?: "primary" | "secondary" | "transparent";
}

const Button: FC<ButtonProps> = ({
  children,
  onClickFunc,
  corners = "rounded",
  size = "medium",
  color = "primary",
  ...props
}) => {
  return (
    <button
      className={`Button ${corners} ${size} ${color}`}
      onClick={onClickFunc as any}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

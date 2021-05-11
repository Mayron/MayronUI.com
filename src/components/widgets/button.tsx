/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import { Link } from "gatsby";
import React from "react";
import buttons, { ButtonType } from "../../styles/css/buttons";

interface IButtonProps {
  type: ButtonType;
  size?: "lg";
  onClick?: () => void;
  styles?: SerializedStyles;
  href?: string;
  target?: string;
  buttonType?: "submit" | "button";
}

const Button: React.FC<IButtonProps> = ({
  type,
  size,
  children,
  onClick,
  styles,
  href,
  target,
  buttonType = "button",
}) => {
  const external = /^http?/.test(href || "");

  const handleOnClick = () => {
    onClick && onClick();
  };

  if (external && href) {
    return (
      <a
        rel="noopener noreferrer"
        className={size}
        css={[buttons[type], styles]}
        onClick={handleOnClick}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        to={href}
        className={size}
        css={[buttons[type], styles]}
        onClick={handleOnClick}
        target={target}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={buttonType}
      className={size}
      css={[buttons[type], styles]}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;

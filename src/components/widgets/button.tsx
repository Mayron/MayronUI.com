/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import { Link } from "gatsby";
import React, { useContext } from "react";
import buttons, { ButtonType } from "../../styles/css/buttons";
import { sendGtagEvent } from "../../utils/common";
import { LayoutContext } from "../layout";

interface IButtonProps {
  type: ButtonType;
  size?: "lg";
  onClick?: () => void;
  styles?: SerializedStyles;
  ga?: { action: string; label?: string; value?: number };
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
  ga,
  href,
  target,
  buttonType = "button",
}) => {
  const { gaCategory } = useContext(LayoutContext);
  const external = /^http?/.test(href || "");

  const handleOnClick = () => {
    onClick && onClick();

    if (ga) {
      sendGtagEvent(gaCategory, ga.action, ga.label, ga.value);
    }
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

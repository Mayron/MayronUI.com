/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import { Link } from "gatsby";
import React, { useContext } from "react";
import { sendGtagEvent } from "../../utils/common";
import { LayoutContext } from "../layout";

interface IGaLinkProps {
  href: string;
  styles?: SerializedStyles;
  ga?: { action: string; label?: string; value?: number };
  target?: string;
}

const GaLink: React.FC<IGaLinkProps> = ({ href, children, styles, ga, target }) => {
  const { gaCategory } = useContext(LayoutContext);
  const external = /^http?/.test(href || "");

  const handleOnClick = () => {
    if (ga) {
      sendGtagEvent(gaCategory, ga.action, ga.label, ga.value);
    }
  };

  if (external) {
    return (
      <a
        rel="noopener noreferrer"
        css={styles}
        onClick={handleOnClick}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} css={styles} onClick={handleOnClick} target={target}>
      {children}
    </Link>
  );
};

export default GaLink;

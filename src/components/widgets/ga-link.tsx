/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import { Link } from "gatsby";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import React, { useContext } from "react";
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
      trackCustomEvent({
        category: gaCategory,
        action: ga.action,
        label: ga.label,
        value: ga.value,
      });
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

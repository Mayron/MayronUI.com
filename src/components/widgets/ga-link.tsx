/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import { Link } from "gatsby";
import React from "react";

interface IGaLinkProps {
  href: string;
  styles?: SerializedStyles;
  target?: string;
}

// No longer using google analytics (it was taken out)
const GaLink: React.FC<IGaLinkProps> = ({ href, children, styles, target }) => {
  const external = /^http?/.test(href || "");

  if (external) {
    return (
      <a rel="noopener noreferrer" css={styles} href={href} target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link to={href} css={styles} target={target}>
      {children}
    </Link>
  );
};

export default GaLink;

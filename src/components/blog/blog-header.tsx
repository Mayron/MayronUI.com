/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import vars from "../../styles/variables";
import BlogMetaData from "./blog-meta-data";

interface IBlogHeaderProps {
  title: string;
  timeToRead: number;
  createdAt: string;
}

const BlogHeader: React.FC<IBlogHeaderProps> = ({ title, timeToRead, createdAt }) => {
  return (
    <header
      css={css`
        padding-bottom: ${vars.sectionSpacing};
      `}
    >
      <h1
        css={css`
          text-align: left;
          line-height: 2.75rem;
          padding-bottom: 30px;
        `}
      >
        {title}
      </h1>
      <BlogMetaData createdAt={createdAt} timeToRead={timeToRead} includeSocials />
    </header>
  );
};

export default BlogHeader;

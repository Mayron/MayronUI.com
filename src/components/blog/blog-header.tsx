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
          font-size: 2rem;
          line-height: 2.5rem;
          padding-bottom: 31px;
        `}
      >
        {title}
      </h1>
      <BlogMetaData createdAt={createdAt} timeToRead={timeToRead} includeSocials />
    </header>
  );
};

export default BlogHeader;

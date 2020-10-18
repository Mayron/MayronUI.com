/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import React from "react";
import colors from "../../styles/colors";
import vars from "../../styles/variables";
import styled from "@emotion/styled";
import BlogMetaData from "./blog-meta-data";
import { getSlug } from "../../utils/common";

const featuredCss = css`
  border-color: ${colors.theme};

  h2 {
    color: ${colors.theme};
  }
`;

const ArticleHeader = styled.h2`
  text-align: left;
  font-size: 1.15rem;
  font-family: ${vars.robotoFontFamily};
  text-transform: none;
  line-height: 1.4rem;

  span {
    line-height: 1.4rem;
  }
`;

interface IBlogPostPreviewProps {
  data: IBlogPost;
  query: string;
}

const BlogPostPreview: React.FC<IBlogPostPreviewProps> = ({ data, query }) => {
  const { createdAt, excerpt, timeToRead, title, featured } = data;
  const queryRegEx = new RegExp(query, "ig");

  const highlight = (text: string) => {
    if (!query) return text;
    return text.replace(queryRegEx, (match) => `<span>${match}</span>`);
  };

  return (
    <li
      css={css`
        margin: 15px 0;

        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      `}
    >
      <Link
        to={`/blog/post/${getSlug(title)}`}
        css={[
          css`
            border: 1px solid ${colors.grey.uiBorder};
            border-radius: ${vars.borderRadius};
            padding: 15px 30px;
            background-color: ${colors.white};
            display: block;
            color: ${colors.black};
            text-decoration: none;
            font-size: 16px;

            span {
              background-color: #caddef;
              border-radius: 2px;
            }

            &:hover {
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            }
          `,
          featured && featuredCss,
        ]}
      >
        <ArticleHeader
          dangerouslySetInnerHTML={{
            __html: highlight(title),
          }}
        />

        <p
          css={css`
            padding: 15px 0;
            font-size: 0.9rem;
          `}
          dangerouslySetInnerHTML={{
            __html: highlight(excerpt),
          }}
        ></p>
        <BlogMetaData createdAt={createdAt} timeToRead={timeToRead} small />
      </Link>
    </li>
  );
};

export default BlogPostPreview;

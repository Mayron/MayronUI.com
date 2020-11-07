/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import colors from "../../styles/colors";
import vars from "../../styles/variables";
import LazyImage from "../common/lazy-image";
import BlogSocialMediaIcons from "./blog-social-media-icons";
import BackButton from "../common/back-button";

const BlogFooter: React.FC = () => {
  return (
    <footer
      css={css`
        margin-top: ${vars.sectionSpacing};
        border-top: 1px solid ${colors.grey.uiBorder};
        padding: 20px 0;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 40px;
        `}
      >
        <LazyImage
          src="/images/profile-pic.jpg"
          alt="Author"
          styles={css`
            width: 64px;
            height: 64px;
            border-radius: 50px;
            margin-right: 20px;
          `}
        />
        <div>
          <p
            css={css`
              text-transform: uppercase;
              color: ${colors.text.secondary};
              font-size: 0.75rem;
            `}
          >
            Written By
          </p>
          <p
            css={css`
              font-weight: ${vars.robotoFontWeightBold};
              font-size: 1.25rem;
            `}
          >
            Mayron
          </p>
        </div>
        <BlogSocialMediaIcons />
      </div>
      <BackButton href="/blog" text="Back to Blog" />
    </footer>
  );
};

export default BlogFooter;

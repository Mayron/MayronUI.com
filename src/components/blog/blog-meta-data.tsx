/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import TimeAgo from "react-timeago";
import colors from "../../styles/colors";
import vars from "../../styles/variables";
import LazyImage from "../common/lazy-image";
import BlogSocialMediaIcons from "./blog-social-media-icons";

interface IBlogMetaDataProps {
  timeToRead: number;
  createdAt: string;
  includeSocials?: boolean;
  small?: boolean;
}

const BlogMetaData: React.FC<IBlogMetaDataProps> = ({
  timeToRead,
  createdAt,
  includeSocials,
  small,
}) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;

        ${small
          ? css`
              font-size: ${vars.extraSmallFontSize};
            `
          : css`
              font-size: ${vars.smallFontSize};
            `}
      `}
    >
      <LazyImage
        src="/images/profile-pic.jpg"
        alt="Author"
        styles={css`
          ${small
            ? css`
                width: 40px;
                height: 40px;
              `
            : css`
                width: 54px;
                height: 54px;
              `}

          border-radius: 50px;
          margin-right: 10px;
        `}
      />
      <div>
        <p
          css={css`
            line-height: 0.9rem;
            font-weight: ${vars.robotoFontWeightBold};
            padding-bottom: 2px;
          `}
        >
          Mayron
        </p>
        <div
          css={css`
            color: ${colors.text.secondary};
            display: flex;
          `}
        >
          <TimeAgo date={createdAt} />
          <p
            css={css`
              margin-left: 8px;
              border-left: 2px solid ${colors.theme};
              padding-left: 8px;
            `}
          >
            {timeToRead} min read
          </p>
        </div>
      </div>

      {includeSocials && <BlogSocialMediaIcons />}
    </div>
  );
};

export default BlogMetaData;

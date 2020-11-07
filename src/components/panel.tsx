/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import colors from "../styles/colors";
import vars from "../styles/variables";
import ContentfulArticle from "./blog/contentful-article";

interface IPanelProps {
  header: string;
}

const Panel: React.FC<IPanelProps> = ({ header, children }) => {
  return (
    <div
      css={css`
        border: 1px solid ${colors.grey.uiBorder};
        border-radius: ${vars.borderRadius};
        padding: 25px 20px;
        background-color: ${colors.white};
        margin-bottom: 15px;
      `}
    >
      <ContentfulArticle>
        <h2
          css={css`
            font-size: 1.5rem;
            margin-bottom: 10px;
            text-transform: none;
          `}
        >
          {header}
        </h2>
        {children}
      </ContentfulArticle>
    </div>
  );
};

export default Panel;

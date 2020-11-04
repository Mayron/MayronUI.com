/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Section from "../../styles/css/containers";
import media from "../../styles/media";
import vars from "../../styles/variables";
import Button from "../widgets/button";

const ReadyToGetStarted: React.FC = () => {
  return (
    <Section
      css={css`
        text-align: center;
        padding-top: 60px !important;

        p {
          font-size: ${vars.largeFontSize};
          padding-top: 10px;
          padding-bottom: 40px;
        }

        ${media.down("xs")`
          padding-bottom: 60px;
          
          p {
            padding-left: 40px;
            padding-right: 40px;
          }
        `};
      `}
    >
      <h3>Ready to get started?</h3>
      <p>Visit the MayronUI download page to learn more.</p>
      <Button type="secondary" size="lg" href="/p/mayronui">
        Go to Download Page
      </Button>
    </Section>
  );
};

export default ReadyToGetStarted;

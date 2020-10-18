/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Section from "../../styles/css/containers";
import vars from "../../styles/variables";
import Button from "../widgets/button";

const ReadyToGetStarted: React.FC = () => {
  return (
    <Section
      css={css`
        text-align: center;
        padding-top: 60px;
      `}
    >
      <h3>Ready to get started?</h3>
      <p
        css={css`
          font-size: ${vars.statementLargeFontSize};
          padding-top: 10px;
          padding-bottom: 40px;
        `}
      >
        Visit the MayronUI download page to learn more.
      </p>
      <Button type="secondary" size="lg" href="/p/mayronui">
        Go to Download Page
      </Button>
    </Section>
  );
};

export default ReadyToGetStarted;

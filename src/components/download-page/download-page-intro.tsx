/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { container } from "../../styles/css/containers";
import vars from "../../styles/variables";

interface IDownloadPageIntroProps {
  header: string;
  description: string;
}

const Description = styled.p`
  font-weight: ${vars.robotoFontWeightMedium};
`;

const Header = styled.header`
  max-width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    text-align: left;
    text-transform: none;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

  button {
    margin: 0;
  }
`;

const DownloadPageIntro: React.FC<IDownloadPageIntroProps> = ({
  header,
  children,
  description,
}) => {
  return (
    <section
      css={[
        container,
        css`
          padding-top: ${vars.sectionSpacing};
          position: relative;
          max-width: 1000px;
          display: flex;
        `,
      ]}
    >
      <Header>
        <h1>{header}</h1>
        <Description>{description}</Description>
      </Header>
      <Options>{children}</Options>
    </section>
  );
};

export default DownloadPageIntro;

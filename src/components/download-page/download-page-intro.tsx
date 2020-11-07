/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { container } from "../../styles/css/containers";
import media from "../../styles/media";
import vars from "../../styles/variables";
import BackButton from "../common/back-button";

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
    <div
      css={[
        container,
        css`
          max-width: 1000px;
          padding-top: 20px;
        `,
      ]}
    >
      <BackButton href="/downloads" text="Back to Downloads" />
      <section
        css={css`
          padding-top: ${vars.sectionSpacing};
          position: relative;
          display: flex;

          ${media.down("sm")`
            flex-direction: column;
            align-items: center;

            header h1 {
              text-transform: none;
              text-align: center;
              font-size: 2rem;
            }

            p {
              font-size: 1.1rem;
              padding: 10px;
              text-align: center;
            }
          `};
        `}
      >
        <Header>
          <h1>{header}</h1>
          <Description>{description}</Description>
        </Header>
        <Options>{children}</Options>
      </section>
    </div>
  );
};

export default DownloadPageIntro;

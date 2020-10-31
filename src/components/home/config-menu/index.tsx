/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { evenSpacing } from "../../../styles/css/alignment";
import Section, { BlueContainer } from "../../../styles/css/containers";
import vars from "../../../styles/variables";
import LazyImage from "../../common/lazy-image";

const BulletList = styled.ul`
  list-style-type: disc;
  li {
    padding-bottom: 10px;

    &:last-of-type {
      padding-bottom: 0;
    }
  }
`;

interface IConfigMenuProps {
  header: string;
}

const ConfigMenu: React.FC<IConfigMenuProps> = ({ header, children }) => {
  return (
    <BlueContainer
      css={css`
        position: relative;
        z-index: 10;
      `}
    >
      <Section width="slim" verticalSpacing="large">
        <Fade triggerOnce>
          <header>
            <h2>{header}</h2>
          </header>
          <div css={evenSpacing}>
            <BulletList>{children}</BulletList>
            <LazyImage
              src="/images/config.gif"
              alt="Advanced configuration menu"
              styles={css`
                border-radius: ${vars.borderRadius};
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
              `}
            />
          </div>
        </Fade>
      </Section>
    </BlueContainer>
  );
};

export default ConfigMenu;

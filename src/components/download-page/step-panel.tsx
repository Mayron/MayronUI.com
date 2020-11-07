/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import colors from "../../styles/colors";
import vars from "../../styles/variables";
import ContentfulArticle from "../blog/contentful-article";
import Reveal from "react-awesome-reveal";
import { InView } from "react-intersection-observer";
import { getSlug } from "../../utils/common";
import media from "../../styles/media";

interface IPanelProps {
  data: IStep;
  onInView: (step: number) => void;
}

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StepPanel: React.FC<IPanelProps> = ({ data, onInView }) => {
  const { title, content, step } = data;
  const id = getSlug(title);

  return (
    <Reveal keyframes={customAnimation} triggerOnce>
      <InView threshold={0.5} delay={100} trackVisibility>
        {({ inView, ref }) => {
          if (inView) {
            onInView(step);
          }
          return (
            <PanelContainer ref={ref}>
              <div
                id={id}
                css={css`
                  position: absolute;
                  top: -70px;
                `}
              ></div>
              <PanelHeader>
                <StepNumber>{step}</StepNumber>
                <h2>{title}</h2>
              </PanelHeader>
              <ContentfulArticle
                dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
              />
            </PanelContainer>
          );
        }}
      </InView>
    </Reveal>
  );
};

const PanelContainer = styled.article`
  position: relative;
  border: 1px solid ${colors.grey.uiBorder};
  border-radius: ${vars.borderRadius};
  padding: 25px 20px;
  width: ${vars.textContainerWidth};
  background-color: ${colors.white};
  margin-bottom: 15px;
`;

const PanelHeader = styled.header`
  display: flex;

  h2 {
    text-align: left;
    font-size: ${vars.largeFontSize};
    margin-bottom: 20px;
    color: ${colors.blue.dark};
  }
`;

const StepNumber = styled.span`
  font-size: ${vars.largeFontSize};
  font-family: ${vars.nunitoFontFamily};
  font-weight: ${vars.nunitoFontWeightExtraBold};
  margin-right: 15px;
  color: ${colors.blue.dark};
`;

export default React.memo<React.FC<IPanelProps>>(StepPanel);

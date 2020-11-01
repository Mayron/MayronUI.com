/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { ICarouselImagesNode } from ".";
import { evenSpacing } from "../../../styles/css/alignment";
import { SlideContainer, SlideDetailsContainer } from "./styles";
import Img from "gatsby-image";

export interface ISlideProps {
  header: string;
  node: ICarouselImagesNode;
  imageSrc: string;
}

const Slide: React.FC<ISlideProps> = ({ header, node, imageSrc, children }) => {
  return (
    <div css={evenSpacing}>
      <SlideContainer>
        <a href={imageSrc} rel="noreferrer" target="_blank">
          <Img fluid={node.preview.fluid} alt={node.name} />
        </a>
      </SlideContainer>
      <SlideDetailsContainer>
        <Fade triggerOnce>
          <h3>{header}</h3>
        </Fade>

        <Fade triggerOnce>{children}</Fade>
      </SlideDetailsContainer>
    </div>
  );
};

export default Slide;

/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { ICarouselImagesNode } from ".";
import { SlideContainer, SlideDetailsContainer } from "./styles";
import Img from "gatsby-image";
import media from "../../../styles/media";

export interface ISlideProps {
  header: string;
  node: ICarouselImagesNode;
  imageSrc: string;
  index: number;
  total: number;
}

const Slide: React.FC<ISlideProps> = ({
  header,
  node,
  imageSrc,
  children,
  index,
  total,
}) => {
  return (
    <div css={media.up("lg")`display: flex;`}>
      <SlideContainer>
        <a href={imageSrc} rel="noreferrer" target="_blank">
          <Img fluid={node.preview.fluid} alt={node.name}></Img>
          <span>
            {index + 1}/{total}
          </span>
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

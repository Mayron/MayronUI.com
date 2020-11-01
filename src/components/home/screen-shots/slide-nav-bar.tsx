/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useContext } from "react";
import { CarouselContext } from "./carousel";
import { arrowCss, OptionListItem, OptionsNavBar } from "./styles";
import { ReactComponent as ArrowSvg } from "../../../images/carousel-arrow.svg";
import { flex } from "../../../styles/css/alignment";

const SliderNavBar: React.FC = ({ children }) => {
  const { shiftRight, shiftLeft, setSelected, order, selected } = useContext(
    CarouselContext,
  );
  const thumbnails: React.ReactNode[] = [];

  // collect a list of thumbnail images from children and sort them based on order state
  console.log("---------------------");
  React.Children.forEach(children, (img, originalPosition) => {
    // order = an array of positions based on user interaction stored in order state
    // const orderedPosition = order[originalPosition];
    thumbnails[originalPosition] = img;
    console.log(`originalPosition: ${originalPosition}, img alt: ${img.props.alt}`);
  });
  console.log("---------------------");

  return (
    <OptionsNavBar role="toolbar">
      <button onClick={shiftLeft} css={arrowCss}>
        <ArrowSvg title="previous" />
      </button>

      <ul css={flex}>
        {thumbnails.map((img, index) => (
          <OptionListItem
            key={index}
            onClick={() => setSelected(index)}
            className={index === selected ? "active" : ""}
          >
            <span>{index}</span>
            {img}
          </OptionListItem>
        ))}
      </ul>

      <button
        onClick={shiftRight}
        css={[
          arrowCss,
          css`
            transform: rotate(180deg);
          `,
        ]}
      >
        <ArrowSvg title="next" />
      </button>
    </OptionsNavBar>
  );
};

export default SliderNavBar;

/* eslint-disable @typescript-eslint/ban-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Img from "gatsby-image";
import { Fade } from "react-awesome-reveal";
import Slide, { ISlideProps } from "./slide";
import SliderNavBar from "./slide-nav-bar";
import media, { breakpoints } from "../../../styles/media";

interface ICarouselContext {
  shiftRight: () => void;
  shiftLeft: () => void;
  setSelected: (selected: number) => void;
  order: number[];
  selected: number;
  maxNavItems: number;
}

const dummyFunc = () => {
  return;
};
export const CarouselContext = React.createContext<ICarouselContext>({
  shiftRight: dummyFunc,
  shiftLeft: dummyFunc,
  setSelected: dummyFunc,
  order: [],
  selected: 0,
  maxNavItems: 0,
});

interface ICarouselState {
  order: number[];
  selected: number;
  maxNavItems: number;
}

class Carousel extends React.Component<{}, ICarouselState> {
  static Slide = Slide;
  static NavBar = SliderNavBar;
  static Option = Option;

  shift(start: number): void {
    const { order } = this.state;
    const newOrder = [...order];
    const proceeding = newOrder.splice(start, order.length);
    newOrder.unshift(...proceeding);
    this.setState({ ...this.state, order: newOrder });
  }

  shiftLeft(): void {
    this.shift(this.state.order.length - 1);
  }

  shiftRight(): void {
    this.shift(this.state.order.length - (this.state.order.length - 1));
  }

  setSelected(selected: number): void {
    this.setState({ ...this.state, selected });
  }

  checkWindowWidth(): void {
    let maxNavItems = 5;

    if (window.innerWidth <= 750) {
      maxNavItems = 4;
    } else if (window.innerWidth <= 960) {
      maxNavItems = 3;
    } else if (window.innerWidth <= 1140) {
      maxNavItems = 4;
    }

    if (this.state.maxNavItems !== maxNavItems) {
      this.setState({ ...this.state, maxNavItems });
    }
  }

  componentDidMount(): void {
    this.checkWindowWidth();
    window.addEventListener("resize", this.checkWindowWidth);
  }

  constructor(props: {}) {
    super(props);
    this.shiftRight = this.shiftRight.bind(this);
    this.shiftLeft = this.shiftLeft.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.checkWindowWidth = this.checkWindowWidth.bind(this);

    this.state = {
      selected: 0,
      order: Array.from(Array(React.Children.count(this.props.children)).keys()),
      maxNavItems: 5,
    };
  }

  render(): JSX.Element {
    const slides: React.ReactNode[] = [];

    // fill slides with children based on order state
    React.Children.forEach(this.props.children, (item, index) => {
      if (React.isValidElement(item)) {
        const e = item.type as React.FC;

        if (e === Slide || e.displayName === "Slide") {
          const position = this.state.order[index];
          slides[position] = item;
        }
      }
    });

    return (
      <React.Fragment>
        {slides[this.state.selected]}
        <CarouselContext.Provider
          value={{
            shiftRight: this.shiftRight,
            shiftLeft: this.shiftLeft,
            setSelected: this.setSelected,
            order: this.state.order,
            selected: this.state.selected,
            maxNavItems: this.state.maxNavItems,
          }}
        >
          <Fade
            triggerOnce
            css={css`
              display: flex;
              justify-content: center;
              height: 124.16px;

              ${media.down("md")`
                height: auto;
              `};
            `}
          >
            <Carousel.NavBar>
              {slides.map((s, key) => {
                const slide = s as React.ReactElement<ISlideProps>;
                const props = slide.props as ISlideProps & { children?: React.ReactNode };

                return (
                  <Img
                    key={key}
                    fixed={props.node.thumbnail.fixed}
                    alt={props.node.name}
                  />
                );
              })}
            </Carousel.NavBar>
          </Fade>
        </CarouselContext.Provider>
      </React.Fragment>
    );
  }
}

export default Carousel;

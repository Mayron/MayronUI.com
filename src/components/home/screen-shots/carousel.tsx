/* eslint-disable @typescript-eslint/ban-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useContext } from "react";
import colors from "../../../styles/colors";
import alignment from "../../../styles/css/alignment";
import { breakpoints } from "../../../styles/media";
import LazyImage from "../../common/lazy-image";
import { ReactComponent as ArrowButton } from "../../../images/carousel-arrow.svg";
import vars from "../../../styles/variables";
import { Fade } from "react-awesome-reveal";

const arrowCss = css`
  outline: none;
  border: none;
  padding: 0 20px;
  background: none;

  &:hover {
    cursor: pointer;
    path {
      fill: ${colors.link.hover};
    }
  }
`;

interface IOptionProps {
  imageSrc: string;
  imageAlt: string;
}

const Option: React.FC<IOptionProps> = ({ imageSrc, imageAlt }) => {
  return <LazyImage src={imageSrc} alt={imageAlt} />;
};

interface ICarouselContext {
  clickOption: (next: number) => void;
  current: number;
  order: number[];
}

const CarouselContext = React.createContext<ICarouselContext | null>(null);

const SliderNavBar: React.FC = ({ children }) => {
  const { clickOption, current, order } = useContext(CarouselContext) as ICarouselContext;

  const options: React.ReactNode[] = [];
  React.Children.forEach(children, (option, originalPosition) => {
    const position = order[originalPosition];
    options[position] = option;
  });

  return (
    <nav
      role="toolbar"
      css={css`
        display: flex;
        margin-top: 15px;
        padding: 20px 0;
      `}
    >
      <button onClick={() => clickOption(current - 1)} css={arrowCss}>
        <ArrowButton title="previous" />
      </button>

      <ul
        css={css`
          display: flex;
        `}
      >
        {options.map((option, key) => (
          <li
            key={key}
            onClick={() => clickOption(key)}
            className={key === current ? "active" : ""}
            css={css`
              margin: 0 5px;
              user-select: none;
              flex: 1;

              img {
                width: 100%;
                border-radius: ${vars.borderRadius};
              }

              &.active {
                img {
                  border: 2px solid ${colors.white};
                  filter: drop-shadow(0 4px 6px #212121) brightness(1.8);
                }
              }

              &:hover {
                cursor: pointer;
                img {
                  filter: drop-shadow(0 2px 4px ${colors.black}) brightness(2);
                }
              }
            `}
          >
            {option}
          </li>
        ))}
      </ul>

      <button
        onClick={() => clickOption(current + 1)}
        css={[
          arrowCss,
          css`
            transform: rotate(180deg);
          `,
        ]}
      >
        <ArrowButton title="next" />
      </button>
    </nav>
  );
};

interface ISlideProps {
  header: string;
  imageSrc: string;
  imageAlt: string;
}

const Slide: React.FC<ISlideProps> = ({ header, imageSrc, imageAlt, children }) => {
  return (
    <div css={alignment.horizontal.even}>
      <div
        css={css`
          flex: 2;
          position: relative;
          z-index: 10;

          img {
            width: 100%;
          }

          &::before {
            content: "Click image to enlarge";
            height: 24px;
            width: 40%;
            top: -12px;
            right: 50%;
            background-color: ${colors.blue.dark};
            position: absolute;
            font-size: 0.7rem;
            color: ${colors.white};
            line-height: 24px;
            padding-left: 10px;
          }
        `}
      >
        <a href={imageSrc} rel="noreferrer" target="_blank">
          <LazyImage
            src={imageSrc}
            alt={imageAlt}
            styles={css`
              padding: 10px;
              border: 2px solid ${colors.white};
              border-radius: 20px;
            `}
          />
        </a>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 40px;
          padding-bottom: 40px;
        `}
      >
        <Fade triggerOnce>
          <h3
            css={css`
              color: ${colors.white};
              margin-right: 40px;
              margin-bottom: 60px;
              height: 88px;
            `}
          >
            {header}
          </h3>
        </Fade>

        <Fade direction="left" triggerOnce>
          <p
            css={css`
              border-left: 4px solid ${colors.blue.faint};
              margin-left: -20px;
              padding-left: 15px;
            `}
          >
            {children}
          </p>
        </Fade>
      </div>
    </div>
  );
};

interface ICarouselState {
  current: number;
  order: number[];
  mobile: boolean;
}

class Carousel extends React.Component<{}, ICarouselState> {
  static Slide = Slide;
  static NavBar = SliderNavBar;
  static Option = Option;

  handleOptionClick(next: number): void {
    const { order } = this.state;
    const newOrder = [...order];

    if (next >= order.length) {
      next = 0;
    } else if (next < 0) {
      next = order.length - 1;
    }

    if (window.innerWidth < breakpoints["xl"]) {
      const proceeding = newOrder.splice(order.length - next, order.length);
      newOrder.unshift(...proceeding);
      next = 0;
    }

    this.setState({ current: next, order: [...newOrder] });
  }

  checkWindowWidth(): void {
    const mobile = window.innerWidth <= breakpoints["sm"];

    if (this.state.mobile !== mobile) {
      this.setState({ ...this.state, mobile: mobile });
    }
  }

  componentDidMount(): void {
    this.checkWindowWidth();
    window.addEventListener("resize", () => this.checkWindowWidth());
  }

  constructor(props: {}) {
    super(props);
    this.handleOptionClick.bind(this);
    this.state = {
      current: 0,
      order: Array.from(Array(React.Children.count(this.props.children)).keys()),
      mobile: false,
    };
  }

  render(): JSX.Element {
    const slides: React.ReactNode[] = [];

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
      <div>
        {slides[this.state.current]}{" "}
        <CarouselContext.Provider
          value={{
            clickOption: (next) => {
              this.handleOptionClick(next);
            },
            order: this.state.order,
            current: this.state.current,
          }}
        >
          <Fade
            triggerOnce
            css={css`
              height: 124.16px;
            `}
          >
            <Carousel.NavBar>
              {slides.map((s, key) => {
                const slide = s as React.ReactElement<ISlideProps>;
                const props = slide.props as ISlideProps & { children?: React.ReactNode };

                return (
                  <Option key={key} imageAlt={props.imageAlt} imageSrc={props.imageSrc} />
                );
              })}
            </Carousel.NavBar>
          </Fade>
        </CarouselContext.Provider>
      </div>
    );
  }
}

export default Carousel;

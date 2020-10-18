/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, SerializedStyles } from "@emotion/core";

export const breakpoints: { [index: string]: number } = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
};

export type BreakPoints = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
type MediaQueryFunc = (name: BreakPoints) => (...args: any) => SerializedStyles;

const nextBreakpointKey = (name: BreakPoints) => {
  const breakpointNames = Object.keys(breakpoints);
  if (!breakpointNames.includes(name)) {
    console.error(`Could not find breakpoint ${name}`);
    return;
  }

  const index = breakpointNames.indexOf(name);
  if (index === breakpointNames.length) return;

  return breakpointNames[index + 1];
};

const getMaxBreakpoint: (name: BreakPoints) => number | undefined = (name) => {
  const nextKey = nextBreakpointKey(name);
  return nextKey ? breakpoints[nextKey] - 0.02 : undefined;
};

const getMinBreakpoint: (name: BreakPoints) => number | undefined = (
  name: BreakPoints,
) => {
  if (Object.keys(breakpoints).includes(name)) {
    return breakpoints[name] > 0 ? breakpoints[name] : undefined;
  }

  console.error(`Could not find breakpoint ${name}`);
};

const up: MediaQueryFunc = (name: BreakPoints) => (...args: any) => {
  const min = getMinBreakpoint(name);
  const style = css(...args);

  if (min) {
    return css`
      @media (min-width: ${`${min}px`}) {
        ${style};
      }
    `;
  } else {
    return style;
  }
};

const down: MediaQueryFunc = (name: BreakPoints) => (...args: any) => {
  const max = getMaxBreakpoint(name);
  const style = css(...args);

  if (max) {
    return css`
      @media (max-width: ${`${max}px`}) {
        ${style};
      }
    `;
  } else {
    return style;
  }
};

const between = (lower: BreakPoints, upper: BreakPoints) => (...args: any) => {
  const min = getMinBreakpoint(lower);
  const max = getMaxBreakpoint(upper);
  const style = css(...args);

  if (min && max) {
    return css`
      @media (min-width: ${`${min}px`}) and (max-width: ${`${max}px`}) {
        ${style};
      }
    `;
  } else if (!max) {
    return up(upper)(...args);
  } else if (!min) {
    return down(lower)(...args);
  } else {
    return style;
  }
};

const only: MediaQueryFunc = (name: BreakPoints) => (...args: any) => {
  return between(name, name)(...args);
};

export const getMediaQueryCssClasses: () => SerializedStyles[] = () => {
  const queries: SerializedStyles[] = [];

  Object.keys(breakpoints).forEach((key) => {
    const point = key as BreakPoints;
    const value = breakpoints[point];
    const nextPoint = nextBreakpointKey(point);
    const nextValue = nextPoint !== undefined && breakpoints[nextPoint];

    if (value > 0) {
      queries.push(css`
        @media (max-width: ${value - 1}px) {
          .${point}-up, .${point}-only {
            display: none !important;
          }
        }
      `);
    }

    if (nextValue) {
      queries.push(css`
        @media (min-width: ${nextValue}px) {
          .${point}-down, .${point}-only {
            display: none !important;
          }
        }
      `);
    }

    ["up", "down", "only"].forEach((f) => {
      const funcType = f as "up" | "down" | "only";
      let mediaQueryFunc: MediaQueryFunc;

      switch (funcType) {
        case "up":
          mediaQueryFunc = up;
          break;
        case "down":
          mediaQueryFunc = down;
          break;
        case "only":
          mediaQueryFunc = only;
          break;
      }

      queries.push(mediaQueryFunc(point)`
        .${point}-${funcType} {
            display: block;

            &.flex {
                display: flex;
            }
        }

        span.${point}-${funcType} {
            display: inline-block;

            &.flex {
                display: inline-flex;
            }
        }      
      `);
    });
  });

  return queries.map(
    (style) =>
      css`
        ${style}
      `,
  );
};

const media = {
  up,
  down,
  between,
  only,
};

export default media;

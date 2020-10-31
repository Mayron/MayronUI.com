import { css } from "@emotion/core";
import colors from "../colors";
import vars from "../variables";

export const link = css`
  color: ${colors.link.default};
  font-weight: ${vars.robotoFontWeightMedium};
  text-decoration: none;

  &:active {
    color: ${colors.link.active};
  }

  &:hover {
    color: ${colors.link.hover};
    text-decoration: underline;
  }
`;

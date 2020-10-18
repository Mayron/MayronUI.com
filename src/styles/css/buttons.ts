import { css, SerializedStyles } from "@emotion/core";
import colors from "../colors";
import vars from "../variables";

export type ButtonType = "primary" | "secondary" | "text";

const baseButtonStyle = css`
  text-decoration: none;
  text-align: center;
  display: inline-block;
  border-radius: 4px;
  padding: 0px 15px;
  user-select: none;
  outline: none;
  cursor: pointer;
`;

const primary = css`
  ${baseButtonStyle};
  background-color: ${colors.link.default};
  color: ${colors.white};
  font-weight: ${vars.nunitoFontWeightBold};
  height: 34px;
  line-height: 34px;
  border: none;

  &:hover {
    background-color: ${colors.link.hover};
  }

  &:active {
    background-color: ${colors.link.active};
  }

  &.lg {
    padding: 0 30px;
    font-size: 1.1rem;
    line-height: 44px;
    height: 44px;
  }
`;

const secondary = css`
  ${baseButtonStyle};
  color: ${colors.link.default};
  font-weight: ${vars.robotoFontWeightBold};
  border: 1px solid ${colors.grey.uiBorder};
  box-sizing: content-box;
  height: 32px;
  line-height: 32px;
  background: none;

  &:hover {
    border-color: ${colors.link.default};
  }

  &:active {
    border-color: ${colors.link.active};
    color: ${colors.link.active};
  }

  &.lg {
    padding: 0 30px;
    font-size: 1.1rem;
    line-height: 44px;
    height: 44px;
  }
`;

const text = css`
  color: ${colors.link.default};
  font-weight: ${vars.robotoFontWeightMedium};

  &:hover {
    color: ${colors.link.hover};
    text-decoration: underline;
  }

  &:active {
    color: ${colors.link.active};
  }
`;

const buttons: { [index in ButtonType]: SerializedStyles } = {
  primary,
  secondary,
  text,
};

export default buttons;

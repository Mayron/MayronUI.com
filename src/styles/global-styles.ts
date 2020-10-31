import vars from "./variables";
import colors from "./colors";
import { css } from "@emotion/core";
import media from "./media";
import { customScrollBar } from "./css/misc";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 140%;
  }

  body,
  button,
  input,
  textarea,
  html {
    font-size: ${vars.standardFontSize};

    ${media.down("xs")`
      font-size: ${vars.mobileFontSize};
    `};
  }

  label {
    font-weight: ${vars.robotoFontWeightBold};
  }

  header > h2 {
    margin-bottom: ${vars.headerBottomSpacing};
  }

  body,
  textarea,
  button {
    font-family: ${vars.robotoFontFamily};
    font-weight: ${vars.robotoFontWeightRegular};
    color: ${colors.black};
    background-color: ${colors.white};
  }

  h1,
  h2 {
    text-align: center;
  }

  h1,
  h2,
  h3 {
    font-family: ${vars.nunitoFontFamily};
    font-weight: ${vars.nunitoFontWeightExtraBold};
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h4,
  h5 {
    font-family: ${vars.robotoFontFamily};
    font-weight: ${vars.robotoFontWeightBold};
    text-transform: uppercase;
  }

  h1 {
    font-size: ${vars.h1FontSize};

    &.sm {
      font-size: ${vars.h1SmallerFontSize};
    }

    &.jumbo {
      font-size: ${vars.jumbotronFontSize};

      ${media.down("sm")`
        font-size: ${vars.jumbotronMobileFontSize};
      `};
    }
  }

  h2 {
    font-size: ${vars.h2FontSize};
  }

  h3 {
    font-size: ${vars.h3FontSize};
  }

  h4 {
    font-size: ${vars.h4FontSize};
  }

  h5 {
    font-size: ${vars.h5FontSize};
  }

  hr {
    box-sizing: content-box;
    height: 0;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  label {
    user-select: none;

    &[for] {
      cursor: pointer;
    }
  }

  input,
  textarea {
    background: none;
    outline: none;
    border: none;
  }

  ol,
  ul {
    list-style: none;
    padding-inline-start: 0;
  }

  img {
    -webkit-user-drag: none;
    user-select: none;
    display: block;
  }

  ::-webkit-input-placeholder,
  :-moz-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder {
    font-family: ${vars.robotoFontFamily} !important;
    color: ${colors.grey.uiBorder} !important;
    font-size: ${vars.smallFontSize} !important;
  }

  ${customScrollBar};
`;

export default globalStyles;

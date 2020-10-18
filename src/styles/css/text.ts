import { css } from "@emotion/core";
import colors from "../colors";
import vars from "../variables";

const text = {
  statements: {
    regular: css({
      textAlign: "center",
      fontSize: vars.statementRegularFontSize,
      fontWeight: vars.statementRegularAndLargeFontWeight,
    }),
    small: css({ fontSize: vars.statementSmallFontSize }),

    large: css({
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: vars.statementLargeFontSize,
      fontWeight: vars.statementRegularAndLargeFontWeight,
      paddingBottom: 40,

      "&:last-child": {
        paddingBottom: 0,
      },
    }),
  },
};

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

export default text;

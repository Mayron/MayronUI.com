import { css } from "@emotion/core";
import vars from "../variables";

const alignment = {
  horizontal: {
    spaced: css({
      display: "flex",
      justifyContent: "space-between",
    }),
    even: css`
      display: flex;
      margin: -${vars.columnSpacing};

      & > * {
        flex: 1;
        width: 100%;
        margin: ${vars.columnSpacing};
      }
    `,
  },
};

export default alignment;

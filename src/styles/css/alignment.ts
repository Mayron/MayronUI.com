import { css } from "@emotion/core";
import vars from "../variables";

export const evenSpacing = css`
  display: flex;
  margin: -${vars.columnSpacing};

  & > * {
    flex: 1;
    width: 100%;
    margin: ${vars.columnSpacing};
  }
`;

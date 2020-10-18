import { css } from "@emotion/core";

const effects = {
  cardShadow: css({
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  }),
  cardShadowOnHover: css({
    "&:hover": {
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    },
  }),
};

export default effects;

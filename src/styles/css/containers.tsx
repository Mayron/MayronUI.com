import { css } from "@emotion/core";
import styled from "@emotion/styled";
import colors from "../colors";
import media from "../media";
import vars from "../variables";

export const container = css`
  max-width: ${vars.maxContentWidth};
  padding-left: ${vars.pageGutterSpacing};
  padding-right: ${vars.pageGutterSpacing};
  margin: 0 auto;
  width: 100%;

  ${media.down("xs")`
    padding-left: ${vars.pageGutterSpacingMobile} !important;
    padding-right: ${vars.pageGutterSpacingMobile} !important;
  `};
`;

export const sectionCss = css``;

interface ISectionProps {
  width?: "slim" | "text";
  verticalSpacing?: "large";
}

export const Section = styled.section<ISectionProps>(
  (props) => css`
    ${container};
    
    ${
      props.verticalSpacing === "large"
        ? css`
            padding-top: ${vars.largeSectionSpacing};
            padding-bottom: ${vars.largeSectionSpacing};

            ${media.down("xs")`            
              padding-top: ${vars.largeSectionSpacingMobile};
              padding-bottom: ${vars.largeSectionSpacingMobile};
            `};
          `
        : css`
            padding-top: ${vars.sectionSpacing};
            padding-bottom: ${vars.sectionSpacing};

            ${media.down("xs")`            
              padding-top: ${vars.sectionSpacingMobile};
              padding-bottom: ${vars.sectionSpacingMobile};
            `};
          `
    }

    ${
      props.width === "slim" &&
      css`
        max-width: 1060px;
      `
    }

    ${
      props.width === "text" &&
      css`
        max-width: ${vars.textContainerWidth};
      `
    }
  `,
);

export const overlayCss = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BlueContainer = styled.div`
  background-color: ${colors.blue.dark};
  color: ${colors.white};

  h2 {
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

export default Section;

import styled from "@emotion/styled";
import { container } from "../../styles/css/containers";
import media from "../../styles/media";
import vars from "../../styles/variables";

const PageContent = styled.div`
  ${container};
  padding-top: ${vars.sectionSpacing};
  padding-bottom: ${vars.sectionSpacing};
  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;

  ${media.down("xs")`
    margin-left: -10px;
    margin-right: -10px;
    width: calc(100% + 20px);
  `};

  @media (max-width: 1010px) {
    section,
    article {
      width: 100%;
    }
  }
`;

export default PageContent;

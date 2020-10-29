import styled from "@emotion/styled";
import { container } from "../../styles/css/containers";
import vars from "../../styles/variables";

const PageContent = styled.div`
  ${container};
  padding-top: ${vars.sectionSpacing};
  padding-bottom: ${vars.sectionSpacing};

  position: relative;
  display: flex;
  align-items: flex-start;
  max-width: 1000px;
`;

export default PageContent;

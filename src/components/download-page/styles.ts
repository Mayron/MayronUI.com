import styled from "@emotion/styled";
import media from "../../styles/media";

export const DownloadPageFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  ${media.down("xs")`    
    padding-top: 10px;
    flex-direction: column;
    align-items: center;

    button {
      margin-top: 20px;
    }
  `};
`;

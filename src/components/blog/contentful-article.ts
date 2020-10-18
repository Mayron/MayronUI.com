import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { link } from "../../styles/css/text";
import vars from "../../styles/variables";

const ContentfulArticle = styled.article`
  /* h1 should not be allowed - only 1 h1 per page */
  h1 {
    display: none;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.blue.dark};
  }

  h2 {
    text-align: left;
  }

  p,
  ol,
  ul {
    line-height: 1.5rem;
    font-size: 16px;

    & > a {
      ${link};
    }
  }

  & > * {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  blockquote {
    color: ${colors.text.secondary};
    font-style: italic;
    border-left: 4px solid ${colors.blue.faint};
    padding-left: 20px;
    margin-left: 20px;
  }

  pre {
    background-color: ${colors.grey.codeMarkdown};
    padding: 10px;
    border-radius: ${vars.borderRadius};
    font-size: ${vars.smallFontSize};
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  ul,
  ol {
    padding-inline-start: 30px;
  }

  li {
    padding-bottom: 10px;

    &:last-of-type {
      padding-bottom: 0;
    }
  }

  .embedly-card {
    border: 1px solid ${colors.grey.uiBorder};
    border-radius: ${vars.borderRadius};
    padding: 10px;
  }

  table {
    border-collapse: collapse;
    width: 100%;

    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    th {
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: left;
      background-color: ${colors.theme};
      color: ${colors.white};
    }
  }
`;

export default ContentfulArticle;

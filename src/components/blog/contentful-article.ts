import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { link } from "../../styles/css/text";
import vars from "../../styles/variables";

const ContentfulArticle = styled.article`
  --deckgo-highlight-code-font-size: 0.9rem;

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

  h3 {
    font-size: 1.2rem;
    font-family: ${vars.robotoFontFamily};
    letter-spacing: normal;
    text-transform: none;
  }

  h4 {
    font-size: 1rem;
    font-family: ${vars.robotoFontFamily};
    letter-spacing: normal;
    text-transform: none;
  }

  h2 {
    text-align: left;
  }

  p,
  ol,
  ul,
  table {
    line-height: 1.5rem;
    font-size: 16px;

    a {
      ${link};
    }
  }

  .warning {
    background-color: ${colors.warning.background};
    border: 1px solid ${colors.warning.border};
    border-radius: 4px;
    padding: 10px;
    line-height: 1.3rem;
    font-size: 16px;
    color: ${colors.warning.text};
    margin-left: 20px;
    margin-right: 20px;
    display: table;

    &:before {
      content: url("/images/warning.svg");
      width: 20px;
      height: 20px;
      display: table-cell;
      min-width: 20px;
      padding-right: 10px;
      position: relative;
      top: 5px;
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
    font-size: 0.8rem;
    overflow-x: scroll;

    &::-webkit-scrollbar-thumb {
      background: ${colors.theme};
    }

    code {
      font-size: 0.8rem;
      padding: 0;
    }
  }

  deckgo-highlight-code {
    line-height: 1.25rem;
  }

  code {
    background-color: ${colors.grey.codeMarkdown};
    border-radius: 2px;
    padding: 2px 4px;
    font-size: 0.8rem;
    line-height: 1rem;
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
      border: 1px solid #c5c5c5;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    th {
      padding-top: 10px;
      padding-bottom: 10px;
      text-align: left;
      background-color: #d1e5f9;
      color: ${colors.black};
    }
  }
`;

export default ContentfulArticle;

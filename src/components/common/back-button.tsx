/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import React from "react";
import colors from "../../styles/colors";
import { link } from "../../styles/css/text";
import { ReactComponent as Arrow } from "../../svgs/arrow.svg";

interface IBackButtonProps {
  href: string;
  text: string;
}

const BackButton: React.FC<IBackButtonProps> = ({ href, text }) => {
  return (
    <Link
      to={href}
      css={css`
        ${link};
        display: flex;
        align-items: center;

        &:hover {
          svg path {
            stroke: ${colors.link.hover};
          }
        }

        svg {
          transform: rotate(90deg);
          margin-right: 10px;

          path {
            stroke: ${colors.theme};
          }
        }
      `}
    >
      <Arrow title="back" /> {text}
    </Link>
  );
};

export default BackButton;

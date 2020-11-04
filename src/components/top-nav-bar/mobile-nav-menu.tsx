/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import colors from "../../styles/colors";

const MobileNavMenu: React.FC = ({ children }) => {
  return (
    <nav
      role="navigation"
      css={css`
        box-shadow: 0 12px 12px rgba(0, 0, 0, 0.4);
      `}
    >
      <ul>{children}</ul>
    </nav>
  );
};

interface IItemProps {
  text: string;
  href: string;
}

export const MobileNavItem: React.FC<IItemProps> = ({ text, href }) => {
  return (
    <li
      css={css`
        &:first-of-type a {
          padding-top: 20px;
        }

        &:last-of-type a {
          padding-bottom: 20px;
        }
        a {
          display: block;
          padding: 14px 20px;
          background: ${colors.blue.darkest};
          font-size: 1.2rem;
          text-decoration: none;
          color: ${colors.white};
          text-transform: uppercase;

          &.active {
            color: ${colors.link.hover};
          }

          &:not(.active):hover {
            background-color: ${colors.link.hover};
          }
        }
      `}
    >
      <Link to={href} activeClassName="active">
        {text}
      </Link>
    </li>
  );
};

export default MobileNavMenu;

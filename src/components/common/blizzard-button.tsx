/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import colors from "../../styles/colors";

interface IBlizzardButtonProps {
  text: string;
  href: string;
}

const BlizzardButton: React.FC<IBlizzardButtonProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      css={css`
        border: none;
        outline: none;
        background: none;
        position: relative;
        height: 64px;
        margin: 5px 0;
        display: flex;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        width: 300px;
        font-size: 0.9rem;

        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .bliz-normal {
          display: block;
        }

        .bliz-active,
        .bliz-hover {
          display: none;
        }

        span {
          position: relative;
          z-index: 5;
          color: #fdd400;
          text-shadow: 2px 2px 2px black;
        }

        &:hover {
          cursor: pointer;

          .bliz-hover {
            display: block;
          }

          .bliz-normal,
          .bliz-active {
            display: none;
          }

          span {
            color: ${colors.white};
            text-shadow: none;
          }
        }

        &:active {
          .bliz-active {
            display: block;
          }

          .bliz-normal,
          .bliz-hover {
            display: none;
          }

          span {
            left: -2px;
            top: 2px;
          }
        }
      `}
    >
      <img src="/images/bliz-btn-active.png" alt="download" className="bliz-active" />
      <img src="/images/bliz-btn-hover.png" alt="download" className="bliz-hover" />
      <img src="/images/bliz-btn.png" alt="download" className="bliz-normal" />
      <span>{text}</span>
    </a>
  );
};

export default BlizzardButton;

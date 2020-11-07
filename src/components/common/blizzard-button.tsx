/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useContext } from "react";
import colors from "../../styles/colors";
import { sendGtagEvent } from "../../utils/common";
import { LayoutContext } from "../layout";

interface IBlizzardButtonProps {
  text: string;
  href: string;
  ga: { action: string; label?: string; value?: number };
}

const BlizzardButton: React.FC<IBlizzardButtonProps> = ({ text, href, ga }) => {
  const { gaCategory } = useContext(LayoutContext);

  const handleOnClick = () => {
    sendGtagEvent(gaCategory, ga.action, ga.label, ga.value);
  };

  return (
    <a
      onClick={handleOnClick}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      css={css`
        border: none;
        outline: none;
        background: none;
        position: relative;
        width: 238px;
        height: 64px;
        margin: 5px 0;
        display: flex;
        text-decoration: none;
        justify-content: center;
        align-items: center;

        img {
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

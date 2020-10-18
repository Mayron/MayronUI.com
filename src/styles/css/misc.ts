import { css } from "@emotion/core";
import colors from "../colors";

export const textOverflowWithEllipsis = css`
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const customScrollBar = css`
  &::-webkit-scrollbar {
    width: 8px;
    background: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    background: none;
    border: none;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: ${colors.link.default};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.link.hover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${colors.link.active};
  }
`;

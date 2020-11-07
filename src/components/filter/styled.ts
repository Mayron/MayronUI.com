import { css } from "@emotion/core";
import styled from "@emotion/styled";
import colors from "../../styles/colors";
import media from "../../styles/media";
import vars from "../../styles/variables";

const filterItemCss = css`
  white-space: nowrap;
  padding: 6px 25px;
  padding-left: 35px;
  display: flex;
  user-select: none;
  align-items: center;
  font-size: 0.8rem;

  ${media.down("xs")`
    font-size: 1rem;
  `};
`;

export const FilterPopupTooltip = styled.span`
  ${filterItemCss};
  padding-top: 0;
  color: ${colors.grey.uiBorder};
`;

export const FilterOption = styled.button`
  ${filterItemCss};
  border: none;
  outline: none;
  width: 100%;
  text-align: left;
  position: relative;

  path {
    stroke: ${colors.theme};
  }

  svg {
    position: absolute;
    left: 12px;
  }

  &:last-of-type {
    border-bottom-left-radius: ${vars.borderRadius};
    border-bottom-right-radius: ${vars.borderRadius};
  }

  &:hover {
    color: ${colors.theme};
    background-color: ${colors.grey.selectedItem};
    cursor: pointer;
  }
`;

export const FilterPopUpContent = styled.div`
  padding-top: 15px;
  background: ${colors.white};
  position: relative;
  z-index: 1;
  border-radius: ${vars.borderRadius};
`;

export const FilterPopUp = styled.div`
  position: absolute;
  top: 38px;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, 0%);
  border: 1px solid ${colors.grey.uiBorder};
  border-radius: 4px;

  &::after {
    content: " ";
    display: block;
    width: 18px;
    height: 18px;
    background-color: ${colors.white};
    position: absolute;
    top: -9px;
    transform: translate(-50%, 0%) rotate(45deg);
    left: 50%;
    border: 1px solid ${colors.grey.uiBorder};
    border-radius: 2px;
  }

  &.no-select li {
    padding-left: 25px;
  }
`;

export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
`;

export const FilterListHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  ${media.down("xs")`
    font-size: 1rem;
  `};

  span {
    color: $secondary-text-dark-grey;
    font-weight: 400;
    padding: 0 5px;
  }

  svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    path {
      stroke: ${colors.theme};
    }
  }
`;

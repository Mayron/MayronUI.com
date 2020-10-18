/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { ReactComponent as ArrowIcon } from "../../svgs/arrow.svg";
import { FilterListHeaderContainer } from "./styled";

const rotate = css`
  transform: rotate(180deg);
`;

interface IFilterListHeaderProps {
  onClick: () => void;
  label?: string;
  selected?: number;
  items: string[];
  shown: boolean;
}

const FilterListHeader: React.FC<IFilterListHeaderProps> = ({
  onClick,
  label,
  selected,
  items,
  shown,
}) => {
  return (
    <FilterListHeaderContainer onClick={onClick}>
      <ArrowIcon title="toggle" css={shown && rotate} />
      {label && <span>{label}</span>}
      {selected !== undefined && <strong> {items[selected]}</strong>}
    </FilterListHeaderContainer>
  );
};

export default FilterListHeader;

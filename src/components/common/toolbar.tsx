/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { ShowOption, SortByOption } from "../../pages/blog";
import Filter from "../filter";
import SearchBox from "./search-box";

interface IFilterOptions<T> {
  options: T[];
  selected: number;
  onChange: (selected: number) => void;
}

interface IToolBarProps {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  show: IFilterOptions<ShowOption>;
  sortBy: IFilterOptions<SortByOption>;
}

const ToolBar: React.FC<IToolBarProps> = ({ onSearchChange, show, sortBy }) => {
  return (
    <div
      role="toolbar"
      css={css`
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
      `}
    >
      <SearchBox placeholder="Search blog posts" onSearchChange={onSearchChange} />
      <div
        css={css`
          & > :first-child {
            margin-right: 20px;
          }
        `}
      >
        <Filter
          label="Show"
          tooltip="Show"
          selected={show.selected}
          options={show.options}
          onChange={show.onChange}
        />
        <Filter
          label="Sort by"
          tooltip="Sort by"
          selected={sortBy.selected}
          options={sortBy.options}
          onChange={sortBy.onChange}
        />
      </div>
    </div>
  );
};

export default ToolBar;

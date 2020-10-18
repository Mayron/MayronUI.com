/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from "@emotion/core";
import { ReactComponent as SearchIcon } from "../../svgs/search.svg";
import colors from "../../styles/colors";
import vars from "../../styles/variables";

interface ISearchBoxProps {
  placeholder: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ placeholder, onSearchChange }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      css={css`
        transition: border-color ease-in-out 0.1s;
        border-color: ${colors.blue.dark};
        background-color: ${colors.white};
        border: 1px solid ${colors.grey.uiBorder};
        border-radius: 4px;
        display: flex;
        align-items: center;
        margin-right: 20px;
        flex: 1;

        & + div {
          display: flex;
        }

        ${focused &&
        css`
          border-color: ${colors.theme};
        `}
      `}
    >
      <SearchIcon
        title="search"
        css={css`
          margin: 5px 8px;
        `}
      />
      <input
        type="search"
        css={css`
          transition: width ease-out 0.4s;
          padding: 5px;
          padding-right: 10px;
          border: none;
          border-radius: 4px;
          padding-left: 0;
          font-size: 0.8rem;
          width: 100%;
        `}
        placeholder={placeholder}
        onChange={onSearchChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default SearchBox;

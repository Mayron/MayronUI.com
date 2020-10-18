import React, { useState } from "react";
// import { Icons } from "../icons";

interface ISearchProps {
  placeholder: string;
  disableAnimation?: boolean;
}

const Search: React.FC<ISearchProps> = ({ placeholder, disableAnimation }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`search-box${focused ? " focused" : ""}`}>
      {/* <Icons.Search /> */}
      <input
        type="search"
        placeholder={placeholder}
        className={disableAnimation ? "no-anim" : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default Search;

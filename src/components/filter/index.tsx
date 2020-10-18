/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState, useEffect, useCallback } from "react";
import { ReactComponent as TickIcon } from "../../svgs/tick.svg";
import FilterListHeader from "./filter-list-header";
import {
  FilterPopUpContent,
  FilterOption,
  FilterPopupTooltip,
  FilterPopUp,
  FilterWrapper,
} from "./styled";

interface IFilterProps {
  label?: string;
  tooltip?: string;
  selected?: number;
  options: string[];
  onChange: (value: number) => void;
}

const Filter: React.FC<IFilterProps> = ({
  label,
  tooltip,
  selected,
  options: items,
  onChange,
}) => {
  const [shown, setShown] = useState<boolean>(false);
  const [mouseInside, setMouseInside] = useState<boolean>(false);

  const handleOnClick = useCallback(
    (value: number) => {
      setShown(false);
      onChange(value);
    },
    [onChange],
  );

  useEffect(() => {
    let interval: NodeJS.Timeout | null;

    if (shown) {
      interval = setInterval(() => {
        if (!mouseInside && interval) {
          setShown(false);
        }
      }, 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [shown, mouseInside]);

  return (
    <FilterWrapper
      onMouseEnter={() => setMouseInside(true)}
      onMouseLeave={() => setMouseInside(false)}
    >
      <FilterListHeader
        onClick={() => setShown(!shown)}
        label={label}
        selected={selected}
        items={items}
        shown={shown}
      />
      {shown && (
        <FilterPopUp className={`${selected === undefined ? " no-select" : ""}`}>
          <FilterPopUpContent>
            {tooltip && <FilterPopupTooltip>{tooltip}</FilterPopupTooltip>}
            {items.map((item, key) => (
              <FilterOption key={key} onClick={() => handleOnClick(key)}>
                {selected !== undefined && key === selected && <TickIcon title="tick" />}
                {item}
              </FilterOption>
            ))}
          </FilterPopUpContent>
        </FilterPopUp>
      )}
    </FilterWrapper>
  );
};

export default Filter;

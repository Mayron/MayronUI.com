import React, { useState, useRef, useEffect } from "react";
// import { Icons } from "../icons";

interface IFilterProps {
  label?: string;
  tooltip?: string;
  selected?: number;
  items: string[];
}

const Filter: React.FC<IFilterProps> = ({ label, tooltip, selected, items }) => {
  const [shown, setShown] = useState<boolean>(false);
  const [mouseInside, setMouseInside] = useState<boolean>(false);

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
    <div
      className="filter"
      onMouseEnter={() => setMouseInside(true)}
      onMouseLeave={() => setMouseInside(false)}
    >
      <header>
        {/* <Icons.Arrow onClick={() => setShown(!shown)} direction={shown ? "up" : "down"}>
          <p>
            {label && <label>{label}</label>}
            {selected !== undefined && <strong>{items[selected]}</strong>}
          </p>
        </Icons.Arrow> */}
      </header>
      {shown && (
        <div className={`filter-dropdown${selected === undefined ? " no-select" : ""}`}>
          <ul>
            {tooltip && <li className="tooltip">{tooltip}</li>}
            {items.map((item, key) => (
              <li key={key}>
                {selected !== undefined && key === selected && (
                  <div className="tick">{/* <Icons.Tick /> */}</div>
                )}
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;

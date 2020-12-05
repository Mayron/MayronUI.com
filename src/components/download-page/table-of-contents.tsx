/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { navigate } from "gatsby";
import React, { useLayoutEffect, useState } from "react";
import colors from "../../styles/colors";
import vars from "../../styles/variables";
import { getSlug } from "../../utils/common";

interface ITableOfContentsProps {
  steps: string[];
  selected: number;
  onStepClick: (step: number) => void;
}

const TableOfContents: React.FC<ITableOfContentsProps> = ({
  steps,
  selected,
  onStepClick,
}) => {
  const [hidden, setHidden] = useState(false);

  const handleWidthChange = () => setHidden(window.innerWidth < 1010);

  useLayoutEffect(() => {
    handleWidthChange();
    window.addEventListener("resize", handleWidthChange);
  }, []);

  const handleStepClick = (name: string, step: number) => {
    const id = getSlug(name);
    navigate(`#${id}`);
    onStepClick(step);
  };

  if (hidden) {
    return null;
  }

  return (
    <Container>
      <TableOfContentsSteps>
        {steps.map((s, key) => (
          <Step
            onClick={() => handleStepClick(s, key + 1)}
            key={key}
            selected={key + 1 === selected}
          >
            <span>{key + 1}</span>
            {s}
          </Step>
        ))}
      </TableOfContentsSteps>
    </Container>
  );
};

const Container = styled.nav`
  width: 240px;
  position: sticky;
  top: 70px;
  right: 0;
  margin-left: 20px;
`;

const TableOfContentsSteps = styled.div`
  border: 1px solid ${colors.grey.uiBorder};
  border-radius: ${vars.borderRadius};
`;

interface IStep {
  selected?: boolean;
}

const Step = styled.button<IStep>(
  (props) => css`
    position: relative;
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    font-size: ${vars.smallFontSize};
    display: flex;

    ${props.selected &&
    css`
      background-color: ${colors.grey.selectedMenuItem};
      color: ${colors.link.active};
      border-bottom: 1px solid ${colors.grey.uiBorder};
    `};

    span {
      margin-right: 15px;
    }

    &:hover {
      background-color: ${colors.grey.selectedItem};
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${colors.grey.selectedItem};
    }

    &:first-of-type {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-of-type {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `,
);

export default TableOfContents;

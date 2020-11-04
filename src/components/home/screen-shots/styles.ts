import { css } from "@emotion/core";
import styled from "@emotion/styled";
import colors from "../../../styles/colors";
import buttons from "../../../styles/css/buttons";
import media from "../../../styles/media";
import vars from "../../../styles/variables";

export const OptionListItem = styled.li`
  margin: 0 5px;
  user-select: none;
  flex: 1;
  max-height: 82px;
  background-color: #053361;
  border-radius: ${vars.borderRadius};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: ${vars.borderRadius};
  }

  &.active {
    filter: drop-shadow(0 2px 4px ${colors.black});

    img {
      border: 2px solid ${colors.white};
      filter: brightness(1.2);
    }
  }

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 2px 4px ${colors.black});
    img {
      filter: brightness(1.4);
    }
  }
`;

export const OptionBullet = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${colors.link.active};
  margin: 0 15px;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  color: ${colors.white};

  &:hover {
    cursor: pointer;
    background-color: ${colors.link.hover};
  }

  &.active {
    background-color: ${colors.link.hover};
  }
`;

export const OptionsNavBar = styled.nav`
  display: flex;
  align-items: center;
  padding: 40px 0 20px 0;

  ${media.down("md")`
    padding: 0;
    width: 100%;
    justify-content: space-evenly;
    border-bottom: 2px solid ${colors.blue.faint};
    padding-bottom: ${vars.largeSectionSpacing};
    margin: 0 20px;
  `};
`;

export const SlideContainer = styled.div`
  flex: 2;
  position: relative;
  padding: 10px;
  border: 3px solid ${colors.white};
  border-radius: 20px;

  ${media.up("lg")`
    margin-right: 20px;
  `};

  img {
    border-radius: 20px;
  }

  &::before {
    content: "Click image to enlarge";
    height: 24px;
    width: 40%;
    top: -12px;
    right: 50%;
    background-color: ${colors.blue.dark};
    position: absolute;
    font-size: 0.7rem;
    color: ${colors.white};
    line-height: 24px;
    padding-left: 10px;
  }

  a {
    position: relative;
    display: block;
    filter: drop-shadow(0 2px 4px ${colors.black});

    &:hover {
      img {
        filter: brightness(1.2);
      }
    }
  }

  span {
    position: absolute;
    bottom: 0;
    right: 0;
    font-weight: 700;
    color: ${colors.white};
    background-color: rgba(0, 0, 0, 0.7);
    border-bottom-right-radius: 20px;
    padding: 8px;
    border-top-left-radius: 12px;
  }
`;

export const SlideDetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: 40px;

  ${media.up("lg")`
    p {
      border-left: 3px solid ${colors.blue.faint};
      margin-left: -22px;
      padding-left: 15px;
    }
  `};

  ${media.down("md")`
    h3, p {
      text-align: center;
    }
  `};

  a {
    ${buttons["text"]};
  }

  & > :first-child {
    height: 180px;

    ${media.down("md")`    
      height: auto;
      padding-bottom: 20px;
      padding-top: 20px;    
    `};
  }

  h3 {
    margin-right: 40px;

    ${media.up("lg")`
      color: ${colors.white};
      text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    `};

    ${media.down("md")`
      margin-right: 0;
    `};
  }
`;

export const arrowCss = css`
  outline: none;
  border: none;
  padding: 0 20px;
  background: none;
  height: 33px;

  &:hover {
    cursor: pointer;
    path {
      fill: ${colors.link.hover};
    }
  }
`;

export const ScreenShotsContainer = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: " ";
    position: absolute;
    display: block;
    width: 3000px;
    height: 280px;
    background-color: ${colors.blue.dark};
    transform: rotate(-5deg);
    left: -100px;
    top: -130px;

    ${media.down("xl")`
      height: 240px;
    `};

    ${media.down("xs")`
      height: 190px;
    `};
  }

  section {
    padding-bottom: 20px;

    ${media.down("md")`
    padding-bottom: 0;
    `};
  }
`;

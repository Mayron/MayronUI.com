import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { container } from "../../styles/css/containers";
import vars from "../../styles/variables";

export const NavBarWrapper = styled.div`
  background-color: ${colors.blue.darkest};
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`;

const NavBarContainer = styled.div`
  ${container};
  display: flex;
  min-height: 45px;
`;

const NavBar = styled.nav`
  flex: 1;
  margin-right: 70px;
`;

const NavItemList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 100%;
`;

const NavItem = styled.li`
  display: flex;

  a {
    padding: 0 20px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    color: ${colors.white};
    font-size: 1.1rem;
    transition: font-size 0.2s ease-in, background-color 0.2s ease;

    &.active {
      color: ${colors.link.hover};
    }

    .shrink & {
      font-size: ${vars.smallFontSize};
    }

    &:not(.active):hover {
      background-color: ${colors.link.hover};
    }
  }
`;

const Logo = styled.img`
  transition: width 0.2s ease-in, height 0.2s ease-in;
  width: 80px;
  height: 51.5px;
  margin-top: 10px;
  margin-bottom: 10px;

  .shrink & {
    width: 45px;
    height: 28.9688px;
  }
`;

export default {
  NavBarWrapper,
  NavBarContainer,
  NavBar,
  NavItemList,
  NavItem,
  Logo,
};

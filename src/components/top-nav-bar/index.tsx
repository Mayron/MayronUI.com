import { Link } from "gatsby";
import React, { useEffect, useRef } from "react";
import NavItemList from "./nav-item-list";
import Styles from "./styles";

interface ITopNavBarProps {
  onBurgerMenuClick: () => void;
}

const TopNavBar: React.FC<ITopNavBarProps> = ({ onBurgerMenuClick }) => {
  return (
    <Styles.NavBarWrapper>
      <Styles.NavBarContainer>
        <Link to="/">
          <Styles.Logo alt="logo" src="/images/logo.png" draggable={false} />
        </Link>
        <NavItemList>
          <NavItemList.Item text="Home" href="/" />
          <NavItemList.Item text="Blog" href="/blog" />
          <NavItemList.Item text="Downloads" href="/downloads" />
          <NavItemList.Item text="Community" href="/community" />
          <NavItemList.Item text="About" href="/about" />
        </NavItemList>
      </Styles.NavBarContainer>
    </Styles.NavBarWrapper>
  );
};

export default TopNavBar;

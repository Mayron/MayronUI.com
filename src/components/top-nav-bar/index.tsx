/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { breakpoints } from "../../styles/media";
import MobileNavMenu, { MobileNavItem } from "./mobile-nav-menu";
import NavItemList from "./nav-item-list";
import Styles from "./styles";
import { ReactComponent as BurgerSvg } from "../../svgs/burger.svg";
import buttons from "../../styles/css/buttons";

interface ITopNavBarProps {
  onBurgerMenuClick: () => void;
}

const TopNavBar: React.FC<ITopNavBarProps> = ({ onBurgerMenuClick }) => {
  const [mobile, setMobile] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  const checkForMobile = () => {
    setMobile(window.innerWidth <= breakpoints["sm"]);
  };

  useLayoutEffect(() => {
    checkForMobile();
    window.addEventListener("resize", checkForMobile);
  }, []);

  return (
    <Styles.NavBarWrapper onMouseLeave={() => setMobileMenuShown(false)}>
      <Styles.NavBarContainer>
        <Link to="/">
          <Styles.Logo alt="logo" src="/images/logo.png" draggable={false} />
        </Link>
        {mobile ? (
          <Styles.BurgerButton onClick={() => setMobileMenuShown(!mobileMenuShown)}>
            <BurgerSvg title="Toggle menu" />
          </Styles.BurgerButton>
        ) : (
          <NavItemList>
            <NavItemList.Item text="Home" href="/" />
            <NavItemList.Item text="Blog" href="/blog" />
            <NavItemList.Item text="Downloads" href="/downloads" />
            <NavItemList.Item text="Community" href="/community" />
            <NavItemList.Item text="About" href="/about" />
          </NavItemList>
        )}
      </Styles.NavBarContainer>
      {mobile && mobileMenuShown && (
        <MobileNavMenu>
          <MobileNavItem text="Home" href="/" />
          <MobileNavItem text="Blog" href="/blog" />
          <MobileNavItem text="Downloads" href="/downloads" />
          <MobileNavItem text="Community" href="/community" />
          <MobileNavItem text="About" href="/about" />
        </MobileNavMenu>
      )}
    </Styles.NavBarWrapper>
  );
};

export default TopNavBar;

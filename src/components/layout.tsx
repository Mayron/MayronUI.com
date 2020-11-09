/** @jsx jsx */
import React, { useState, createContext, useEffect, useCallback } from "react";
import SEO from "./seo";
import TopNavBar from "./top-nav-bar";
import { jsx, Global, css } from "@emotion/core";

// Styles
import { getMediaQueryCssClasses } from "../styles/media";
import globalStyles from "../styles/global-styles";
import Footer from "./footer";
import styled from "@emotion/styled";
import colors from "../styles/colors";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "../utils/firebase";

interface IPageContentProps {
  backgroundColor: string;
}

const PageContent = styled.main<IPageContentProps>(
  (props) => css`
    transition: margin-top 0.2s ease-in;
    margin-top: 48.97px;
    min-height: calc(100vh - 192px);
    background-color: ${props.backgroundColor};
  `,
);

const scroller = () => {
  const body = document.body;

  if (window.pageYOffset > 100) {
    body.classList.add("shrink");
  } else {
    body.classList.remove("shrink");
  }
};

interface ILayoutProps {
  gaCategory: string;
  title?: string;
  collapsed?: boolean;
  description?: string;
  backgroundColor?: string;
}

export const LayoutContext = createContext({ gaCategory: "Unknown" });

const Layout: React.FC<ILayoutProps> = ({
  gaCategory,
  title,
  collapsed,
  children,
  description,
  backgroundColor,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const handleBurgerMenuClicked = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  useEffect(() => {
    if (gaCategory !== "Home") {
      window.removeEventListener("scroll", scroller);
      document.body.classList.add("shrink");
    } else {
      window.addEventListener("scroll", scroller);
    }
  }, [gaCategory]);

  return (
    <React.Fragment>
      <Global styles={[getMediaQueryCssClasses(), globalStyles]} />
      <SEO title={title} description={description} />

      <LayoutContext.Provider value={{ gaCategory }}>
        <TopNavBar onBurgerMenuClick={handleBurgerMenuClicked} />
        <PageContent backgroundColor={backgroundColor || colors.white}>
          {children}
        </PageContent>
        <Footer />
      </LayoutContext.Provider>
    </React.Fragment>
  );
};

export default Layout;

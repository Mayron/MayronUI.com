/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import React, { useContext } from "react";
import colors from "../styles/colors";
import Section from "../styles/css/containers";
import { link } from "../styles/css/text";
import media from "../styles/media";
import SocialMediaIcons from "./home/banner/social-media-icons";
import { LayoutContext } from "./layout";

const Footer: React.FC = () => {
  const { gaCategory } = useContext(LayoutContext);

  return (
    <footer
      css={css`
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        ${gaCategory === "Home" &&
        css`
          padding-top: 140px;

          &::before {
            content: " ";
            position: absolute;
            display: block;
            width: 3000px;
            height: 150px;
            background-color: ${colors.blue.dark};
            transform: rotate(3deg);
            left: -100px;
            top: 75px;
            z-index: -10;
          }

          ${media.down("xs")`
            padding-top: 50px;

            &::before {
              height: 80px;   
            }
          `};
        `}
      `}
    >
      <div
        css={css`
          background-color: ${colors.blue.dark};
          color: ${colors.white};
          text-align: center;

          ul {
            margin: 0 auto;
            margin-bottom: 20px;
          }

          ${gaCategory === "Home" &&
          css`
            section {
              padding-top: 0;
            }
          `}
        `}
      >
        <Section
          width="slim"
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <SocialMediaIcons includePatreon={true} />
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link to="/" css={link}>
              MayronUI.com
            </Link>
            , All rights reserved.
          </p>
        </Section>
      </div>
    </footer>
  );
};

export default Footer;

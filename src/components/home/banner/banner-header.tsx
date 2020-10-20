/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors from "../../../styles/colors";
import alignment from "../../../styles/css/alignment";
import { container } from "../../../styles/css/containers";
import Button from "../../widgets/button";
import SocialMediaIcons from "./social-media-icons";

const BannerHeader: React.FC = () => {
  return (
    <div css={[container]}>
      <header>
        <h1
          css={css`
            color: ${colors.white};
            text-align: left;
            font-size: 4rem;
            letter-spacing: 2px;
          `}
        >
          MayronUI
        </h1>
        <p
          css={css`
            color: ${colors.white};
            font-size: 1.25rem;
            width: 540px;
            border-top: 1px solid ${colors.white};
            padding: 10px 0;
            text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          `}
        >
          A minimalistic, Graphical, World of Warcraft UI Replacement Package
        </p>
      </header>
      <footer
        css={[
          css`
            width: 540px;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
          `,
        ]}
      >
        <div css={alignment.horizontal.even}>
          <Button type="primary" size="lg" href="/p/mayronui">
            Go to Download Page
          </Button>
          <Button
            type="primary"
            size="lg"
            href="https://www.patreon.com/mayronWoW"
            styles={css`
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 20px;
              background-color: #ff424d;

              svg {
                margin-right: 10px;
              }

              &:hover {
                background-color: #ff666e;
              }

              &:active {
                background-color: #ff1a25;
              }

              color: ${colors.white};
            `}
          >
            <FontAwesomeIcon title="Patreon" size="1x" color="white" icon={faPatreon} />
            <span>Become a Patreon</span>
          </Button>
        </div>

        <SocialMediaIcons />
      </footer>
    </div>
  );
};

export default BannerHeader;

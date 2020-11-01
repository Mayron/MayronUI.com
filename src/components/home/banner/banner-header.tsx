/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors from "../../../styles/colors";
import { evenSpacing } from "../../../styles/css/alignment";
import { container } from "../../../styles/css/containers";
import media from "../../../styles/media";
import vars from "../../../styles/variables";
import Button from "../../widgets/button";
import SocialMediaIcons from "./social-media-icons";

const BannerHeader: React.FC = () => {
  return (
    <div
      css={[
        container,
        media.down("xs")`
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px 0;
        `,
      ]}
    >
      <header
        css={css`
          h1 {
            color: ${colors.white};
            text-align: left;
            font-size: 4rem;
            letter-spacing: 2px;
            text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          }

          p {
            color: ${colors.white};
            font-size: ${vars.largeFontSize};
            width: 540px;
            border-top: 1px solid ${colors.white};
            padding: 10px 0;
            text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
          }

          ${media.down("xs")`
            margin: 0 20px;

            h1 {
              font-size: 3rem;
              text-align: center;
            }

            p {
              width: 100%;
              text-align: center;
            }      
          `};
        `}
      >
        <h1>MayronUI</h1>
        <p>A minimalistic, Graphical, World of Warcraft UI Replacement Package</p>
      </header>
      <footer
        css={[
          css`
            width: 540px;
            padding-top: 20px;
            display: flex;
            flex-direction: column;

            ${media.down("xs")`
              width: 100%;
            `};
          `,
        ]}
      >
        <div
          css={[
            evenSpacing,
            media.down("xs")`
              flex-direction: column;
              margin: 0;

              a {
                margin: 0;
                margin-bottom: 20px;

                &:last-of-type {
                  margin-bottom: 0;
                }
              }
            `,
          ]}
        >
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
              min-height: 44px;

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

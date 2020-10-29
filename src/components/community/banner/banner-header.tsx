/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import colors from "../../../styles/colors";
import { container } from "../../../styles/css/containers";
import { ReactComponent as Arrow } from "../../../images/connect-arrow.svg";

const BannerHeader: React.FC = () => {
  return (
    <div css={[container]}>
      <header
        css={css`
          display: flex;
        `}
      >
        <div>
          <iframe
            title="Join Discord"
            src="https://discordapp.com/widget?id=473158824514158592&theme=dark"
            width="350"
            height="500"
            allowTransparency={true}
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
        <div
          css={css`
            margin-left: 40px;
            color: ${colors.white};
            max-width: 550px;

            p {
              margin-bottom: 15px;
              text-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
            }

            svg {
              position: relative;
              left: -25px;
            }
          `}
        >
          <h1
            css={css`
              letter-spacing: 2px;
              width: 500px;
              text-align: left;
              margin-bottom: 20px;
              font-size: 2.5rem;
              line-height: 2.5rem;
              color: ${colors.theme};
            `}
          >
            Join Our Discord Community
          </h1>

          <p>
            Our highly supportive community is there to help you with any issues you may
            have with MayronUI. However, we are not just a support centre! We are first
            and foremost a World of Warcraft community with many of us being addon
            enthusiasts who help other members with addon projects and Lua programming,
            but general WoW discussion is also encouraged.
          </p>
          <p>
            The server currently has over 1,300 members and roughly averages between
            150-250 active users online at any given time.
          </p>

          <Arrow title="Press the connect button to join our community!" />
        </div>
      </header>
    </div>
  );
};

export default BannerHeader;

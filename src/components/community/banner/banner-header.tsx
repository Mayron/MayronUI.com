/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import colors from "../../../styles/colors";
import { container } from "../../../styles/css/containers";
import vars from "../../../styles/variables";
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
            max-width: 500px;
          `}
        >
          <h1
            css={css`
              letter-spacing: 2px;
              width: 450px;
              text-align: left;
              margin-bottom: ${vars.headerBottomSpacing};
            `}
          >
            Join Our Discord Community
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, perspiciatis,
            consequatur quaerat officia aperiam omnis architecto pariatur explicabo
            tenetur, possimus repellendus nesciunt voluptas amet? A distinctio mollitia
            blanditiis ex ipsum?
          </p>
          <Arrow title="connect" />
        </div>
      </header>
    </div>
  );
};

export default BannerHeader;

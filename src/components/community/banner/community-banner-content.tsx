/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import colors from "../../../styles/colors";
import { container } from "../../../styles/css/containers";
import { ReactComponent as Arrow } from "../../../images/connect-arrow.svg";
import media from "../../../styles/media";
import styled from "@emotion/styled";

const CommunityBannerContent: React.FC = () => {
  return (
    <BannerHeader role="banner">
      <iframe
        title="Join Discord"
        src="https://discordapp.com/widget?id=473158824514158592&theme=dark"
        width="350"
        height="500"
        allowTransparency={true}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
      <BannerTextContent>
        <h1>Join Our Discord Community</h1>

        <p>
          Our highly supportive community is there to help you with any issues you may
          have with MayronUI. However, we are not just a support centre! We are first and
          foremost a World of Warcraft community with many of us being addon enthusiasts
          who help other members with addon projects and Lua programming, but general WoW
          discussion is also encouraged.
        </p>
        <p>
          The server currently has over 1,300 members and roughly averages between 150-250
          active users online at any given time.
        </p>

        <Arrow title="Press the connect button to join our community!" />
      </BannerTextContent>
    </BannerHeader>
  );
};

export default CommunityBannerContent;

const BannerHeader = styled.header`
  ${container};
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 10;
  padding-top: 80px;
  padding-bottom: 30px;

  ${media.down("md")`
    flex-direction: column-reverse;
    padding-top: 30px;

    iframe {
      height: 300px !important;
      margin: 30px auto 0 auto;
    }

    h1 {
      font-size: 2rem;
    }
  `};

  ${media.down("xs")`
    iframe {
      width: 100% !important;
    }
  `};
`;

const BannerTextContent = styled.div`
  margin-left: 40px;
  color: ${colors.white};
  max-width: 520px;

  p {
    margin-bottom: 15px;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
  }

  svg {
    position: relative;
    left: -25px;
  }

  h1 {
    letter-spacing: 2px;
    width: 500px;
    text-align: left;
    margin-bottom: 20px;
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: ${colors.theme};
  }

  ${media.down("md")`
    margin: 0 auto;
    width: 100%;
    text-align: center;

    h1 {
      text-align: center;
      width: 100%;
    }

    svg {
      display: none;
    }
  `};
`;

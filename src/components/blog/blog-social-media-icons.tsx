/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faYoutube,
  faTwitter,
  faGithub,
  faTwitch,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

import GaLink from "../widgets/ga-link";
import media from "../../styles/media";

const darkGrey = "#757575";

const BlogSocialMediaIcons: React.FC = () => {
  return (
    <ul
      css={css`
        margin-left: auto;
        align-self: flex-end;
        display: flex;

        ${media.down("xs")`
          flex: 100%;
          margin-top: 10px;
        `};

        li {
          padding: 0 6px;
        }

        svg {
          width: 24px !important;
        }
      `}
    >
      <li>
        <GaLink
          href="https://www.youtube.com/channel/UCCu-NuBYVi7yokZmKBCBvHw"
          target="_blank"
        >
          <FontAwesomeIcon title="YouTube" size="2x" color={darkGrey} icon={faYoutube} />
        </GaLink>
      </li>
      <li>
        <GaLink href="https://www.twitch.tv/mayronwow" target="_blank">
          <FontAwesomeIcon title="Twitch" size="2x" color={darkGrey} icon={faTwitch} />
        </GaLink>
      </li>
      <li>
        <GaLink href="https://twitter.com/MayronWoW" target="_blank">
          <FontAwesomeIcon title="Twitter" size="2x" color={darkGrey} icon={faTwitter} />
        </GaLink>
      </li>
      <li>
        <GaLink href="https://discord.gg/8Kh3maU" target="_blank">
          <FontAwesomeIcon
            title="Discord"
            size="2x"
            color={darkGrey}
            icon={faDiscord}
            className="discord-icon"
          />
        </GaLink>
      </li>
      <li>
        <GaLink href="https://github.com/Mayron/MayronUI-Official" target="_blank">
          <FontAwesomeIcon title="GitHub" size="2x" color={darkGrey} icon={faGithub} />
        </GaLink>
      </li>

      <li>
        <GaLink href="https://www.patreon.com/mayronWoW" target="_blank">
          <FontAwesomeIcon title="Patreon" size="2x" color={darkGrey} icon={faPatreon} />
        </GaLink>
      </li>
    </ul>
  );
};

export default BlogSocialMediaIcons;

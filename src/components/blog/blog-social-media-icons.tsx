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
        <FontAwesomeIcon title="YouTube" size="2x" color={darkGrey} icon={faYoutube} />
      </li>
      <li>
        <FontAwesomeIcon title="Twitch" size="2x" color={darkGrey} icon={faTwitch} />
      </li>
      <li>
        <FontAwesomeIcon title="Twitter" size="2x" color={darkGrey} icon={faTwitter} />
      </li>
      <li>
        <FontAwesomeIcon
          title="Discord"
          size="2x"
          color={darkGrey}
          icon={faDiscord}
          className="discord-icon"
        />
      </li>
      <li>
        <FontAwesomeIcon title="GitHub" size="2x" color={darkGrey} icon={faGithub} />
      </li>

      <li>
        <FontAwesomeIcon title="Patreon" size="2x" color={darkGrey} icon={faPatreon} />
      </li>
    </ul>
  );
};

export default BlogSocialMediaIcons;

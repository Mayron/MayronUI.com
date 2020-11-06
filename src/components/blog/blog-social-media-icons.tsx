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

const darkGrey = "#757575";

const BlogSocialMediaIcons: React.FC = () => {
  return (
    <ul
      css={css`
        margin-left: auto;
        align-self: flex-end;
        display: flex;

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
          ga={{ action: "BlogSocialIcon", label: "YouTube" }}
          target="_blank"
        >
          <FontAwesomeIcon title="YouTube" size="2x" color={darkGrey} icon={faYoutube} />
        </GaLink>
      </li>
      <li>
        <GaLink
          href="https://www.twitch.tv/mayronwow"
          ga={{ action: "BlogSocialIcon", label: "Twitch" }}
          target="_blank"
        >
          <FontAwesomeIcon title="Twitch" size="2x" color={darkGrey} icon={faTwitch} />
        </GaLink>
      </li>
      <li>
        <GaLink
          href="https://twitter.com/MayronWoW"
          ga={{ action: "BlogSocialIcon", label: "Twitter" }}
          target="_blank"
        >
          <FontAwesomeIcon title="Twitter" size="2x" color={darkGrey} icon={faTwitter} />
        </GaLink>
      </li>
      <li>
        <GaLink
          href="https://discord.gg/8Kh3maU"
          ga={{ action: "BlogSocialIcon", label: "Discord" }}
          target="_blank"
        >
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
        <GaLink
          href="https://github.com/Mayron/MayronUI-Official"
          ga={{ action: "BlogSocialIcon", label: "GitHub" }}
          target="_blank"
        >
          <FontAwesomeIcon title="GitHub" size="2x" color={darkGrey} icon={faGithub} />
        </GaLink>
      </li>

      <li>
        <GaLink
          href="https://www.patreon.com/mayronWoW"
          ga={{ action: "BlogSocialIcon", label: "Patreon" }}
          target="_blank"
        >
          <FontAwesomeIcon title="Patreon" size="2x" color={darkGrey} icon={faPatreon} />
        </GaLink>
      </li>
    </ul>
  );
};

export default BlogSocialMediaIcons;

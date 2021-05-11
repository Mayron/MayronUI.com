/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faYoutube,
  faTwitterSquare,
  faGithubSquare,
  faTwitch,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import media from "../../../styles/media";
import GaLink from "../../widgets/ga-link";

interface ISocialMediaIconsProps {
  includePatreon?: boolean;
}

const SocialMediaIcons: React.FC<ISocialMediaIconsProps> = ({ includePatreon }) => {
  return (
    <ul
      css={css`
        display: flex;
        margin-top: 30px;

        ${media.down("xs")`
          justify-content: space-evenly;

          ${
            !includePatreon &&
            css`
              background-color: rgba(0, 0, 0, 0.5);
            `
          };
          
          padding: 10px;
          border-radius: 4px;
          margin-top: 20px;
        `};

        li {
          padding: 0 10px;

          &:hover {
            filter: brightness(1.2);
            cursor: pointer;
          }

          &:last-of-type {
            padding-right: 0;
          }

          &:first-of-type {
            padding-left: 0;
          }
        }
      `}
    >
      <li>
        <GaLink
          href="https://www.youtube.com/channel/UCCu-NuBYVi7yokZmKBCBvHw"
          target="_blank"
        >
          <FontAwesomeIcon title="YouTube" size="2x" color="#fe0000" icon={faYoutube} />
        </GaLink>
      </li>
      <li>
        <GaLink href="https://www.twitch.tv/mayronwow" target="_blank">
          <FontAwesomeIcon title="Twitch" size="2x" color="#864dee" icon={faTwitch} />
        </GaLink>
      </li>
      <li>
        <GaLink href="https://twitter.com/MayronWoW" target="_blank">
          <FontAwesomeIcon
            title="Twitter"
            size="2x"
            color="#28a9e0"
            icon={faTwitterSquare}
          />
        </GaLink>
      </li>
      <li>
        <GaLink href="https://discord.gg/8Kh3maU" target="_blank">
          <FontAwesomeIcon
            title="Discord"
            size="2x"
            color="#7389dc"
            icon={faDiscord}
            className="discord-icon"
          />
        </GaLink>
      </li>
      <li>
        <GaLink href="https://github.com/Mayron/MayronUI-Official" target="_blank">
          <FontAwesomeIcon title="GitHub" size="2x" color="white" icon={faGithubSquare} />
        </GaLink>
      </li>
      {includePatreon && (
        <li>
          <GaLink href="https://www.patreon.com/mayronWoW" target="_blank">
            <FontAwesomeIcon title="Patreon" size="2x" color="#ff424d" icon={faPatreon} />
          </GaLink>
        </li>
      )}
    </ul>
  );
};

export default SocialMediaIcons;

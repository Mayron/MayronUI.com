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
          background-color: rgba(0, 0, 0, 0.5);
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
        <FontAwesomeIcon title="YouTube" size="2x" color="#fe0000" icon={faYoutube} />
      </li>
      <li>
        <FontAwesomeIcon title="Twitch" size="2x" color="#864dee" icon={faTwitch} />
      </li>
      <li>
        <FontAwesomeIcon
          title="Twitter"
          size="2x"
          color="#28a9e0"
          icon={faTwitterSquare}
        />
      </li>
      <li>
        <FontAwesomeIcon
          title="Discord"
          size="2x"
          color="#7389dc"
          icon={faDiscord}
          className="discord-icon"
        />
      </li>
      <li>
        <FontAwesomeIcon title="GitHub" size="2x" color="white" icon={faGithubSquare} />
      </li>
      {includePatreon && (
        <li>
          <FontAwesomeIcon title="Patreon" size="2x" color="#ff424d" icon={faPatreon} />
        </li>
      )}
    </ul>
  );
};

export default SocialMediaIcons;

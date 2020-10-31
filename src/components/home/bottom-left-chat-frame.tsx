/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Section from "../../styles/css/containers";
import Img from "gatsby-image";
import colors from "../../styles/colors";
import vars from "../../styles/variables";
import { ReactComponent as Lines } from "../../images/lines.svg";
import media from "../../styles/media";

interface IListItemProps {
  label: string;
  top: number;
  left?: number;
  right?: number;
}

const ListItem: React.FC<IListItemProps> = ({ label, top, left, children, right }) => {
  return (
    <li
      css={css`
        max-width: 340px;
        top: ${top}px;

        ${left !== undefined &&
        css`
          left: ${left}px;
        `};

        ${right !== undefined &&
        css`
          right: ${right}px;
        `};

        strong {
          display: block;
          margin-bottom: 5px;
        }
      `}
    >
      <p>
        <strong>{label}</strong>
        {children}
      </p>
    </li>
  );
};

interface IBottomLeftChatFrameProps {
  header: string;
}

const BottomLeftChatFrame: React.FC<IBottomLeftChatFrameProps> = ({ header }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bottom-left-chat.jpg" }) {
        childImageSharp {
          fixed(width: 423, height: 310, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div
      css={css`
        position: relative;
        z-index: 10;
        overflow: hidden;

        &::before {
          content: " ";
          position: absolute;
          display: block;
          width: 3000px;
          height: 380px;
          background-color: ${colors.blue.dark};
          transform: rotate(6deg);
          left: -100px;
          top: -130px;

          ${media.down("xs")`
            height: 500px;
          `};
        }

        h2 {
          color: ${colors.white};
          text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          text-align: right;
          margin-bottom: 10px;
          margin-right: 30px;
          width: 340px;
          min-width: 340px;

          ${media.down("xs")`
            text-align: center;
            margin-top: 30px;
            margin-right: 0;
            width: 100%;
          `};
        }

        img {
          border-radius: ${vars.borderRadius};
        }
      `}
    >
      <Section
        verticalSpacing="large"
        width="slim"
        css={css`
          padding-top: 20px;
        `}
      >
        <Fade
          triggerOnce
          css={css`
            position: relative;
            display: flex;
            justify-content: flex-end;
            margin-left: auto;

            ${media.down("xs")`
              padding-left: 0;
            `};
          `}
        >
          <h2>{header}</h2>

          <div
            css={css`
              position: relative;
            `}
          >
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="Bottom Left Chat Frame"
              css={css`
                display: flex;
                justify-content: flex-end;
                margin-right: 57px;
                top: 5px;

                ${media.down("xs")`
                  margin-right: 0;
                  margin-bottom: 30px;
                  width: 355px !important;
                  height: 260px  !important;
                `};
              `}
            />
            <Lines
              title="lines"
              css={css`
                position: absolute;
                top: 107px;
                right: -70px;

                ${media.down("xs")`
                  display: none;
                `};
              `}
            />
          </div>

          <ul
            css={css`
              list-style-type: disc;

              ${media.up("sm")`
                margin-bottom: 80px;

                li {
                  position: absolute;
                }
              `};

              ${media.down("xs")`
                padding-inline-start: 30px;

                li {
                  padding-bottom: 15px;

                  &:last-of-type {
                    padding-bottom: 0;
                  }
                }
              `};
            `}
          >
            <ListItem top={-220} left={0} label="Switch between multiple UI layouts">
              With one click, you can switch the profiles of several addOns to best suit
              your gameplay.
            </ListItem>
            <ListItem top={-80} left={120} label="Copy your chat's history">
              View all of your chat&#39;s history across all tabs in a separate window
              with support for copy/paste.
            </ListItem>
            <ListItem top={60} right={90} label="Menu shortcut buttons">
              Bind commonly used Blizzard UI panels to a special shortcut bar for quick
              access.
            </ListItem>
            <ListItem top={80} left={80} label="Chat frame artwork for each corner!">
              By default, the chat frame is positioned in the top left corner but you can
              select any corner you like.
            </ListItem>
          </ul>
        </Fade>
      </Section>
    </div>
  );
};

export default BottomLeftChatFrame;

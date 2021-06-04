/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import BulletPoints from "../../common/bullet-points";
import LazyImage from "../../common/lazy-image";
import { Fade } from "react-awesome-reveal";
import Section from "../../../styles/css/containers";
import media from "../../../styles/media";

const Introduction: React.FC = () => {
  return (
    <Section
      verticalSpacing="large"
      widthType="slim"
      css={css`
        padding-bottom: 0 !important;
      `}
    >
      <Fade triggerOnce>
        <header
          css={css`
            h2 {
              max-width: 600px;
              margin: 0 auto;
              padding-bottom: 40px;
            }

            p {
              max-width: 700px;
              margin: 0 auto;
              text-align: center;
              padding-bottom: 15px;
            }

            ${media.down("sm")`

              h2 {
                font-size: 1.65rem;
                padding-bottom: 20px;
              }
            `};
          `}
        >
          <h2>Designed with Passion for Exceptional Gameplay</h2>
          <p>
            MayronUI has been in development for over 8 years. Both our dev-team and
            active community are continuously growing at a rate we never thought possible.
          </p>
          <p>
            The current release of MayronUI is the most customizable, high performance and
            efficient UI suite we have ever assembled.
          </p>
          <BulletPoints
            css={css`
              width: 520px;
              margin: 0 auto;
              padding-top: 20px;

              ${media.down("xs")`
                width: 100%;
                padding-inline-start: 30px;
                font-size: 1rem;

                li {
                  padding-bottom: 10px;
                }
              `};
            `}
          >
            <li>Blazingly fast and lightweight for maximum performance.</li>
            <li>Suitable for all classes, specs, roles and screen resolutions.</li>
            <li>Highly customizable to suit all needs.</li>
            <li>Modular design with support for additional plugins.</li>
          </BulletPoints>
        </header>
      </Fade>

      <Fade
        triggerOnce
        direction="up"
        css={css`
          position: relative;
          z-index: 10;
          margin-top: 40px;
          height: 260px;

          video {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
            margin: 0 auto;
            display: block;
          }

          ${media.down("md")`
            height: auto;
            margin-top: 10px;

            video {
              width: 100%;
              max-width: 720px;
            }
          `};
        `}
      >
        <video muted loop autoPlay playsInline preload="auto" poster="/mui-bottomui.jpg">
          <source type="video/webm" src="/mui-bottomui.webm" />
          <img src="/mui-bottomui.jpg" alt="Preview" />
        </video>
      </Fade>
    </Section>
  );
};

export default Introduction;

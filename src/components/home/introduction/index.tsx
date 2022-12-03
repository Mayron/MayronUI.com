/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import BulletPoints from "../../common/bullet-points";
import LazyImage from "../../common/lazy-image";
import { Fade } from "react-awesome-reveal";
import Section from "../../../styles/css/containers";
import media from "../../../styles/media";
import { Link } from "gatsby";

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
              max-width: 860px;
              margin: 0 auto;
              text-align: center;
              padding-bottom: 15px;
              font-size: 1.125rem;
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
            MayronUI has been in development for over {new Date().getFullYear() - 2011}{" "}
            years and has now surpassed 300k downloads!
          </p>

          <p>
            Our active community has been growing at a rate we never thought possible. The
            official{" "}
            <Link className="text-link" to="/community">
              Discord
            </Link>{" "}
            server has been a fantastic resource of help and support to new arrivals, so
            make sure to stop by and please don&apos;t hesitate to ask for help!
          </p>

          <p>
            The development team consists of just myself (Mayron). However, in recent
            years I&apos;ve been fortunate enough to see other experienced developers
            volenteering to fix bugs or offer improvements. These contributions have
            helped to ensure users get early and continuous updates, which is especially
            critical during big updates to WoW.
          </p>
          <BulletPoints
            css={css`
              max-width: 550px;
              margin: 0 auto;
              padding-top: 20px;
              font-size: 1rem;

              ${media.down("xs")`
                width: 100%;
                padding-inline-start: 30px;

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
            <li>Supports Classic, Wrath, and Dragonflight (in 9 different languages).</li>
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

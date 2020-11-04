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
      width="slim"
      css={css`
        padding-bottom: 0 !important;
      `}
    >
      <Fade triggerOnce>
        <header
          css={css`
            h2 {
              padding: 0 150px;
            }

            p {
              text-align: center;
              margin-bottom: 15px;
              padding: 0 100px;
            }

            ${media.down("sm")`
              h2, p {
                padding: 0;
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

                li {
                  text-align: center;
                  padding-bottom: 10px;
                }
              `};
            `}
          >
            <li>Blazingly fast and lightweight for maximum performance</li>
            <li>Suitable for all classes, specs, roles and screen resolutions</li>
            <li>Highly customizable to suit all needs</li>
            <li>Modular design with support for additional plugins</li>
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
          height: 208px;

          img {
            margin: 0 auto;
          }

          ${media.down("md")`
            height: auto;

            img {
              width: 100%;
            }
          `};
        `}
      >
        <LazyImage src="/images/unitframes.gif" alt="Toggle additional action bars" />
      </Fade>
    </Section>
  );
};

export default Introduction;

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import BannerHeader from "./banner-header";
import { overlayCss } from "../../../styles/css/containers";
import Particles from "react-particles-js";
import colors from "../../../styles/colors";

const Banner: React.FC = () => {
  const data: IImageSharpProps = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div
      role="banner"
      css={css`
        position: relative;
      `}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        draggable={false}
        css={css`
          height: calc(100vh - 40px) !important;
        `}
      />
      <Particles
        css={[
          overlayCss,
          css`
            width: 60%;
            left: auto;
            mask-image: radial-gradient(
              white 0%,
              white 30%,
              transparent 80%,
              transparent
            );
          `,
        ]}
        params={{
          particles: {
            number: {
              value: 160,
            },
            size: {
              value: 3,
              random: true,
              animation: {
                speed: 4,
                minimumValue: 0.3,
              },
            },
            shadow: {
              blur: 4,
              color: {
                value: colors.yellowGlow,
              },
              enable: true,
            },
            opacity: {
              value: 0.8,
            },
            color: {
              value: colors.yellowGlow,
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
        }}
      />
      <div
        css={[
          overlayCss,
          css`
            display: flex;
            align-items: flex-end;
            padding-bottom: 100px;
            box-shadow: inset 0 -4px 6px rgba(0, 0, 0, 0.5);
          `,
        ]}
      >
        <BannerHeader />
      </div>
    </div>
  );
};

export default Banner;

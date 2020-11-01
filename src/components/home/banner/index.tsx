/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img, { FixedObject, FluidObject } from "gatsby-image";
import BannerHeader from "./banner-header";
import { overlayCss } from "../../../styles/css/containers";
import Particles from "react-particles-js";
import colors from "../../../styles/colors";
import media, { breakpoints } from "../../../styles/media";

interface IImageSharpProps {
  mobile: {
    childImageSharp: {
      fixed: FixedObject;
      fluid: FluidObject;
    };
  };
  desktop: {
    childImageSharp: {
      fixed: FixedObject;
      fluid: FluidObject;
    };
  };
}

const Banner: React.FC = () => {
  const data: IImageSharpProps = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "mobile-banner.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 576) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktop: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sources = [
    data.mobile.childImageSharp.fluid,
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 576px)`,
    },
  ];

  return (
    <div
      role="banner"
      css={css`
        position: relative;
      `}
    >
      <Img
        fluid={sources}
        draggable={false}
        css={css`
          height: calc(100vh - 40px) !important;

          ${media.down("md")`
            max-height: 768px;
          `};

          ${media.between("sm", "lg")`
            img {
              left: auto !important;
              right: -400px !important;
              width: auto !important;
            }
          `};
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

            ${media.down("xs")`
              align-items: flex-start;
              padding-bottom: 0;  
            `};

            ${media.down("md")`
              padding-bottom: 50px;            
            `};
          `,
        ]}
      >
        <BannerHeader />
      </div>
    </div>
  );
};

export default Banner;

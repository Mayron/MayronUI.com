/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import Particles from "react-particles-js";
import colors from "../../styles/colors";
import { overlayCss } from "../../styles/css/containers";

const MuiBanner: React.FC = ({ children }) => {
  const data: IImageSharpProps = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mui-banner.jpg" }) {
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
          height: 500px;
        `}
      />
      <Particles
        css={[
          overlayCss,
          css`
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
              value: 120,
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
                value: colors.blue.glow,
              },
              enable: true,
            },
            opacity: {
              value: 0.8,
            },
            color: {
              value: colors.blue.glow,
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
            align-items: center;
            box-shadow: inset 0 -4px 6px rgba(0, 0, 0, 0.5);
          `,
        ]}
      >
        {children}
      </div>
    </div>
  );
};

export default MuiBanner;

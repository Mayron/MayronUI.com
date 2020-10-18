/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import BannerHeader from "./banner-header";
import { IImageSharpProps } from "../../../custom";

const Banner: React.FC = () => {
  const data: IImageSharpProps = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "community.png" }) {
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
        margin-top: 40px;
        background-color: black;
      `}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        draggable={false}
        css={css`
          height: calc(100vh - 40px) !important;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
        `}
      >
        <BannerHeader />
      </div>
    </div>
  );
};

export default Banner;

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import CommunityBannerContent from "./community-banner-content";

const Banner: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "community.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "community-mobile.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 512) {
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
    <React.Fragment>
      <Img
        fluid={sources}
        draggable={false}
        style={{ position: "absolute" }}
        css={css`
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: black;
        `}
      />
      <CommunityBannerContent />
    </React.Fragment>
  );
};

export default Banner;

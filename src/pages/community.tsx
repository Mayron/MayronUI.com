/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import CommunityBannerContent from "../components/community/banner/community-banner-content";
import Img from "gatsby-image";

const CommunityPage: React.FC<RouteComponentProps> = () => {
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
    <Layout title="Community" page="Community">
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

          @media (min-width: 1601px) {
            img {
              max-width: 1600px;
              left: 50% !important;
              transform: translateX(-50%);
            }
          }
        `}
      />
      <CommunityBannerContent />
    </Layout>
  );
};

export default CommunityPage;

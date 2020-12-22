/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";
import colors from "../styles/colors";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import Section from "../styles/css/containers";
import vars from "../styles/variables";
import media from "../styles/media";
import styled from "@emotion/styled";

interface IProjectCardProps {
  header: string;
  background: FixedObject | FixedObject[];
  href: string;
  containImage?: boolean;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  header,
  background,
  children,
  href,
  containImage,
}) => {
  return (
    <li
      css={css`
        ${media.down("sm")`
          width: 100%;
        `};
      `}
    >
      <Link
        to={href}
        css={css`
          text-decoration: none;
          display: block;
          width: 235px;
          color: ${colors.black};
          background-color: ${colors.white};
          border: 1px solid ${colors.grey.uiBorder};
          border-radius: 4px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          min-height: 292px;

          ${media.down("sm")`
            width: auto;
          `};

          &:hover {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

            img {
              filter: brightness(1.25);
            }
          }

          header {
            text-align: center;
            padding: 12.5px 10px;
            font-size: 16px;
            line-height: 16px;

            h4 {
              text-transform: none;
            }

            p {
              padding: 10px 0;
            }

            p,
            span {
              font-size: 14px;
              color: ${colors.text.secondary};
            }

            ${media.down("sm")`
              p, span {
                font-size: 1rem;
                line-height: 1.4rem;
              }

              p {
                padding: 10px 40px;
              }

              h4 {
                font-size: 1.4rem;
                line-height: 1.4rem;
                margin-bottom: 10px;
              }
            `};
          }
        `}
      >
        <Img
          fixed={background}
          draggable={false}
          style={{ width: "100%", height: 134 }}
          imgStyle={containImage ? { objectFit: "contain" } : undefined}
          css={css`
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          `}
        />

        <header>
          <h4>{header}</h4>
          <p>{children}</p>
        </header>
      </Link>
    </li>
  );
};

const DownloadsPage: React.FC<RouteComponentProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "mui-thumbnail-bg.jpg" }) {
        childImageSharp {
          fixed(quality: 80, width: 239, height: 134) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bgMobile: file(relativePath: { eq: "mui-thumbnail-bg.jpg" }) {
        childImageSharp {
          fixed(quality: 80, width: 545, height: 134) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      misc: file(relativePath: { eq: "misc-thumbnail-bg.jpg" }) {
        childImageSharp {
          fixed(quality: 80, width: 239, height: 134) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const sources = [
    data.bgMobile.childImageSharp.fixed,
    {
      ...data.bg.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout title="Downloads" gaCategory="Downloads" backgroundColor="#F8F8F8">
      <Section
        widthType="slim"
        css={css`
          padding-bottom: 0;
        `}
      >
        <SectionHeader>
          <h1>Featured Projects</h1>
        </SectionHeader>
        <ul>
          <ProjectCard header="MayronUI" href="/p/mayronui" background={sources}>
            The full UI pack for MayronUI includes the core MUI addons, plus several other
            third-party addons to deliver the optimal WoW experience.
          </ProjectCard>
        </ul>
      </Section>
      <Section
        widthType="slim"
        css={css`
          padding-bottom: 0;
        `}
      >
        <SectionHeader>
          <h2>Developer Tools</h2>
          <p>
            The MayronObjects framework offers a feature rich, packaging ecosystem. Each
            package created from this framework consists of entities such as classes,
            instances and attributes to deliver well-defined APIs for addon development.
          </p>
        </SectionHeader>
        <ul
          css={css`
            display: flex;
            margin: -${vars.columnSpacing};
            flex-wrap: wrap;
            padding: 20px 5px 40px 5px;

            li {
              margin: 6px;
            }
          `}
        >
          <ProjectCard
            header="MayronObjects"
            href="/p/mayron-objects"
            containImage
            background={data.misc.childImageSharp.fixed}
          >
            A framework to make object-oriented programming (OOP) easier for Lua
            developers and WoW addon development.
          </ProjectCard>

          <ProjectCard
            header="Pkg-MayronDB"
            href="/p/pkg-mayron-db"
            containImage
            background={data.misc.childImageSharp.fixed}
          >
            A lightweight, feature rich embedded addon database for WoW addon development.
          </ProjectCard>

          <ProjectCard
            header="Pkg-MayronEvents"
            href="/p/pkg-mayron-events"
            containImage
            background={data.misc.childImageSharp.fixed}
          >
            A simple event management package for WoW addon development with support for
            custom addon events.
          </ProjectCard>
          <ProjectCard
            header="Pkg-GridPanels"
            href="/p/pkg-grid-panels"
            containImage
            background={data.misc.childImageSharp.fixed}
          >
            Create responsive UI panels using a grid of cells, and responsive scroll
            frames that dynamically shift child elements when resized.
          </ProjectCard>
        </ul>
      </Section>
    </Layout>
  );
};

const SectionHeader = styled.header`
  h1,
  h2 {
    font-size: 1.4rem;
    text-align: left;
    color: ${colors.text.secondary};
    margin: 0 0 10px 0;

    ${media.down("sm")`
      text-align: center;
      font-size: 1.6rem;
    `};
  }

  p {
    padding-bottom: 10px;
    font-size: 0.9rem;

    ${media.down("sm")`
      text-align: center;
    `};
  }
`;

export default DownloadsPage;

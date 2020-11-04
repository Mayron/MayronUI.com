/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";
import colors from "../styles/colors";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import { formatStatistic } from "../utils/common";
import Section from "../styles/css/containers";
import vars from "../styles/variables";
import media from "../styles/media";
import styled from "@emotion/styled";

interface IProjectCardProps {
  header: string;
  downloads: number;
  background: FixedObject | FixedObject[];
  href: string;
  containImage?: boolean;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  header,
  downloads,
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
          max-width: 241px;
          color: ${colors.black};

          ${media.down("sm")`
            max-width: none;
          `};

          &:hover {
            img {
              filter: brightness(1.25);
            }

            article {
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            }
          }

          article {
            background-color: ${colors.white};
            border: 1px solid ${colors.grey.uiBorder};
            border-radius: 4px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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
        <article>
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
            <span>{formatStatistic(downloads)} downloads</span>
          </header>
        </article>
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
        <header>
          <h1 css={downloadsSubHeader}>Featured Downloads</h1>
        </header>
        <ul>
          <ProjectCard
            header="MayronUI"
            href="/p/mayronui"
            downloads={256000}
            background={sources}
          >
            This is some text describing the project in the neatest way possible.
            Hopefully the box is big enough!
          </ProjectCard>
        </ul>
      </Section>
      <Section widthType="slim">
        <header>
          <h2 css={downloadsSubHeader}>Libraries</h2>
        </header>
        <ul
          css={css`
            display: flex;
            margin: -${vars.columnSpacing};
            flex-wrap: wrap;

            li {
              margin: ${vars.columnSpacing};
            }
          `}
        >
          <ProjectCard
            header="LibMayronObjects"
            href="/p/lib-mayron-objects"
            downloads={256000}
            containImage
            background={data.misc.childImageSharp.fixed}
          >
            This is some text describing the project in the neatest way possible.
            Hopefully the box is big enough!
          </ProjectCard>

          <ProjectCard
            header="LibMayronDB"
            href="/p/lib-mayron-db"
            downloads={256000}
            containImage
            background={data.misc.childImageSharp.fixed}
          >
            This is some text describing the project in the neatest way possible.
            Hopefully the box is big enough!
          </ProjectCard>
        </ul>
      </Section>
    </Layout>
  );
};

const downloadsSubHeader = css`
  font-size: 1.4rem;
  text-align: left;
  color: ${colors.text.secondary};
  margin: 20px 0 10px 0;

  ${media.down("sm")`
    text-align: center;
    font-size: 1.6rem;
  `};
`;

export default DownloadsPage;

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

interface IProjectCardProps {
  header: string;
  downloads: number;
  background: FixedObject;
  href: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  header,
  downloads,
  background,
  children,
  href,
}) => {
  return (
    <li>
      <Link
        to={href}
        css={css`
          text-decoration: none;
          display: block;
          max-width: 241px;
          color: ${colors.black};

          &:hover {
            img {
              filter: brightness(1.25);
            }

            article {
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            }
          }
        `}
      >
        <article
          css={css`
            background-color: ${colors.white};
            border: 1px solid ${colors.grey.uiBorder};
            border-radius: 4px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          `}
        >
          <Img
            fixed={background}
            draggable={false}
            style={{ display: "block" }}
            css={css`
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
            `}
          />

          <header
            css={css`
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
            `}
          >
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
          fixed(quality: 100, width: 239, height: 134) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      misc: file(relativePath: { eq: "misc-thumbnail-bg.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 239, height: 134) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout title="Downloads" gaCategory="Downloads" backgroundColor="#F8F8F8">
      <Section
        width="slim"
        css={css`
          padding-bottom: 0;
        `}
      >
        <header>
          <h1
            css={css`
              font-size: 1.4rem;
              text-align: left;
              color: ${colors.text.secondary};
              border-bottom: 1px solid ${colors.grey.uiBorder};
              margin-bottom: ${vars.sectionSpacing};
            `}
          >
            Featured Downloads
          </h1>
        </header>
        <ul>
          <ProjectCard
            header="MayronUI"
            href="/p/mayronui"
            downloads={256000}
            background={data.bg.childImageSharp.fixed}
          >
            This is some text describing the project in the neatest way possible.
            Hopefully the box is big enough!
          </ProjectCard>
        </ul>
      </Section>
      <Section width="slim">
        <header>
          <h1
            css={css`
              font-size: 1.4rem;
              text-align: left;
              color: ${colors.text.secondary};
              border-bottom: 1px solid ${colors.grey.uiBorder};
              margin-bottom: ${vars.sectionSpacing};
            `}
          >
            Libraries
          </h1>
        </header>
        <ul
          css={css`
            display: flex;
            margin: -${vars.columnSpacing};

            li {
              margin: ${vars.columnSpacing};
            }
          `}
        >
          <ProjectCard
            header="LibMayronObjects"
            href="/p/lib-mayron-objects"
            downloads={256000}
            background={data.misc.childImageSharp.fixed}
          >
            This is some text describing the project in the neatest way possible.
            Hopefully the box is big enough!
          </ProjectCard>

          <ProjectCard
            header="LibMayronDB"
            href="/p/lib-mayron-db"
            downloads={256000}
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

export default DownloadsPage;

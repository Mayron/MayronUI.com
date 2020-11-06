/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Layout from "../../components/layout";
import { RouteComponentProps } from "@reach/router";
import { container } from "../../styles/css/containers";
import MuiBanner from "../../components/download-page/mui-banner";
import BlizzardButton from "../../components/common/blizzard-button";
import TableOfContents from "../../components/download-page/table-of-contents";
import StepPanel from "../../components/download-page/step-panel";
import PageContent from "../../components/download-page/page-content";
import DownloadPageIntro from "../../components/download-page/download-page-intro";
import { graphql, useStaticQuery } from "gatsby";
import Button from "../../components/widgets/button";
import BackButton from "../../components/common/back-button";
import media from "../../styles/media";

const MuiDownloadsPage: React.FC<RouteComponentProps> = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const data = useStaticQuery<IProjectStepData>(
    graphql`
      query {
        allContentfulProjectStep(
          filter: { projectId: { eq: "mayronui" } }
          sort: { fields: step }
        ) {
          edges {
            node {
              content {
                childMarkdownRemark {
                  html
                }
              }
              step
              title
            }
          }
        }
      }
    `,
  );

  return (
    <Layout title="MayronUI" gaCategory="MayronUI" backgroundColor="#F8F8F8">
      <MuiBanner>
        <div
          css={[
            container,
            css`
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              padding-right: 150px;

              ${media.down("sm")`
                align-items: center;
                padding-right: 30px;
              `};
            `,
          ]}
        >
          <BlizzardButton
            text="Download for Retail"
            href="https://www.wowinterface.com/downloads/info21221-MayronUIGen6.html"
            ga={{ action: "MayronUI", label: "DownloadRetail" }}
          />
          <BlizzardButton
            text="Download for Classic"
            href="https://www.wowinterface.com/downloads/fileinfo.php?id=25225"
            ga={{ action: "MayronUI", label: "DownloadClassic" }}
          />
        </div>
      </MuiBanner>

      <DownloadPageIntro
        header="MayronUI"
        description="A minimalistic, Graphical, World of Warcraft UI Replacement Package."
      />

      <PageContent>
        <section>
          {data.allContentfulProjectStep.edges.map((e, key) => (
            <StepPanel key={key} data={e.node} onInView={setSelectedStep} />
          ))}
          <footer
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <BackButton href="/downloads" text="Back to Downloads" />
            <Button type="secondary" size="lg" onClick={() => window.scrollTo(0, 0)}>
              Go to top of page
            </Button>
          </footer>
        </section>
        <TableOfContents
          selected={selectedStep}
          onStepClick={setSelectedStep}
          steps={data.allContentfulProjectStep.edges.map((s) => s.node.title)}
        />
      </PageContent>
    </Layout>
  );
};

export default MuiDownloadsPage;

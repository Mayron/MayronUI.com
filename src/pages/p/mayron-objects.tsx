/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import Layout from "../../components/layout";
import { RouteComponentProps } from "@reach/router";
import BlizzardButton from "../../components/common/blizzard-button";
import TableOfContents from "../../components/download-page/table-of-contents";
import StepPanel from "../../components/download-page/step-panel";
import PageContent from "../../components/download-page/page-content";
import DownloadPageIntro from "../../components/download-page/download-page-intro";
import { graphql, useStaticQuery } from "gatsby";
import Button from "../../components/widgets/button";
import BackButton from "../../components/common/back-button";
import { DownloadPageFooter } from "../../components/download-page/styles";

const MuiDownloadsPage: React.FC<RouteComponentProps> = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const data = useStaticQuery<IProjectStepData>(
    graphql`
      query {
        allContentfulProjectStep(
          filter: { projectId: { eq: "mayron-objects" } }
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
    <Layout title="MayronObjects" gaCategory="MayronObjects" backgroundColor="#F8F8F8">
      <DownloadPageIntro
        header="MayronObjects"
        description="An object-oriented programming (OOP) framework and packaging ecosystem. MayronObjects allows you to create well-defined packages with strict typing rules for other addon authors to use in their addon projects to improve the development experience."
      >
        <BlizzardButton
          large
          text="Download from WoWInterface"
          href="https://www.wowinterface.com/downloads/info24450-MayronObjects.html"
          ga={{ action: "Download", label: "WoWInterface" }}
        />
        <BlizzardButton
          large
          text="Download from CurseForge"
          href="https://www.curseforge.com/wow/addons/mayronobjects/files"
          ga={{ action: "Download", label: "CurseForge" }}
        />
      </DownloadPageIntro>

      <PageContent>
        <section>
          {data.allContentfulProjectStep.edges.map((e, key) => (
            <StepPanel key={key} data={e.node} onInView={setSelectedStep} />
          ))}
          <DownloadPageFooter>
            <BackButton href="/downloads" text="Back to Downloads" />
            <Button type="secondary" size="lg" onClick={() => window.scrollTo(0, 0)}>
              Go to top of page
            </Button>
          </DownloadPageFooter>
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

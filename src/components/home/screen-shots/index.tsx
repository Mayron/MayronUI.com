/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import { FixedObject, FluidObject } from "gatsby-image";
import React from "react";
import { Section } from "../../../styles/css/containers";
import Carousel from "./carousel";
import { ScreenShotsContainer } from "./styles";

type SlideNode = {
  title: string;
  summary: string;
};
const SlideData = new Map<string, SlideNode>();

SlideData.set("1", {
  title: "Ready for Dragonflight!",
  summary:
    /* eslint-disable quotes */
    'Take MayronUI into Dragonflight, with many new improvements and features! Our <a target="_blank" href="https://mayronui.com/community">Discord community server</a> has never been so busy and ready to help, so make sure to join us and ask questions if you get stuck.',
});

SlideData.set("2", {
  title: "Up to 3 Rows of 20 Action Buttons + 2 Side Columns",
  summary:
    /* eslint-disable quotes */
    "Action bar rows can be toggled by pressing and holding the CTRL key. There are also 2 side action bar columns that can can be toggled by clicking on the arrow buttons.",
});

SlideData.set("3", {
  title: "Support for All WoW Clients",
  summary:
    "MayronUI supports all 3 versions of WoW, including Retail (e.g., Dragonflight), Classic Era and Wrath Classic, with new updates for each version released in-sync.",
});

SlideData.set("4", {
  title: "Easy to install",
  summary:
    "Just login to a character and hit the install button. It&#39;s that easy! There is also an alternative &#34;custom install&#34; menu for more advanced installation options.",
});

SlideData.set("5", {
  title: "Healing Layout",
  summary:
    "By default, the UI is preconfigured to include a DPS and a Healing layout. The Healing layout uses larger raid frames positioned near your target with a larger power bar. You can add as many layouts as you like and choose which addons should switch to which profiles when a given layout is activated.",
});

SlideData.set("6", {
  title: "Interactive AFK Screen",
  summary:
    "This specially customised AFK screen shows an animated model of your character, which can be picked up and thrown around on the screen! It also tracks your missed whispers and guild chat messages.",
});

SlideData.set("7", {
  title: "Modules, Profiles and Layouts",
  summary:
    "Customise your UI however you like and save those changes to different profiles to be used across all your characters. Use custom layouts to switch multiple profiles at once for each of your installed addons (not just MayronUI).",
});

SlideData.set("8", {
  title: "Minimalistic and Graphical Design",
  summary:
    "While going on solo adventures, your UI should not be a distraction; MayronUI has been designed with minimalism in mind to keep you focused on the world around you while still offering a graphically aesthetic look and feel.",
});

export interface ICarouselImagesNode {
  name: string;
  preview: {
    fluid: FluidObject;
  };
  thumbnail: {
    fixed: FixedObject;
  };
}

interface IScreenShotQuery {
  allFile: {
    edges: INode<ICarouselImagesNode>[];
  };
}

const ScreenShots: React.FC = () => {
  const data = useStaticQuery<IScreenShotQuery>(graphql`
    query ScreenShotQuery {
      allFile(
        filter: { relativePath: { regex: "/^carousel//i" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            thumbnail: childImageSharp {
              id
              fixed(height: 82, width: 194) {
                ...GatsbyImageSharpFixed
              }
            }
            preview: childImageSharp {
              id
              fluid(maxWidth: 864, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ScreenShotsContainer>
      <Section>
        <Carousel>
          {data.allFile.edges.map((edge, key) => {
            const node = edge.node;
            const slideData = SlideData.get(node.name) as SlideNode;

            return (
              <Carousel.Slide
                key={key}
                header={slideData.title}
                node={node}
                imageSrc={`images/carousel/${node.name}.jpg`}
                total={data.allFile.edges.length}
                index={key}
              >
                <p dangerouslySetInnerHTML={{ __html: slideData.summary }}></p>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Section>
    </ScreenShotsContainer>
  );
};

export default ScreenShots;

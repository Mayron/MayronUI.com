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
  title: "Ready for Shadowlands!",
  summary:
    "The UI is being actively developed and tested on the Shadowlands beta servers to ensure users are able to use MayronUI throughout their Shadowlands leveling experience on release date.",
});

SlideData.set("2", {
  title: "Easy to install",
  summary:
    "Just login to a character and hit the install button. It&#39;s that easy! There is also an alternative &#34;custom install&#34; menu for more advanced installation options.",
});

SlideData.set("3", {
  title: "Supports WoW Classic",
  summary:
    "MayronUI supports both retail and classic editions of World of Warcraft. Both can be updated from curseforge using an addon updater program such as the <a target='_blank' href='https://www.twitch.tv/downloads'>Twitch app</a>.",
});

SlideData.set("4", {
  title: "Healing Layout",
  summary:
    "By default, the UI is preconfigured to include a DPS and a Healing layout. The Healing layout uses larger raid frames positioned near your target with a larger power bar. You can add as many layouts as you like and choose which addons should switch to which profiles when a given layout is activated.",
});

SlideData.set("5", {
  title: "Interactive AFK Screen",
  summary:
    "This specially customised AFK screen shows an animated model of your character, which can be picked up and thrown around on the screen! It also tracks your missed whispers and guild chat messages.",
});

SlideData.set("6", {
  title: "Chat Frame and Action Bars",
  summary:
    "Enable different chat frames for each corner of the screen and easily toggle a between one or two rows of action bars.",
});

SlideData.set("7", {
  title: "Minimalistic and Graphical Design",
  summary:
    "While going on solo adventures, your UI should not be a distraction; MayronUI has been designed with minimalism in mind to keep you focused on the world around you while still offering a graphically aesthetic look and feel.",
});

SlideData.set("8", {
  title: "Modules, Profiles and Layouts",
  summary:
    "Customise your UI however you like and save those changes to different profiles to be used across all your characters. Use custom layouts to switch multiple profiles at once for each of your installed addons (not just MayronUI).",
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

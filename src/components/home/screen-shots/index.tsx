/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import { FixedObject, FluidObject } from "gatsby-image";
import React from "react";
import colors from "../../../styles/colors";
import { Section } from "../../../styles/css/containers";
import media from "../../../styles/media";
import Carousel from "./carousel";

type SlideNode = {
  title: string;
  summary: string;
};
const SlideData = new Map<string, SlideNode>();

SlideData.set("bottom-left-chat", {
  title: "Chat Frame and Action Bars",
  summary:
    "Enable different chat frames for each corner of the screen and easily toggle a between one or two rows of action bars.",
});

SlideData.set("installer", {
  title: "Easy to install",
  summary:
    "Just login to a character and hit the install button. It&#39;s that easy! There is also an alternative &#34;custom install&#34; menu for more advanced installation options.",
});

SlideData.set("config-menu", {
  title: "Modules, Profiles and Layouts",
  summary:
    "Customise your UI however you like and save those changes to different profiles to be used across all your characters. Use custom layouts to switch multiple profiles at once for each of your installed addons (not just MayronUI).",
});

SlideData.set("classic", {
  title: "Supports WoW Classic",
  summary:
    "MayronUI supports both retail and classic editions of World of Warcraft. Both can be updated from curseforge using an addon updater program such as the <a target='_blank' href='https://www.twitch.tv/downloads'>Twitch app</a>.",
});

SlideData.set("combat-solo", {
  title: "Minimalistic and Graphical Design",
  summary:
    "While going on solo adventures, your UI should not be a distraction; MayronUI has been designed with minimalism in mind to keep you focused on the world around you while still offering a graphically aesthetic look and feel.",
});

SlideData.set("afk", {
  title: "Interactive AFK Screen",
  summary:
    "This specially customised AFK screen shows an animated model of your character, which can be picked up and thrown around on the screen! It also tracks your missed whispers and guild chat messages.",
});

SlideData.set("raid", {
  title: "Healing Layout",
  summary:
    "By default, the UI is preconfigured to include a DPS and a Healing layout. The Healing layout uses larger raid frames positioned near your target with a larger power bar. You can add as many layouts as you like and choose which addons should switch to which profiles when a given layout is activated.",
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
      allFile(filter: { relativePath: { regex: "/^carousel//i" } }) {
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
    <div
      css={css`
        position: relative;
        overflow: hidden;

        ${media.down("sm")`
          display: none;
        `};

        &::before {
          content: " ";
          position: absolute;
          display: block;
          width: 3000px;
          height: 325px;
          background-color: ${colors.blue.dark};
          transform: rotate(-5deg);
          left: -100px;
          top: -130px;
        }

        section {
          padding-bottom: 20px;
        }
      `}
    >
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
              >
                <p dangerouslySetInnerHTML={{ __html: slideData.summary }}></p>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Section>
    </div>
  );
};

export default ScreenShots;

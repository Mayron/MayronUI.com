/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import { FixedObject, FluidObject } from "gatsby-image";
import React from "react";
import colors from "../../../styles/colors";
import { Section } from "../../../styles/css/containers";
import Carousel from "./carousel";

type SlideNode = {
  title: string;
  summary: string;
};
const SlideData = new Map<string, SlideNode>();

SlideData.set("double-bars", {
  title: "Bottom Left chat and expandable action bars",
  summary: "Something here...",
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

SlideData.set("ideal-solo", {
  title: "Solo?",
  summary: "TODO",
});

SlideData.set("combat-solo", {
  title: "Visually clean",
  summary:
    "While going on solo adventures, your UI should not be a distraction; MayronUI has been designed with minimalism in mind to keep you focused on the world around you while still offering a graphically aesthetic look and feel.",
});

SlideData.set("timerbars", {
  title: "Timerbars",
  summary: "TODO",
});

SlideData.set("raid", {
  title: "Maximize Your Raiding Experience",
  summary: "TODO",
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

        &::before {
          content: " ";
          position: absolute;
          display: block;
          width: 3000px;
          height: 355px;
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
                {slideData.summary}
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Section>
    </div>
  );
};

export default ScreenShots;

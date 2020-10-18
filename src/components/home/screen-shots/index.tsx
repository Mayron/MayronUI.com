/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import colors from "../../../styles/colors";
import { Section } from "../../../styles/css/containers";
import Carousel from "./carousel";

const ScreenShots: React.FC = () => {
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
          <Carousel.Slide
            header="Many Plugins to Choose From"
            imageSrc="/images/carousel/combat-solo.jpg"
            imageAlt="In combat preview"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis
            dolorem optio voluptas distinctio, sed, aliquam praesentium est soluta maxime
            laborum accusantium hic! Laborum dolorum magnam vitae, dolores saepe delectus?
          </Carousel.Slide>
          <Carousel.Slide
            header="Modular Plugin System"
            imageSrc="/images/carousel/config-menu.jpg"
            imageAlt="Configuration"
          >
            Lorem ipsum consequuntur saepe cum. Officia quia illo vitae voluptate
            distinctio cum mollitia doloribus, nulla obcaecati dolor nesciunt nobis ullam
            nam laudantium hic cumque. Blanditiis?
          </Carousel.Slide>
          <Carousel.Slide
            header="Easy to Install"
            imageSrc="/images/carousel/installer.jpg"
            imageAlt="Installation"
          >
            Lorem ipsum dolor sit amet consectetur molestiae exercitationem esse. Cumque
            similique officiis delectus.
          </Carousel.Slide>
          <Carousel.Slide
            header="Visually Clean"
            imageSrc="/images/carousel/ideal-solo.jpg"
            imageAlt="Out of combat solo preview"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, reiciendis.
            Sequi esse architecto reprehenderit quasi voluptates consectetur, voluptatum
            obcaecati, modi aliquid rem vero aliquam quas deleniti quaerat ea voluptate
            sit?
          </Carousel.Slide>
          <Carousel.Slide
            header="Maximize Your Raiding Experience"
            imageSrc="/images/carousel/raid.jpg"
            imageAlt="PVE or PVP raid preview"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde autem
            maxime corporis nulla, obcaecati impedit earum iusto blanditiis quis ipsam,
            velit debitis numquam praesentium iste tempore sed!
          </Carousel.Slide>
          <Carousel.Slide
            header="Timer Bars"
            imageSrc="/images/carousel/timerbars.jpg"
            imageAlt="timer bars"
          >
            Lorem ipsum Nisi rem a illum nostrum? Officia tempore similique autem maiores.
            Magni impedit cupiditate nisi perspiciatis vel modi sequi vero quae fugiat
            illo.
          </Carousel.Slide>
        </Carousel>
      </Section>
    </div>
  );
};

export default ScreenShots;

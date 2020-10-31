/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Section, { BlueContainer } from "../../styles/css/containers";
import Img from "gatsby-image";
import vars from "../../styles/variables";
import media from "../../styles/media";

interface ITimerBarsProps {
  header: string;
}

const TimerBars: React.FC<ITimerBarsProps> = ({ header }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "timerbars.jpg" }) {
        childImageSharp {
          fixed(width: 304, height: 185, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <BlueContainer
      css={css`
        position: relative;
        z-index: 10;
      `}
    >
      <Fade triggerOnce>
        <Section
          verticalSpacing="large"
          width="slim"
          css={css`
            display: flex;
            padding-bottom: 0;
            padding-top: 60px;

            & > * {
              flex: 1;
            }

            h2 {
              margin-bottom: 30px;
            }

            ul {
              list-style-type: disc;
              padding-inline-start: 50px;
            }

            li {
              margin-bottom: 15px;

              &:last-of-type {
                margin-bottom: none;
              }
            }

            ${media.down("xs")`
              flex-direction: column;
              padding-top: 40px;

              ul {
                padding-inline-start: 30px;
                padding-bottom: 20px;
              }
            `};
          `}
        >
          <header>
            <h2>{header}</h2>
            <ul>
              <li>
                Fully customisable combat timer bars track your buffs and debuffs applied
                to you or any unit of your choosing.
              </li>
              <li>
                Create as many timer bar fields as you like with various filters and
                appearances.
              </li>
              <li>
                Need to track only a few specific auras by name for a boss fight? No
                problem!
              </li>
            </ul>
          </header>
          <div
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="Bottom Left Chat Frame"
              css={css`
                border-radius: ${vars.borderRadius};
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
              `}
            />
          </div>
        </Section>
      </Fade>
    </BlueContainer>
  );
};

export default TimerBars;

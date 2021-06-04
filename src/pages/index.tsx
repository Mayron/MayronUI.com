import React from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";
import Banner from "../components/home/banner";
import ConfigMenu from "../components/home/config-menu";
import ScreenShots from "../components/home/screen-shots";
import Introduction from "../components/home/introduction";
import ReadyToGetStarted from "../components/home/ready-to-get-started";
import BottomLeftChatFrame from "../components/home/bottom-left-chat-frame";
import TimerBars from "../components/home/timer-bars";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage: React.FC<RouteComponentProps> = () => {
  // const { file } = useStaticQuery(
  //   graphql`
  //     {
  //       file(relativePath: { eq: "mui-bottomui.webm" }) {
  //         childVideoFfmpeg {
  //           webm: transcode(
  //             outputOptions: ["-crf 20", "-b:v 0"]
  //             maxWidth: 760
  //             maxHeight: 260
  //             fileExtension: "webm"
  //             codec: "libvpx-vp9"
  //           ) {
  //             width
  //             src
  //             presentationMaxWidth
  //             presentationMaxHeight
  //             originalName
  //             height
  //             fileExtension
  //             aspectRatio
  //           }
  //           mp4: transcode(
  //             maxWidth: 760
  //             maxHeight: 260
  //             fileExtension: "mp4"
  //             codec: "libx264"
  //           ) {
  //             width
  //             src
  //             presentationMaxWidth
  //             presentationMaxHeight
  //             originalName
  //             height
  //             fileExtension
  //             aspectRatio
  //           }
  //         }
  //       }
  //     }
  //   `,
  // );

  return (
    <Layout page="Home">
      <Banner />
      <Introduction />
      <ScreenShots />
      <TimerBars header="Track Important Auras" />
      <BottomLeftChatFrame header="Customisable Chat Artwork" />
      <ConfigMenu header="Advanced Configuration Menu">
        <li>
          MayronUI comes bundled with many modules, each with their own configuration menu
          containing numerous settings to tweak their appearance and behaviour to fit your
          play style.
        </li>

        <li>
          Settings are saved to a sharable profile across all your characters, or you can
          choose to create multiple profiles for different characters and scenarios.
        </li>
        <li>
          MayronUI achieves low memory usage by only loading enabled modules when
          required, and reusing recycled resources in the background to avoid memory
          leaks.
        </li>
      </ConfigMenu>

      <ReadyToGetStarted />
    </Layout>
  );
};

export default IndexPage;

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

const IndexPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Home" gaCategory="Home">
      <Banner />
      <Introduction />
      <TimerBars header="Track Important Auras" />
      <BottomLeftChatFrame header="Customisable Chat Artwork" />
      <ConfigMenu header="Advanced Configuration Menu">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod deleniti quae
        provident quasi optio nemo qui assumenda voluptatibus quos illum, officiis minima
        consectetur molestiae ipsa maiores explicabo similique cumque sit?
      </ConfigMenu>
      <ScreenShots />
      <ReadyToGetStarted />
    </Layout>
  );
};

export default IndexPage;

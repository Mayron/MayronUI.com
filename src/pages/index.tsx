import React from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";
import Banner from "../components/home/banner";
import ConfigMenu from "../components/home/config-menu";
import ScreenShots from "../components/home/screen-shots";
import Introduction from "../components/home/introduction";
import ReadyToGetStarted from "../components/home/ready-to-get-started";

const IndexPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Home" gaCategory="Home">
      <Banner />
      <Introduction />
      <ConfigMenu header="Fully Customisable">
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

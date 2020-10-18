import React from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";
import Banner from "../components/community/banner";

const CommunityPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Community" gaCategory="Community">
      <Banner />
    </Layout>
  );
};

export default CommunityPage;

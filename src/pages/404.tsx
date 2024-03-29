import React from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";

const NotFoundPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Not Found" page="NotFound">
    <h1>Page Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

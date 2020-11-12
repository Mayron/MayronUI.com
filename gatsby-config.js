/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

var plugins = [
  `gatsby-plugin-emotion`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-eslint`,
    options: {
      test: /\.ts$|\.tsx$|\.js$|\.jsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: ["develop"],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  },
  {
    resolve: "gatsby-plugin-asset-path",
    options: {
      fileTypes: ["js", "map", "css"],
      removeMapFiles: true,
    },
  },
  `gatsby-plugin-remove-serviceworker`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: "gatsby-plugin-svgr",
    options: {
      prettier: true,
      svgo: true,
      titleProp: true,
      svgoConfig: {
        plugins: [
          // View https://github.com/svg/svgo for all options!
          { removeAttrs: { attrs: ["data-name"] } },
        ],
      },
    },
  },
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      host: "https://mayronui.com",
      sitemap: "https://mayronui.com/sitemap.xml",
      resolveEnv: () => process.env.NODE_ENV,
      env: {
        development: {
          policy: [{ userAgent: "*", allow: ["/"] }],
        },
        production: {
          policy: [{ userAgent: "*", allow: "/" }],
        },
      },
      output: "/robots.txt",
    },
  },
  // `gatsby-plugin-webpack-bundle-analyzer`,
  `gatsby-plugin-remove-trailing-slashes`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-highlight-code`,
          options: {
            terminal: `carbon`,
            theme: `vscode`,
            lineNumbers: true
          }
        },
      ],
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ul664i42lbhn`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST,
    },
  },
];

module.exports = {
  siteMetadata: {
    title: `MayronUI`,
    siteUrl: "https://mayronui.com",
    description: `MayronUI is a popular World of Warcraft UI replacement package backed by a growing and active community.`,
  },
  assetPrefix: `/assets/${Date.now().toString()}`,
  plugins: plugins,
};

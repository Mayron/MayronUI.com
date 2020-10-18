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
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA_TRACKING_ID,
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: true,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
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
          policy: [{ userAgent: "*", disallow: ["/"] }],
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
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      google: {
        families: ["Nunito Sans:600;700;800", "Roboto:400;500;700"],
      },
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ul664i42lbhn`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: `preview.contentful.com`,
    },
  },
];

if (process.env.NODE_ENV === "production") {
  plugins.push(`gatsby-plugin-preact`);
}

module.exports = {
  siteMetadata: {
    title: `MayronUI`,
    siteUrl: "https://mayronui.com",
    description: `MayronUI is a popular World of Warcraft UI replacement package backed with a growing and active community.`,
  },
  assetPrefix: `/assets/${Date.now().toString()}`,
  plugins: plugins,
};

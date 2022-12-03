/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const { default: slugify } = require(`slugify`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({ fromPath: '/download', toPath: '/p/mayronui', isPermanent: true });
  createRedirect({ fromPath: '/install', toPath: '/p/mayronui', isPermanent: true });
  createRedirect({ fromPath: '/discord', toPath: '/community', isPermanent: true });

  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            body {
              childMarkdownRemark {
                html
                timeToRead
                excerpt
              }
            }
            title
            featured
            createdAt
          }
        }
      }
    }
  `);

  data.allContentfulBlogPost.edges.forEach(({ node }) => {
    const { title, featured, createdAt } = node;
    const { html, timeToRead, excerpt } = node.body.childMarkdownRemark;

    createPage({
      path: `/blog/post/${slugify(title, { lower: true, remove: /[*+~.()'"!?:@]/g })}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        html,
        timeToRead,
        excerpt,
        title,
        featured,
        createdAt,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
} 
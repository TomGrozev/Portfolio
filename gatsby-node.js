/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  let parentNode = getNode(node.parent);
  if (node.internal.type === "MarkdownRemark") {
    if (parentNode.sourceInstanceName === "blogs") {
      let slug = createFilePath({ node, getNode });
      slug = slug.replace(/\//g, "");
      actions.createNodeField({ node, name: "slug", value: slug });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await getBlogData(graphql);

  data.blogPosts.edges.forEach(({ node }) => {
    const { slug } = node.fields;
    actions.createPage({
      path: `/blog/${slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: { slug },
    });
  });
};

async function getBlogData(graphql) {
  return await graphql(`
    {
      blogPosts: allMarkdownRemark(filter: {frontmatter: {published: {ne: false}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
}

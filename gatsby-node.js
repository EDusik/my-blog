const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.sourceNodes = ({ actions, schema }) => {
	const { createTypes } = actions;

	createTypes(`
    type MarkdownRemarkFrontmatter {
      image: String
    }
    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `);
};

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === "MarkdownRemark") {
		const slug = createFilePath({
			node,
			getNode,
			basePath: "pages"
		});

		createNodeField({
			node,
			name: "slug",
			value: `/${slug.slice(12)}`
		});
	}
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              background
              category
              date(formatString: "MM/DD/YYYY")
              description
              title
              image
            }
            timeToRead
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
		const posts = result.data.allMarkdownRemark.edges;

		posts.forEach(({ node, next, previous }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/blog-post.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.fields.slug,
					previousPost: next,
					nextPost: previous
				}
			});
		});

		const postsPerPage = 6;
		const numPages = Math.ceil(posts.length / postsPerPage);

		Array.from({ length: numPages }).forEach((_, index) => {
			createPage({
				path: index === 0 ? `/` : `/page/${index + 1}`,
				component: path.resolve(`./src/templates/blog-list.js`),
				context: {
					limit: postsPerPage,
					skip: index * postsPerPage,
					numPages,
					currentPage: index + 1
				}
			});
		});
	});
};

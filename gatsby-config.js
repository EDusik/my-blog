require("dotenv").config();

const queries = require("./src/utils/algolia_queries");

module.exports = {
	siteMetadata: {
		title: `Eduardo Dusik`,
		description: `My personal blog about web development and other cool stuff.`,
		position: `Front end Developer`,
		author: `@eduardodusik`,
		siteUrl: `https://eduardodusik.dev`,
		about: `I'm a front-end web developer passionate about it. I enjoy listening to power metal and i'm unable to stay without coffee.`,
		about_it: `I'm a spontaneous and curious person by nature, who likes chess and nerd stuff, from The Lord of the Rings to Warhammer 40k.`
	},
	plugins: [
		`gatsby-plugin-transition-link`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		// needs to be the first to work with gatsby-remark-images
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `uploads`,
				path: `${__dirname}/static/assets/img`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/posts`
			}
		},
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `https-www-eduardodusik-dev`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-relative-images",
						options: {
							name: "uploads"
						}
					},
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 960,
							linkImagesToOriginal: false
						}
					},
					`gatsby-remark-lazy-load`,
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							throwInlineCodeLanguageWarning: false
						}
					}
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-algolia-search`,
			options: {
				appId: process.env.GATSBY_ALGOLIA_APP_ID,
				apiKey: process.env.ALGOLIA_ADMIN_KEY,
				indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
				queries,
				chunkSize: 10000, // default: 1000
				enablePartialUpdates: true
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Eduardo Dusik`,
				short_name: `Eduardo Dusik`,
				start_url: `/`,
				background_color: `#282a36`,
				theme_color: `#282a36`,
				getAnimationColor: `#44475a`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-netlify-cms`
	]
};

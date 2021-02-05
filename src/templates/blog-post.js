import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import RecommendedPosts from "../components/RecommendedPosts/RecommendedPosts";
import Comments from "../components/Comments/Comments";
import SEO from "../components/seo";

import * as Styled from "../components/Post/styled";

const BlogPost = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const next = pageContext.nextPost;
	const previous = pageContext.previousPost;

	return (
		<Layout>
			<SEO title={post.frontmatter.title} />
			<Styled.PostHeader>
				<Styled.PostDate>
					{post.frontmatter.date} • {post.timeToRead} minutes of reading
				</Styled.PostDate>
				<Styled.PostTitle>{post.frontmatter.title}</Styled.PostTitle>
				<Styled.PostDescription>{post.frontmatter.description}</Styled.PostDescription>
			</Styled.PostHeader>
			<Styled.MainContent>
				<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
			</Styled.MainContent>

			<RecommendedPosts next={next} previous={previous} />
			<Comments receivedUrl={post.fields.slug} title={post.frontmatter.title} />
		</Layout>
	);
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "MM/DD/YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;

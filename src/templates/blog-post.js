import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import * as Styled from "../components/Post/styled";

const BlogPost = ({ data }) => {
	const post = data.markdownRemark;

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
		</Layout>
	);
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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

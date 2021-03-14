import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import RecommendedPosts from "../components/RecommendedPosts/RecommendedPosts";
import Comments from "../components/Comments/Comments";
import SEO from "../components/seo";

import * as Styled from "../components/Post/styled";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const BlogPost = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const next = pageContext.nextPost;
	const previous = pageContext.previousPost;

	const [barWidth, setBarWidth] = useState(0);

	const handleScroll = () => {
		const postWrap = document.querySelector(".main-content");
		const textHeight = postWrap.offsetHeight;
		const pagePositionY = window.pageYOffset;
		setBarWidth((pagePositionY * 100) / textHeight);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<Layout>
			<SEO title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.image} />
			<Styled.PostHeader>
				<ProgressBar barWidth={barWidth} />
				<Styled.PostDate>
					{post.frontmatter.date} • {post.timeToRead} minutes of reading
				</Styled.PostDate>
				<Styled.PostTitle>{post.frontmatter.title}</Styled.PostTitle>
				<Styled.PostDescription>{post.frontmatter.description}</Styled.PostDescription>
			</Styled.PostHeader>
			<Styled.MainContent className="main-content">
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
        image
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;

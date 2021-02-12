import React from "react";
import propTypes from "prop-types";

import getAnimationColor from "../../utils/getAnimationColor";

import * as Styled from "./styled";

const RecommendedPosts = ({ next, previous }) => (
	<Styled.RecommendedWrapper>
		{previous && (
			<Styled.RecommendedLink
				to={previous.fields.slug}
				direction="left"
				duration={0.6}
				bg={getAnimationColor()}
				cover
				className="previous"
			>
				{previous.frontmatter.title}
			</Styled.RecommendedLink>
		)}
		{next && (
			<Styled.RecommendedLink
				to={next.fields.slug}
				direction="right"
				duration={0.6}
				bg={getAnimationColor()}
				cover
				className="next"
			>
				{next.frontmatter.title}
			</Styled.RecommendedLink>
		)}
	</Styled.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
	next: propTypes.shape({
		frontmatter: propTypes.shape({
			title: propTypes.string.isRequired
		}),
		fields: propTypes.shape({
			slug: propTypes.string.isRequired
		})
	}),
	previous: propTypes.shape({
		frontmatter: propTypes.shape({
			title: propTypes.string.isRequired
		}),
		fields: propTypes.shape({
			slug: propTypes.string.isRequired
		})
	})
};

export default RecommendedPosts;

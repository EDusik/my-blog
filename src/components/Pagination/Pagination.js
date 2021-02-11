import React from "react";
import propTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import getAnimationColor from "../../utils/theme_color";

import * as Styled from "./styled";

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
	<Styled.PaginationWrapper>
		{!isFirst && (
			<AniLink to={prevPage} direction="left" duration={0.6} bg={getAnimationColor()} cover>
				← previous page
			</AniLink>
		)}
		<p>
			{currentPage} of {numPages}
		</p>
		{!isLast && (
			<AniLink to={nextPage} direction="right" duration={0.6} bg={getAnimationColor()} cover>
				next page→
			</AniLink>
		)}
	</Styled.PaginationWrapper>
);

Pagination.propTypes = {
	isFirst: propTypes.bool.isRequired,
	isLast: propTypes.bool.isRequired,
	currentPage: propTypes.number.isRequired,
	numPages: propTypes.number.isRequired,
	prevPage: propTypes.string,
	nextPage: propTypes.string
};

export default Pagination;

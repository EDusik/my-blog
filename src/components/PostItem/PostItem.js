import React from "react";
import PropTypes from "prop-types";
import getAnimationColor from "../../utils/getAnimationColor";

import * as Styled from "./styled";

const PostItem = ({ slug, background, category, date, timeToRead, title, description }) => (
	<Styled.PostItemLink
		to={slug}
		duration={0.6}
		direction="right"
		bg={getAnimationColor()}
		cover
		activeClassName="active"
	>
		<Styled.PostItemWrapper>
			<Styled.PostItemTag background={background}>{category}</Styled.PostItemTag>
			<Styled.PostItemInfo>
				<Styled.PostItemDate>
					{date} • {timeToRead} minutes of reading
				</Styled.PostItemDate>
				<Styled.PostItemTitle>{title}</Styled.PostItemTitle>
				<Styled.PostItemDescription>{description}</Styled.PostItemDescription>
			</Styled.PostItemInfo>
		</Styled.PostItemWrapper>
	</Styled.PostItemLink>
);

PostItem.propTypes = {
	slug: PropTypes.string.isRequired,
	background: PropTypes.string,
	category: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	timeToRead: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default PostItem;

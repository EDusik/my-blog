import React from "react";
import PropTypes from "prop-types";
import { Disqus } from "gatsby-plugin-disqus";

import * as Styled from "./styled";

const Comments = ({ receivedUrl, title }) => {
	const completeURL = `https://www.eduardodusik.dev${receivedUrl}`;

	return (
		<Styled.CommentsWrapper>
			<Styled.CommentsTitle>Comments</Styled.CommentsTitle>
			<Disqus url={completeURL} identifier={completeURL} title={title} />
		</Styled.CommentsWrapper>
	);
};

Comments.propTypes = {
	receivedUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default Comments;

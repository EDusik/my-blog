import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import * as Styled from "../components/PageError/styled";
import * as PaginationStyled from "../components/RecommendedPosts/styled";

import getAnimationColor from "../utils/getAnimationColor";

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Styled.PageHeader>404: Not Found</Styled.PageHeader>
		<Styled.PageDescription>The page you are looking for does not exist!</Styled.PageDescription>
		<PaginationStyled.HomeLink to="/" direction="left" duration={0.6} bg={getAnimationColor()} cover>
			back to home
		</PaginationStyled.HomeLink>
	</Layout>
);

export default NotFoundPage;

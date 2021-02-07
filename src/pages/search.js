import React from "react";

import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";

import SEO from "../components/seo";

const SearchPage = () => (
	<Layout>
		<SEO title="Search" />
		<Search />
	</Layout>
);

export default SearchPage;

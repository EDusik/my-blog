import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1>404: Not Found</h1>
		<p>Ops...Nothing here</p>
	</Layout>
);

export default NotFoundPage;

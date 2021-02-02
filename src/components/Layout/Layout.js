import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";

import GlobalStyles from "../../styles/Global";
import * as Styled from "../../styles/styled";

const Layout = ({ children }) => {
	return (
		<Styled.LayoutWrapper>
			<GlobalStyles />
			<aside>
				<Sidebar />
			</aside>
			<Styled.LayoutMain>{children}</Styled.LayoutMain>
		</Styled.LayoutWrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

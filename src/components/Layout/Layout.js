import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import MenuBar from "../MenuBar/MenuBar";

import GlobalStyles from "../../styles/Global";
import * as Styled from "../../components/Layout/styled";

const Layout = ({ children }) => {
	return (
		<Styled.LayoutWrapper>
			<GlobalStyles />
			<aside>
				<Sidebar />
			</aside>
			<Styled.LayoutMain>{children}</Styled.LayoutMain>
			<MenuBar />
		</Styled.LayoutWrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

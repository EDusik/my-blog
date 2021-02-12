import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import MenuBar from "../MenuBar/MenuBar";

import GlobalStyles from "../../styles/Global";
import * as Styled from "../../components/Layout/styled";

import { TransitionPortal } from "gatsby-plugin-transition-link";

const Layout = ({ children }) => {
	return (
		<Styled.LayoutWrapper>
			<GlobalStyles />
			<TransitionPortal level="top">
				<Sidebar />
			</TransitionPortal>
			<Styled.LayoutMain>{children}</Styled.LayoutMain>
			<TransitionPortal level="top">
				<MenuBar />
			</TransitionPortal>
		</Styled.LayoutWrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

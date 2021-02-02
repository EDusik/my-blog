import React from "react";
import PropTypes from "prop-types";
import Profile from "../Profile/Profile";

import GlobalStyles from "../../styles/Global";
import * as Styled from "../../styles/styled";

const Layout = ({ children }) => {
	return (
		<Styled.LayoutWrapper>
			<GlobalStyles />
			<aside>
				<Profile />
			</aside>
			<Styled.LayoutMain>{children}</Styled.LayoutMain>
		</Styled.LayoutWrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

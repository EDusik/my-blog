import React from "react";
import PropTypes from "prop-types";
import Profile from "../components/Profile/Profile";

const Layout = ({ children }) => {
	return (
		<>
			<main>
				<aside>
					<Profile />
				</aside>
				{children}
			</main>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

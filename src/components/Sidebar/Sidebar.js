import React from "react";

import Profile from "../Profile/Profile";
import SocialLinks from "../SocialLinks/SocialLinks";
import MenuLinks from "../MenuLinks/MenuLinks";

import * as Styled from "./styled";

const Sidebar = () => (
	<Styled.SidebarWrapper>
		<Profile />
		<SocialLinks />
		<MenuLinks />
	</Styled.SidebarWrapper>
);

export default Sidebar;

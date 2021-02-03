import React from "react";

import { Home } from "@styled-icons/boxicons-solid/Home";
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2";
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt";
import { Lightbulb as Light } from "@styled-icons/bootstrap/Lightbulb";
import { Grid } from "@styled-icons/boxicons-solid/Grid";

import * as Styled from "./styled";

const MenuBar = () => (
	<Styled.MenuBarWrapper>
		<Styled.MenuBarGroup>
			<Styled.MenuBarLink to="/" title="Home">
				<Styled.MenuBarItem>
					<Home />
				</Styled.MenuBarItem>
			</Styled.MenuBarLink>
			<Styled.MenuBarLink to="/search/" title="Search">
				<Styled.MenuBarItem>
					<Search />
				</Styled.MenuBarItem>
			</Styled.MenuBarLink>
		</Styled.MenuBarGroup>
		<Styled.MenuBarGroup>
			<Styled.MenuBarItem title="Change Theme">
				<Light />
			</Styled.MenuBarItem>
			<Styled.MenuBarItem title="Change View">
				<Grid />
			</Styled.MenuBarItem>
			<Styled.MenuBarItem title="Go to the Top">
				<Arrow />
			</Styled.MenuBarItem>
		</Styled.MenuBarGroup>
	</Styled.MenuBarWrapper>
);

export default MenuBar;
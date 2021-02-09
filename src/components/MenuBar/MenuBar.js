import React, { useState, useEffect } from "react";

import { Home } from "@styled-icons/boxicons-solid/Home";
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2";
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt";
import { Lightbulb as Light } from "@styled-icons/bootstrap/Lightbulb";
import { Grid } from "@styled-icons/boxicons-solid/Grid";
import { ThList as List } from "@styled-icons/typicons/ThList";

import * as Styled from "./styled";

const MenuBar = () => {
	const [theme, setTheme] = useState(null);
	const [display, setDisplay] = useState(null);

	const isDarkMode = theme === "dark";
	const isListMode = display === "list";

	useEffect(() => {
		setTheme(window.__theme);
		setDisplay(window.__display);
		window.__onThemeChange = () => setTheme(window.__theme);
		window.__onDisplayChange = () => setDisplay(window.__display);
	}, []);

	return (
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
				<Styled.MenuBarItem
					title="Change Theme"
					onClick={() => {
						window.__setPreferredTheme(isDarkMode ? "light" : "dark");
					}}
					className={theme}
				>
					<Light />
				</Styled.MenuBarItem>
				<Styled.MenuBarItem
					title="Change View"
					title="Mudar visualização"
					onClick={() => {
						window.__setPreferredDisplay(isListMode ? "grid" : "list");
					}}
				>
					{isListMode ? <Grid /> : <List />}
				</Styled.MenuBarItem>
				<Styled.MenuBarItem title="Go to the Top">
					<Arrow />
				</Styled.MenuBarItem>
			</Styled.MenuBarGroup>
		</Styled.MenuBarWrapper>
	);
};

export default MenuBar;

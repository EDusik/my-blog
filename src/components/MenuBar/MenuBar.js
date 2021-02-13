import React, { useState, useEffect } from "react";

import { Home } from "@styled-icons/boxicons-solid/Home";
import { Person } from "@styled-icons/material/Person";
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2";
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt";
import { Lightbulb as Light } from "@styled-icons/bootstrap/Lightbulb";

import getAnimationColor from "../../utils/getAnimationColor";
import scrollToTop from "../../utils/scrollToTop";

import * as Styled from "./styled";

const MenuBar = () => {
	const [theme, setTheme] = useState(null);

	const isDarkMode = theme === "dark";

	useEffect(() => {
		setTheme(window.__theme);
		window.__onThemeChange = () => setTheme(window.__theme);
	}, []);

	return (
		<Styled.MenuBarWrapper>
			<Styled.MenuBarGroup>
				<Styled.MenuBarLink
					className="invisible"
					to="/"
					title="Home"
					direction="right"
					bg={getAnimationColor()}
					duration={0.6}
					cover
				>
					<Styled.MenuBarItem>
						<Home />
					</Styled.MenuBarItem>
				</Styled.MenuBarLink>

				<Styled.MenuBarLink
					className="invisible"
					to="/about/"
					title="About"
					direction="right"
					bg={getAnimationColor()}
					duration={0.6}
					cover
				>
					<Styled.MenuBarItem>
						<Person />
					</Styled.MenuBarItem>
				</Styled.MenuBarLink>
				<Styled.MenuBarLink
					to="/search/"
					title="Search"
					direction="right"
					bg={getAnimationColor()}
					duration={0.6}
					cover
				>
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
				<Styled.MenuBarItem title="Go to the Top" onClick={scrollToTop}>
					<Arrow />
				</Styled.MenuBarItem>
			</Styled.MenuBarGroup>
		</Styled.MenuBarWrapper>
	);
};

export default MenuBar;

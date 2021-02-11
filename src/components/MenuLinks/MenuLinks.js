import React from "react";

import links from "./content";
import getAnimationColor from "../../utils/theme_color";

import * as Styled from "./styled";

const MenuLinks = () => (
	<Styled.MenuLinksWrapper>
		<Styled.MenuLinksList>
			{links.map((link, i) => (
				<Styled.MenuLinksItem key={i}>
					<Styled.MenuLinksLink
						to={link.url}
						direction="left"
						duration={0.6}
						bg={getAnimationColor()}
						activeClassName="active"
						cover
					>
						{link.label}
					</Styled.MenuLinksLink>
				</Styled.MenuLinksItem>
			))}
		</Styled.MenuLinksList>
	</Styled.MenuLinksWrapper>
);

export default MenuLinks;

import React from "react";

import links from "./content";

import * as Styled from "./styled";

const MenuLinks = () => (
	<Styled.MenuLinksWrapper>
		<Styled.MenuLinksList>
			{links.map((link, i) => (
				<Styled.MenuLinksItem key={i}>
					<Styled.MenuLinksLink to={link.url} activeClassName="active">
						{link.label}
					</Styled.MenuLinksLink>
				</Styled.MenuLinksItem>
			))}
		</Styled.MenuLinksList>
	</Styled.MenuLinksWrapper>
);

export default MenuLinks;

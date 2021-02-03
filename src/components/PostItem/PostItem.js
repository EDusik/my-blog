import React from "react";

import * as Styled from "./styled";

const PostItem = () => (
	<Styled.PostItemLink to="/slug/">
		<Styled.PostItemWrapper>
			<Styled.PostItemTag background="#47650b">Misc</Styled.PostItemTag>
			<Styled.PostItemInfo>
				<Styled.PostItemDate>30 de Julho de 2019 • 4 min de leitura</Styled.PostItemDate>
				<Styled.PostItemTitle>Diga não ao Medium: tenha sua própria plataforma</Styled.PostItemTitle>
				<Styled.PostItemDescription>
					Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium.
				</Styled.PostItemDescription>
			</Styled.PostItemInfo>
		</Styled.PostItemWrapper>
	</Styled.PostItemLink>
);

export default PostItem;

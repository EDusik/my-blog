import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as Styled from "./styled";

const Avatar = () => {
	const { avatarImage } = useStaticQuery(
		graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fixed(width: 120, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
	);

	return <Styled.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />;
};

export default Avatar;

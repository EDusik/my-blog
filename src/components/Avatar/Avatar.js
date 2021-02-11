import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { AvatarWrapper } from "./styled";

const Avatar = () => {
	const { avatarImage } = useStaticQuery(
		graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fluid(maxWidth: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
	);

	return <AvatarWrapper fluid={avatarImage.childImageSharp.fluid} alt="Eduardo Dusik" />;
};

export default Avatar;

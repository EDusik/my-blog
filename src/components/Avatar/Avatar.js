import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as Styled from "./styled";

const Avatar = () => {
	const { avatarImage } = useStaticQuery(
		graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            fluid(maxWidth: 120) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
	);

	return <Styled.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;

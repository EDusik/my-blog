import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Avatar from "../Avatar/Avatar";

import getAnimationColor from "../../utils/getAnimationColor";

import * as Styled from "./styled";

const Profile = () => {
	const {
		site: {
			siteMetadata: { title, description, position }
		}
	} = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `);

	return (
		<Styled.ProfileWrapper>
			<Styled.ProfileLink to="/" duration={0.6} direction="left" bg={getAnimationColor()} cover>
				<Avatar />
				<Styled.ProfileAuthor>
					{title}
					<Styled.ProfilePosition>{position}</Styled.ProfilePosition>
				</Styled.ProfileAuthor>
			</Styled.ProfileLink>
			<Styled.ProfileDescription>{description}</Styled.ProfileDescription>
		</Styled.ProfileWrapper>
	);
};

export default Profile;

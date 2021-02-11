import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Avatar from "../Avatar/Avatar";

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
			<Styled.ProfileLink cover duration={0.6} to="/">
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

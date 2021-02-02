import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Profile = () => {
	const {
		site: {
			siteMetadata: { title, description, position, author }
		}
	} = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
          author
        }    
      }
    }
  `);

	return (
		<div className="Profile-wrapper">
			<h1>{title}</h1>
			<h2>{position}</h2>
			<h2>{author}</h2>
			<p>{description}</p>
		</div>
	);
};

export default Profile;

import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Profile = () => (
	<>
		<StaticQuery
			query={graphql`
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
    `}
			render={({
				site: {
					siteMetadata: { title, description, position, author }
				}
			}) => (
				<div className="Profile-wrapper">
					<h1>{title}</h1>
					<h2>{position}</h2>
					<h2>{author}</h2>
					<p>{description}</p>
				</div>
			)}
		/>
	</>
);

export default Profile;

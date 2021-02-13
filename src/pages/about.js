import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import { useStaticQuery, graphql } from "gatsby";
import SocialLinks from "../components/SocialLinks/SocialLinks";

import * as Styled from "../components/About/styled";

const AboutPage = () => {
	const { site } = useStaticQuery(
		graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            about
            about_it
          }
        }
      }
    `
	);

	const title = site.siteMetadata?.title;
	const about = site.siteMetadata?.about;
	const about_it = site.siteMetadata?.about_it;

	return (
		<Layout>
			<SEO title="About" />
			<Styled.AboutWrapper>
				<div>
					{" "}
					<Styled.AboutTitle>About</Styled.AboutTitle>
					<Styled.AboutText>
						{" "}
						<blockquote>
							Hello, my name is <b>{title}</b> and {about}
						</blockquote>
					</Styled.AboutText>
					<Styled.AboutText>{about_it}</Styled.AboutText>
					<Styled.AboutTitle>Contact</Styled.AboutTitle>
					<Styled.SocialWrapper>
						<SocialLinks about={true} />
					</Styled.SocialWrapper>{" "}
				</div>
			</Styled.AboutWrapper>
		</Layout>
	);
};

export default AboutPage;

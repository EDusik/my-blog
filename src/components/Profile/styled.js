import styled from "styled-components";
import media from "styled-media-query";

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    justify-items: start;
    flex: 0 0 60%;
  `}

  ${media.lessThan("small")`
    justify-items: start;
    flex: 0 0 40%;
  `} 
`;

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.4s;

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
    width: 210px;
  `}

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.h1`
  transition: .4s;
  color: var(--texts);
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("large")`
    font-size: 1.4rem;
    margin: .2rem 0px 0px 1rem;
  `}

  ${media.lessThan("small")`
    font-size: 1.2rem;
    margin: .2rem 0px 0px .4rem;
  `}

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
    font-size: 1rem;
    margin-top: 0.2rem;
  `}
  
  ${media.lessThan("small")`
    font-size: .8rem;
  `}
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`;

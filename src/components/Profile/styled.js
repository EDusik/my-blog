import styled from "styled-components";
import media from "styled-media-query";

import { Link } from "gatsby";

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    justify-items: start;
    flex: 0 0 60%;
  `} 
`;

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.4s;

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: var(--highlight);
  }
`;

export const ProfileAuthor = styled.h1`
  color: var(--highlight);
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("large")`
    font-size: 1.4rem;
    margin: .2rem 0px 0px 1rem;
  `}

  ${media.lessThan("small")`
    font-size: 1rem;
    margin: .2rem 0px 0px 1rem;
  `}
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

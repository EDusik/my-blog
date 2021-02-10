import styled from "styled-components";
import media from "styled-media-query";

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  color: var(--highlight);
  width: 100%;

  ${media.lessThan("large")`
    margin: 0rem;
    display: block;
  `}
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;

  ${media.lessThan("large")`
    justify-content: flex-end;
  `}
`;

export const SocialLinksItem = styled.li`
`;

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.4s;
  &:hover {
    color: var(--highlight);
  }
`;

export const IconWrapper = styled.div`
  fill: var(--texts);
  width: 34px;
  height: 34px;

  ${media.lessThan("large")`
    width: 28px;
    height: 28px;
    margin: .6rem;
  `}

  ${media.lessThan("small")`
    width: 22px;
    height: 22px;
    margin: .8rem .6rem;
  `}
`;

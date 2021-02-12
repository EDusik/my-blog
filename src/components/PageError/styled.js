import styled from "styled-components";
import media from "styled-media-query";

export const PageHeader = styled.h1`
  text-align: center;
  color: var(--texts);
  margin-top: 3.5rem;
  font-size: 6rem;

  ${media.lessThan("large")`
    font-size: 2rem;
    padding: 0rem
  `}
`;

export const PageDescription = styled.p`
  text-align: center;
  color: var(--black);
  margin-top: 1.5rem;
  font-size: 1.7rem;

  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 0rem;
  `}
`;

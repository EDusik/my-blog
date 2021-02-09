import styled from "styled-components";
import { Link } from "gatsby";

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--background);
  display: flex;
`;

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: var(--background);
  color: var(--highlight);
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: background 0.4s;
  width: 50%;
  &:hover {
    background: var(--mediumBackground);
  }
  &.previous {
    border-right: 1px solid var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`;

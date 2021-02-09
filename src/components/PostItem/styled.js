import styled from "styled-components";
import { Link } from "gatsby";

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    transition: .4s;
    color: var(--highlight);
    cursor: pointer;
    background-color: var(--mediumBackground);
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
    display: flex;
    height: 400px;
    border: solid 1px var(--mediumBackground);
    &:hover{
      background-color: var(--mediumBackground);
    }
  }
`;

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : "var(--highlight)")};
  border-radius: 50%;
  color: var(--white);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostItemDate = styled.time`
  font-size: 0.85rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
`;

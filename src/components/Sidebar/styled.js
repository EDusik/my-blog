import styled from "styled-components";
import media from "styled-media-query";

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")`

    

    

    height: auto;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: .5rem 1rem;
    flex-wrap: nowrap;
  `}
`;

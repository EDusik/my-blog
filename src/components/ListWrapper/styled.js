import styled from "styled-components";

export const ListWrapper = styled.section`
  body#grid & {
    background-color: var(--background);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

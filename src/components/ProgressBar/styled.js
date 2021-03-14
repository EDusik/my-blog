import styled from "styled-components";
import media from "styled-media-query";

export const ProgressBarStyled = styled.div`
  height: 4px;
  background-color: var(--highlight);
  width: ${props => props.width}%;
  transition: 0.2s;
  position: fixed;
  top: 0;
  left: 20rem;
  z-index: 2;

  ${media.lessThan("large")`
    left: 0;
    margin-top: 63px;
  `}

  ${media.lessThan("450px")`
    margin-top: 61px;
  `} 
`;

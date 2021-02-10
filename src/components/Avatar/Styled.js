import styled from "styled-components";
import media from "styled-media-query";
import Img from "gatsby-image";

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  margin: auto;
  border: solid 5px var(--highlight);

  ${media.lessThan("large")`
    width: 4rem;
    height: 4rem;
    border: none;
  `}
`;

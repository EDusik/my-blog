import styled from "styled-components";
import media from "styled-media-query";

export const AboutWrapper = styled.div`

  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0 auto;
  padding: 5rem 5rem 0;

  div {
    flex: 1 1 50%;
  }

  ${media.lessThan("large")`
    padding: .8rem 1rem;
  `}

  blockquote {
    color: var(--texts);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
`;

export const AboutTitle = styled.h2`
  color: var(--texts);
  font-weight: 500;
  -webkit-letter-spacing: 0.069rem;
  -moz-letter-spacing: 0.069rem;
  -ms-letter-spacing: 0.069rem;
  letter-spacing: 0.069rem;
  line-height: 1.4;
  font-size: 3rem;
  margin-bottom: 1.5rem;

  ${media.lessThan("large")`
    font-size: 2.5rem;
  `}
`;

export const AboutText = styled.h3`
  color: var(--texts);
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.7;
  -webkit-letter-spacing: 0.069rem;
  -moz-letter-spacing: 0.069rem;
  -ms-letter-spacing: 0.069rem;
  letter-spacing: 0.069rem;
  padding: 0 1.4rem;
  margin-bottom: 1.5rem;

  ${media.lessThan("large")`
    font-size: 1rem;
  `}

  b {
    color: var(--highlight)
  }
`;

export const SocialWrapper = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  justify-content: initial;
  list-style: none;
  width: 200px;

  ${media.lessThan("large")`
    width: 100%;
  `}
`;

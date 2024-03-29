import styled, { css } from "styled-components";

export const PageDiv = styled.div`
  width: 500px;
  height: 100vh;
  margin: auto;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (min-width: 800px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

export const LogoBg = styled.div<{ bgicon: string }>`
  background-image: ${(props) => `url(${props.bgicon})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
    box-sizing: border-box;
    margin: 0;
    font-size: 1rem;

    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      display: none;
    }

    font-family : SpoqaHanSansNeo-Regular;
  }
  
`;

export default GlobalStyle;

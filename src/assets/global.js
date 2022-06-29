import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
     margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    }
    html,
  body,
  #root {
    height: 100%;
  }
  `;

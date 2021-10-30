import { createGlobalStyle, css } from "styled-components";

const fontCSS = css`
  * {
    font-family: "Gowun Batang", serif;
  }
`;

export default createGlobalStyle`
  ${fontCSS}
  html, body {
    margin: 0;
    padding: 0;
  }
`;

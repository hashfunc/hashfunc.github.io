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
  a {
    color: inherit;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
  }
`;

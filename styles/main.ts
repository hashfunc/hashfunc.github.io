import styled from "styled-components";

export default styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  background-color: #1a1616;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`;

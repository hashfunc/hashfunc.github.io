import styled from "styled-components";
import { GlassmorphismContainerCSS } from "styles/glassmorphism";

export const StyledNavigation = styled.nav`
  ${GlassmorphismContainerCSS};
  z-index: 10;
  position: fixed;
  right: 15px;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0 10px;
  box-sizing: border-box;
  padding: 14px;
  border-radius: 6px;
`;

import styled, { css } from "styled-components";
import { GlassmorphismContainerCSS } from "styles/glassmorphism";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 0 10px;
  box-sizing: border-box;
  padding: 8px 8px 14px 8px;
  width: 800px;
  height: 55px;
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

export const StyledNavigationItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  width: 200px;
  height: 100%;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      ${GlassmorphismContainerCSS};
      color: #6e6e6e;
      cursor: default;
    `}
  a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;

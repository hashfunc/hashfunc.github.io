import styled, { css } from "styled-components";
import { GlassmorphismContainerCSS } from "styles/glassmorphism";

interface Props {
  display?: boolean;
}

export const StyledNavigationButton = styled.button<Props>`
  ${GlassmorphismContainerCSS};
  z-index: 10;
  position: fixed;
  right: 15px;
  bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  svg {
    width: 26px;
    height: 26px;
    color: #5e5e5e;
    transition: transform ease-in-out 0.4s;
    ${({ display }) =>
      display &&
      css`
        transform: rotate(-540deg);
      `}
  }
`;

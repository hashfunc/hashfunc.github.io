import styled, { css } from "styled-components";

interface Props {
  active: boolean;
}

export const StyledNavigationItem = styled.a<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 16px;
  width: 120px;
  height: 30px;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  & + & {
    margin-top: 15px;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: rgba(64, 64, 64, 0.02);
      border-radius: 6px;
      box-shadow: 0 0 5px 1px rgba(64, 64, 64, 0.08) inset;
      color: #6e6e6e;
      cursor: default;
    `}
`;

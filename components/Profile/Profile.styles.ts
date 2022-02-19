import styled from "styled-components";
import { GlassmorphismContainerCSS } from "styles/glassmorphism";

export const StyledProfileLayout = styled.div`
  ${GlassmorphismContainerCSS};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  width: 800px;
  height: 400px;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
    height: 85vh;
    min-height: 550px;
    max-height: 650px;
  }
`;

export const StyledProfile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 40px;
  height: 100%;
  border-right: 1px solid rgba(255, 255, 255, 0.35);
  @media (max-width: 800px) {
    padding: 20px;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.35);
  }
`;

export const StyledProfileHeader = styled.div`
  color: #646464;
`;

export const StyledProfileName = styled.div`
  font-size: 38px;
  letter-spacing: 4px;
  line-height: 0.8em;
`;

export const StyledProfileRole = styled.div`
  font-size: 16px;
`;

export const StyledProfileHashTag = styled.div`
  color: #848484;
  font-size: 10px;
  line-height: 1.8em;
`;

export const StyledProfileImage = styled.div`
  box-sizing: border-box;
  margin: 0 15px 0 30px;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 50%;
  box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.15);
  img {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 800px) {
    margin: 30px 0;
    width: 85%;
    max-width: 300px;
    height: auto;
    order: -1;
  }
`;

import styled from "styled-components";

export const StyledProfileLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  width: 800px;
  height: 360px;

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
  margin-right: 15px;
  padding: 40px 40px 25px 40px;
  height: 100%;
  background-color: #f6dc3e;
  border-radius: 12px;

  @media (max-width: 800px) {
    margin-right: 0;
    width: 100%;
    padding: 25px 20px 15px 20px;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.35);
  }
`;

export const StyledProfileHeader = styled.div`
  color: #4e4e4e;
`;

export const StyledProfileName = styled.div`
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 4px;
  line-height: 0.8em;
`;

export const StyledProfileLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #6e6e6e;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.8em;
  a,
  span {
    display: flex;
    align-items: center;
  }
  img {
    opacity: 0.6;
    box-sizing: border-box;
    margin-left: 2px;
    margin-right: 6px;
    height: 18px;
  }
  svg {
    box-sizing: border-box;
    margin-right: 6px;
    height: 20px;
  }
`;

export const StyledProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 15px;
  height: 100%;
  border-radius: 12px;
  background-color: #e7b8b2;

  @media (max-width: 800px) {
    margin: 15px 0;
    padding: 15px;
    width: 100%;
    max-width: 300px;
    height: auto;
  }
`;

export const StyledProfileImage = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #dad3d3;
  border-radius: 12px;

  img {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

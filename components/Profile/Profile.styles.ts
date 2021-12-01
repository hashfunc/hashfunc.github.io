import styled from "styled-components";

export const StyledProfileLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  width: 800px;
  height: 400px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(192, 192, 192, 0.35);
  backdrop-filter: blur(4px);
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
`;

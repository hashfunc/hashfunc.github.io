import styled from "styled-components";

export const StyledHistory = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 15px 20px;
  background-color: rgba(64, 64, 64, 0.02);
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgba(64, 64, 64, 0.08) inset;
  color: #4e4e4e;
  user-select: none;
  & + & {
    margin-top: 16px;
  }
`;

export const StyledHistoryYears = styled.div`
  box-sizing: border-box;
  height: auto;
`;

export const StyledHistoryYear = styled.div`
  color: #8e8e8e;
  font-weight: bolder;
  font-size: 14px;
`;

export const StyledHistoryBody = styled.div`
  flex: 1;
`;

export const StyledHistoryHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 8px 14px 8px;
  margin-bottom: 14px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.22);
`;

export const StyledHistoryName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 65px;
  height: 65px;
  background-color: rgba(255, 255, 255, 0.26);
  box-shadow: 0 0 1px 0 rgba(64, 64, 64, 0.16);
  border: 1px solid rgba(72, 72, 72, 0.22);
  border-radius: 50%;
  color: #868686;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledHistorySummary = styled.div`
  box-sizing: border-box;
  margin-left: 20px;
  padding-top: 10px;
`;

export const StyledHistoryCategory = styled.div`
  font-size: 20px;
  line-height: 14px;
`;

export const StyledHistoryRole = styled.div`
  font-size: 10px;
  line-height: 25px;
`;

export const StyledHistoryContentContainer = styled.div`
  box-sizing: border-box;
  padding-left: 16px;
  font-size: 12px;
  line-height: 24px;
`;

export const StyledHistoryContent = styled.div`
  & + & {
    margin-top: 15px;
  }
`;

export const StyledHistoryContentMain = styled.div`
  font-size: 15px;
`;

export const StyledHistoryContentSub = styled.div`
  padding-left: 15px;
  color: #5b5b5b;
  font-size: 10px;
  line-height: 16px;
`;

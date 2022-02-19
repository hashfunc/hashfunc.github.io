import type { HistoryData } from "data/history";
import {
  StyledHistory,
  StyledHistoryYears,
  StyledHistoryYear,
  StyledHistoryBody,
  StyledHistoryHeader,
  StyledHistoryCategory,
  StyledHistoryName,
  StyledHistorySummary,
  StyledHistoryRole,
  StyledHistoryContentContainer,
  StyledHistoryContent,
  StyledHistoryContentMain,
  StyledHistoryContentSub,
} from "./History.styles";

type Props = {
  history: HistoryData;
};

function History({ history }: Props) {
  return (
    <StyledHistory>
      <StyledHistoryBody>
        <StyledHistoryHeader>
          <StyledHistoryName>{history.name}</StyledHistoryName>
          <StyledHistorySummary>
            <StyledHistoryCategory>{history.category}</StyledHistoryCategory>
            <StyledHistoryRole>{history.role.join(", ")}</StyledHistoryRole>
          </StyledHistorySummary>
        </StyledHistoryHeader>
        <StyledHistoryContentContainer>
          {history.contents.map((content) => (
            <StyledHistoryContent key={content.main}>
              <StyledHistoryContentMain>
                -&nbsp;&nbsp;{content.main}
              </StyledHistoryContentMain>
              <StyledHistoryContentSub>{content.sub}</StyledHistoryContentSub>
            </StyledHistoryContent>
          ))}
        </StyledHistoryContentContainer>
      </StyledHistoryBody>
      <StyledHistoryYears>
        {history.years.map((year) => (
          <StyledHistoryYear key={year}>{year}</StyledHistoryYear>
        ))}
      </StyledHistoryYears>
    </StyledHistory>
  );
}

export default History;

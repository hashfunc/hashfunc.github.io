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
  StyledHistoryContentEnv,
} from "./History.styles";

interface Props {
  readonly history: HistoryData;
}

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
          {history.contents.map(({ content, env }) => (
            <StyledHistoryContent key={content}>
              <StyledHistoryContentMain>- {content}</StyledHistoryContentMain>
              <StyledHistoryContentEnv>{env}</StyledHistoryContentEnv>
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

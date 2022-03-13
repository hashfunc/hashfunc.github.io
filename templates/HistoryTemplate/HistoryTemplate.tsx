import { History } from "components";
import {
  StyledHistoryTemplateLayout,
  StyledHistoryTemplate,
} from "./HistoryTemplate.styles";

interface Props {
  readonly histories: readonly HistoryData[];
}

function HistoryTemplate({ histories }: Props) {
  return (
    <StyledHistoryTemplateLayout>
      <StyledHistoryTemplate>
        {histories.map((history) => (
          <History history={history} key={history.name} />
        ))}
      </StyledHistoryTemplate>
    </StyledHistoryTemplateLayout>
  );
}

export default HistoryTemplate;

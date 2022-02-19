import { History } from "components";
import {
  StyledHistoryTemplateLayout,
  StyledHistoryTemplate,
} from "./HistoryTemplate.styles";
import { histories } from "data/history";

function HistoryTemplate() {
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

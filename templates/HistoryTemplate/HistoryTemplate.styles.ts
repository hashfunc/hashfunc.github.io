import styled from "styled-components";
import StyledMain from "styles/main";
import { GlassmorphismContainerCSS } from "styles/glassmorphism";

export const StyledHistoryTemplateLayout = styled(StyledMain)`
  padding: 60px 0 40px 0;
`;

export const StyledHistoryTemplate = styled.div`
  ${GlassmorphismContainerCSS};
  box-sizing: border-box;
  padding: 15px;
  width: 800px;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 90vw;
    min-height: 550px;
  }
`;

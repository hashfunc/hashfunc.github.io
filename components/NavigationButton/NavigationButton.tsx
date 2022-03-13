import { ChevronUpIcon } from "@heroicons/react/outline";
import { StyledNavigationButton } from "./NavigationButton.styles";

import type { MouseEventHandler } from "react";

interface Props {
  display?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function NavigationButton({ display, onClick }: Props) {
  return (
    <StyledNavigationButton type="button" onClick={onClick} display={display}>
      <ChevronUpIcon />
    </StyledNavigationButton>
  );
}

export default NavigationButton;

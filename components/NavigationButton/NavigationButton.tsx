import { ChevronUpIcon } from "@heroicons/react/outline";
import { StyledNavigationButton } from "./NavigationButton.styles";

import type { MouseEventHandler } from "react";

interface Props {
  isDisplay: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function NavigationButton({ isDisplay, onClick }: Props) {
  return (
    <StyledNavigationButton
      type="button"
      onClick={onClick}
      isDisplay={isDisplay}
    >
      <ChevronUpIcon />
    </StyledNavigationButton>
  );
}

export default NavigationButton;

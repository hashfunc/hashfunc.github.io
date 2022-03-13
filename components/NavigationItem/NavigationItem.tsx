import React, { useCallback } from "react";
import { StyledNavigationItem } from "./NavigationItem.styles";

import type { MouseEvent, MouseEventHandler, Ref } from "react";

interface Props {
  active: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  name: string;
  toggle: () => void;
}

function NavigationItem(
  { active, href, onClick, name, toggle }: Props,
  ref: Ref<HTMLAnchorElement>
) {
  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      toggle();
      if (onClick) {
        onClick(event);
      }
    },
    [onClick, toggle]
  );
  return (
    <StyledNavigationItem
      href={href}
      onClick={handleOnClick}
      active={active}
      ref={ref}
    >
      {name}
    </StyledNavigationItem>
  );
}

export default React.forwardRef(NavigationItem);

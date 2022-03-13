import { useCallback, useState } from "react";

interface NavigationHook {
  display: boolean;
  toggle: () => void;
}

function useNavigation(): NavigationHook {
  const [display, setDisplay] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setDisplay((prev) => !prev);
  }, []);

  return {
    display,
    toggle,
  };
}

export { useNavigation };

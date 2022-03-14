import { useCallback, useState } from "react";

interface NavigationHook {
  isDisplay: boolean;
  toggle: () => void;
}

function useNavigation(): NavigationHook {
  const [isDisplay, setDisplay] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setDisplay((prev) => !prev);
  }, []);

  return {
    isDisplay,
    toggle,
  };
}

export { useNavigation };

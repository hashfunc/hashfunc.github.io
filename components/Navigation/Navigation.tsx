import { useRouter } from "next/router";
import Link from "next/link";
import { NavigationButton, NavigationItem } from "components";
import { useNavigation } from "./hooks";
import { StyledNavigation } from "./Navigation.styles";

function Navigation() {
  const router = useRouter();
  const { isDisplay, toggle } = useNavigation();
  return (
    <>
      <NavigationButton isDisplay={isDisplay} onClick={toggle} />
      {isDisplay && (
        <StyledNavigation>
          <Link href="/" passHref>
            <NavigationItem
              active={router.pathname === "/"}
              name="about"
              toggle={toggle}
            />
          </Link>
          <Link href="/history" passHref>
            <NavigationItem
              active={router.pathname === "/history"}
              name="history"
              toggle={toggle}
            />
          </Link>
        </StyledNavigation>
      )}
    </>
  );
}

export default Navigation;

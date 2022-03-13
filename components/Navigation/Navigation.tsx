import { useRouter } from "next/router";
import Link from "next/link";
import { NavigationButton, NavigationItem } from "components";
import { useNavigation } from "./hooks";
import { StyledNavigation } from "./Navigation.styles";

function Navigation() {
  const router = useRouter();
  const { display, toggle } = useNavigation();
  return (
    <>
      <NavigationButton display={display} onClick={toggle} />
      {display && (
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

import { useRouter } from "next/router";
import Link from "next/link";
import { StyledNavigation, StyledNavigationItem } from "./Navigation.styles";

function Navigation() {
  const router = useRouter();
  return (
    <StyledNavigation>
      <StyledNavigationItem active={router.pathname === "/"}>
        <Link href="/">about</Link>
      </StyledNavigationItem>
      <StyledNavigationItem active={router.pathname === "/history"}>
        <Link href="/history">history</Link>
      </StyledNavigationItem>
    </StyledNavigation>
  );
}

export default Navigation;

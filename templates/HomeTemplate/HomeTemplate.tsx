import { Navigation, Profile } from "components";
import StyledMain from "styles/main";

function HomeTemplate() {
  return (
    <StyledMain>
      <Navigation />
      <Profile />
    </StyledMain>
  );
}

export default HomeTemplate;

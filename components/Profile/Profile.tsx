import { AtSymbolIcon } from "@heroicons/react/24/outline";
import {
  StyledProfileLayout,
  StyledProfile,
  StyledProfileHeader,
  StyledProfileName,
  StyledProfileRole,
  StyledProfileLink,
  StyledProfileImage,
} from "./Profile.styles";

function Profile() {
  return (
    <StyledProfileLayout>
      <StyledProfile>
        <StyledProfileHeader>
          <StyledProfileRole>개발자</StyledProfileRole>
          <StyledProfileName>hashfunc</StyledProfileName>
        </StyledProfileHeader>
        <StyledProfileLink>
          <a href="https://github.com/hashfunc">
            <img src="/assets/github.png" alt="GitHub icon" />
            hashfunc
          </a>
          <span>
            <AtSymbolIcon />
            root@hashfunc.io
          </span>
        </StyledProfileLink>
      </StyledProfile>
      <StyledProfileImage>
        <img src="/assets/hashfunc.png" alt="hashfunc profile image" />
      </StyledProfileImage>
    </StyledProfileLayout>
  );
}

export default Profile;

import { AtSymbolIcon } from "@heroicons/react/24/outline";
import {
  StyledProfile,
  StyledProfileHeader,
  StyledProfileImage,
  StyledProfileImageContainer,
  StyledProfileLayout,
  StyledProfileLink,
  StyledProfileName,
} from "./Profile.styles";

function Profile() {
  return (
    <StyledProfileLayout>
      <StyledProfile>
        <StyledProfileHeader>
          <StyledProfileName>HASHFUNC</StyledProfileName>
        </StyledProfileHeader>
        <StyledProfileLink>
          <a href="https://github.com/hashfunc">
            <img src="/assets/github.png" alt="GitHub icon" />
            HASHFUNC
          </a>
          <span>
            <AtSymbolIcon />
            root@hashfunc.io
          </span>
        </StyledProfileLink>
      </StyledProfile>
      <StyledProfileImageContainer>
        <StyledProfileImage>
          <img src="/assets/hashfunc.png" alt="hashfunc profile image" />
        </StyledProfileImage>
      </StyledProfileImageContainer>
    </StyledProfileLayout>
  );
}

export default Profile;

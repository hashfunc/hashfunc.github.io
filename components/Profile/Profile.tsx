import Image from "next/image";
import {
  StyledProfileLayout,
  StyledProfile,
  StyledProfileHeader,
  StyledProfileName,
  StyledProfileRole,
  StyledProfileHashTag,
  StyledProfileImage,
} from "./Profile.styles";
import HashfuncImage from "public/assets/hashfunc.png";

function Profile() {
  return (
    <StyledProfileLayout>
      <StyledProfile>
        <StyledProfileHeader>
          <StyledProfileRole>개발자</StyledProfileRole>
          <StyledProfileName>hashfunc</StyledProfileName>
        </StyledProfileHeader>
        <StyledProfileHashTag>
          <div>#Python #Go #Java #Kotlin</div>
          <div>#Django #Spring</div>
          <div>#Javascript #Typescript</div>
          <div>#Vue #React #NextJS</div>
          <div>#Kubernetes</div>
        </StyledProfileHashTag>
      </StyledProfile>
      <StyledProfileImage>
        <Image src={HashfuncImage} />
      </StyledProfileImage>
    </StyledProfileLayout>
  );
}

export default Profile;

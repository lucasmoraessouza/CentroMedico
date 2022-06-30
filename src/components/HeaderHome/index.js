import * as C from "./styles";
import profileImg from "../../assets/images/profile-image.png";
import { Menu } from "react-feather";

export default function HeaderHome() {
  return (
    <C.Header>
      <Menu color="#FFF" width={30} height={30} strokeWidth={2} />
      <img alt="profile" src={profileImg} />
    </C.Header>
  );
}

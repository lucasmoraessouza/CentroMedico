import * as C from "./styles";
import profileImg from "../../assets/images/profile-image.png";
import { Menu } from "react-feather";
import { StateGlobal } from "../../context/registerContext";

export default function HeaderHome(props) {
  const { setComponents } = StateGlobal();

  return (
    <C.Header>
      <Menu color="#FFF" width={30} height={30} strokeWidth={2} onClick={()=>{props.setOpenLeft(true)}} />
      <img alt="profile" src={profileImg} />
    </C.Header>
  );
}

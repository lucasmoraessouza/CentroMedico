import * as C from "./styles";
import { Menu } from "react-feather";
import profileImg from "../../assets/images/profile-image.png";
export default function Home() {
  return (
    <C.Container>
      <C.Header>
        <Menu color="#FFF" width={30} height={30} strokeWidth={2} />
        <img alt="profile" src={profileImg} />
      </C.Header>
      <C.Content>
        <C.Title>
          Olá, <b>Ana Carolina</b>
        </C.Title>
        <C.TextInformation>Meu ID: 343231-21 </C.TextInformation>
        <C.TitleBaseboard>Para você</C.TitleBaseboard>
        <C.Bar />
        <C.TitleBaseboard>Centro Médico</C.TitleBaseboard>
        <C.Bar />
      </C.Content>
    </C.Container>
  );
}

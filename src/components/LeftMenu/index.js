import * as C from "./styles";
import { X, Calendar, Mail, Clipboard, User, ArrowLeft } from "react-feather";
import profileImg from "../../assets/images/profile-image.png";
export default function LeftMenu() {
  const data = [
    {
      id: 1,
      icon: <Clipboard color="#FFF" width={40} height={40} strokeWidth={1} />,
      name: "Meus Resultados",
    },
    {
      id: 2,
      icon: <Calendar color="#FFF" width={40} height={40} strokeWidth={1} />,
      name: "Agendamentos",
    },
    {
      id: 3,
      icon: <Clipboard color="#FFF" width={40} height={40} strokeWidth={1} />,
      name: "Procedimentos",
    },
    {
      id: 4,
      icon: <Mail color="#FFF" width={40} height={40} strokeWidth={1} />,
      name: "Fale Conosco",
    },
    {
      id: 5,
      icon: <User color="#FFF" width={40} height={40} strokeWidth={1} />,
      name: "Meu Perfil",
    },
    {
      id: 6,
      icon: <ArrowLeft color="#FFF" width={40} height={40} strokeWidth={1} />,
      name: "Sair",
    },
  ];

  return (
    <C.Container>
      <X
        color="#FFF"
        width={40}
        height={40}
        strokeWidth={1}
        style={{ position: "fixed", right: "15", top: "15" }}
      />
      <C.Header>
        <img alt="profile" src={profileImg} />
        <C.TitleHeader>Ana Carolina</C.TitleHeader>
        <C.SubtitleHeader>Meu ID:</C.SubtitleHeader>
        <C.Text>343231-21</C.Text>
      </C.Header>
      <C.Content>
        <C.MenuOptions>
          {data.map((item, index) => (
            <C.DivMap key={String(index)}>
              {item.icon}
              <p> {item.name} </p>
            </C.DivMap>
          ))}
        </C.MenuOptions>
      </C.Content>
    </C.Container>
  );
}

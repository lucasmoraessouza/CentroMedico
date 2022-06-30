import * as C from "./styles";
import { StateGlobal } from "../../context/registerContext";
import { RiHome2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbClipboard } from "react-icons/tb";
export default function FooterHome() {
  const { setComponents } = StateGlobal();

  // return (
  //   <C.Footer>
  //     <img alt="profile" src={logo_branco} width='150px'/>
  //   </C.Footer>
  // );
  return (
    <C.Container>
      <div
        onClick={() => {
          setComponents(0);
        }}
      >
        <RiHome2Line fill="#0F2554" style={{ height: "2em", width: "2em" }} />
        <p>Início</p>
      </div>

      <div
        onClick={() => {
          setComponents(0);
        }}
      >
        <FiUser
          fill="#fff"
          color="#0F2554"
          style={{ height: "2em", width: "2em" }}
        />
        <p>Meu Perfil</p>
      </div>

      <div
        onClick={() => {
          setComponents(1);
        }}
      >
        <AiOutlineCalendar
          fill="#0F2554"
          style={{ height: "2em", width: "2em" }}
        />

        <p>Agendamentos</p>
      </div>
      <div
        onClick={() => {
          setComponents(2);
        }}
      >
        <TbClipboard
          fill="#fff"
          color="#0F2554"
          style={{ height: "2em", width: "2em" }}
        />
        <p>Resustados</p>
      </div>
    </C.Container>
  );
}

import * as C from "./styles";
import logo_branco from "../../../../assets/images/logo_branco.png";

export default function FooterHome() {
  return (
    <C.Footer>
      <img alt="profile" src={logo_branco} width='150px'/>
    </C.Footer>
  );
}
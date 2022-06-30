import * as C from "./styles";
import WhatsAppIcon from "../../assets/svgs/whatsapp.svg";


export default function ButtonWhatsApp({ text, route, funcao, disabled }) {
  
    return (
        <C.BtnWhatsApp disabled={disabled} onClick={() => {
          if (funcao) {
            funcao();
          } 
        }}>
            <img alt="logo-whatsapp" src={WhatsAppIcon} />
            <C.BtnWhatsAppInfo>{text}</C.BtnWhatsAppInfo>
        </C.BtnWhatsApp>

    );
  }
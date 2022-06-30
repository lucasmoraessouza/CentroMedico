import * as C from "./styles";
import HeaderHome from "../../components/HeaderHome";
import FooterHome from "../../components/FooterHome";
import CalendarioIcon from "../../assets/svgs/calendario.svg";
import ProntuarioIcon from "../../assets/svgs/prontuario.svg";
import PranchetaIcon from "../../assets/svgs/prancheta.svg";
import CartaIcon from "../../assets/svgs/carta.svg";
import ButtonWhatsApp from "../../components/ButtonWhatsApp";
export default function Home() {
  return (
    <C.Container>
      <div>
        <HeaderHome />
      </div>

      <C.Section>
        <C.Content>
          <C.Title>
            Olá, <b>Ana Carolina</b>
          </C.Title>
          <C.TextInformation>Meu ID: 343231-21 </C.TextInformation>
          <C.TitleBaseboard>Para você</C.TitleBaseboard>
          <C.Bar />
          <C.ContainerCard>
            <C.CardLine>
              <C.CardOption>
                <img alt="icon" src={CalendarioIcon} width="50px" />
                <C.InfoCard>
                  Meus <br />
                  Agendamentos
                </C.InfoCard>
              </C.CardOption>
              <C.CardOption>
                <img alt="icon" src={ProntuarioIcon} width="50px" />
                <C.InfoCard>
                  Meus <br />
                  Resultados
                </C.InfoCard>
              </C.CardOption>
            </C.CardLine>
          </C.ContainerCard>
          <C.TitleBaseboard>Centro Médico</C.TitleBaseboard>
          <C.Bar />
          <C.ContainerCard>
            <C.CardLine>
              <C.CardOption>
                <img alt="icon" src={PranchetaIcon} width="50px" />
                <C.InfoCard>
                  Nossos
                  <br />
                  procedimentos
                </C.InfoCard>
              </C.CardOption>
              <C.CardOption>
                <img alt="icon" src={CartaIcon} width="50px" />
                <C.InfoCard>
                  Fale
                  <br />
                  conosco
                </C.InfoCard>
              </C.CardOption>
            </C.CardLine>
          </C.ContainerCard>


          <C.ContainerBtnWhatsApp>
            <ButtonWhatsApp text="Solicitar exame" />
          </C.ContainerBtnWhatsApp>
        </C.Content>
      </C.Section>
      <div>
        <FooterHome />
      </div>
    </C.Container>
  );
}

import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import SuccessIcon from "../../../assets/images/SuccessIcon.png";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../../services/auth";

export default function StepFive() {
  const navigate = useNavigate();

  function handleNext() {
    removeToken()
    navigate("/");
  }
  return (
    <>
      <C.Bar />
      <C.Container>
        <C.Content>
          <C.Header>
            <C.Image>
              <img alt="logo" src={background_logo} />
            </C.Image>
          </C.Header>
          <C.Form>
            <img alt="success" src={SuccessIcon} width={120} height={120} />
            <C.Text>Cadastro efetuado com sucesso</C.Text>
          </C.Form>
          <C.ContainerButton>
            <C.BtnBlock>
              <span onClick={handleNext}>Ir para o login</span>
            </C.BtnBlock>
          </C.ContainerButton>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

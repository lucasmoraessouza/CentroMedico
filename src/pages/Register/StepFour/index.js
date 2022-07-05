import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import { TextField } from "@mui/material";
import PrimaryButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function StepFour() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/register/5");
  }

  function handleBack() {
    navigate("/register/3");
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
            <C.Subtitle>
              Passo <b>2</b> de <b>2</b>
            </C.Subtitle>
          </C.Header>
          <C.Text>Crie uma senha de acesso:</C.Text>
          <C.Form>
            <C.InputAndLabel>
              <label id="password" placeholder="">
                Nova senha
              </label>
              <TextField size="small" fullWidth={true} />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label id="confirm-password">Confimar senha</label>
              <TextField size="small" fullWidth={true} />
              <C.TextInformation>
                Sua senha precisa ter no mínimo 8 caracteres
              </C.TextInformation>
            </C.InputAndLabel>

            <C.ContainerButton>
              <PrimaryButton text="Continuar" funcao={handleNext} />
              <C.TextBack onClick={handleBack}>Voltar</C.TextBack>
            </C.ContainerButton>
          </C.Form>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

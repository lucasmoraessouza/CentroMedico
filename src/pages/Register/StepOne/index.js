import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import { TextField } from "@mui/material";
import PrimaryButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function StepOne() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/register/2");
  }

  return (
    <>
      <C.Bar />
      <C.Container>
        <C.Content>
          <C.Image>
            <img alt="logo" src={background_logo} />
          </C.Image>
          <C.Text>
            Para iniciar seu cadastro digite seu telefone ou e-mail de cadastro:
          </C.Text>
          <C.Form>
            <TextField size="small" placeholder="CPF" fullWidth={true} />
            <TextField
              id="email"
              size="small"
              placeholder="E-mail"
              fullWidth={true}
              style={{ marginTop: "25px" }}
            />
            <C.TextInformation>ou</C.TextInformation>
            <TextField size="small" placeholder="Telefone" fullWidth={true} />
            <C.ContainerButton>
              <PrimaryButton text="Continuar" funcao={handleNext} />
            </C.ContainerButton>
          </C.Form>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

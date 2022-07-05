import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import { TextField } from "@mui/material";
import PrimaryButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function StepThree() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/register/4");
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
              Passo <b>1</b> de <b>2</b>
            </C.Subtitle>
          </C.Header>
          <C.Text>Por favor confirme os dados pessoais:</C.Text>
          <C.Form>
            <C.InputAndLabel>
              <label id="name" placeholder="">
                Nome
              </label>
              <TextField
                size="small"
                placeholder="Ana Carolina"
                fullWidth={true}
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label>CPF</label>
              <TextField
                id="email"
                size="small"
                placeholder="312.321.322-02"
                disabled={true}
                fullWidth={true}
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label>Data de Nascimento</label>
              <TextField
                id="email"
                size="small"
                type="date"
                placeholder="Telefone"
                value="1990-10-10"
                fullWidth={true}
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label>Email</label>
              <TextField
                id="email"
                size="small"
                placeholder="ana_carol231@gmail.com"
                fullWidth={true}
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label>Telefone</label>
              <TextField
                id="email"
                size="small"
                placeholder="(15) 9 9321-2312"
                fullWidth={true}
              />
            </C.InputAndLabel>
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

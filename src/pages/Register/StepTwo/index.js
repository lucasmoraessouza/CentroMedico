import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import PrimaryButton from "../../../components/Button";
import OtpInput from "react-otp-input"; //https://www.npmjs.com/package/react-otp-input
import { useNavigate } from "react-router-dom";

export default function StepTwo() {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/register/3");
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
            Enviamos em seu [telefone / email] um código de validação de 6
            números, por favor digite abaixo:
          </C.Text>
          <C.Form>
            <div>
              <OtpInput
                numInputs={6}
                separator={" "}
                inputStyle={{
                  width: "40px",
                  marginLeft: "0.25rem",
                  marginRight: "0.25rem",
                  height: "50px",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)",
                }}
              />
            </div>
            <C.UnderlineText>Reenviar Código</C.UnderlineText>
          </C.Form>
          <C.ContainerButton>
            <PrimaryButton text="Continuar" funcao={handleNext} />
          </C.ContainerButton>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

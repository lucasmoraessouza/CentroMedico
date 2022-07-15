import { useEffect, useState } from "react";
import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import PrimaryButton from "../../../components/Button";
import OtpInput from "react-otp-input"; //https://www.npmjs.com/package/react-otp-input
import { useNavigate } from "react-router-dom";
import { StateGlobal } from "../../../context/GlobalContext";
import api from "../../../services/index";
import { saveToken } from "../../../services/auth";

export default function StepTwo() {
  const navigate = useNavigate();
  const { data_user, setData_user } = StateGlobal();
  const [btnIsOk, setBtnIsOk] = useState(true);
  const [auxTimer, setAuxTimer] = useState(false);
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(2 * 60);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  function handleNext() {
    navigate("/register/3");
  }

  function handleBack() {
    navigate("/register/1");
  }

  async function patientConsultation() {
    try {
      if (data_user?.email !== "") {
        const res = await api.post("/api/client/token/send", {
          cpf: data_user?.cpf,
          type: "email",
          content: data_user?.email,
        });

        if (res.data.error === "true") {
          handleBack();
        } else {
        }
      } else {
        const res = await api.post("/api/client/token/send", {
          cpf: data_user?.cpf,
          type: "phone",
          content: data_user?.phone,
        });

        if (res.data.error === "true") {
          handleBack();
        } else {
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function tokenValidation() {
    try {
      const res = await api.post("/api/client/token/validate", {
        token: data_user?.token,
      });
      setData_user(res.data);

      if (res.data.error === "false") {
        setData_user({
          birthday: res.data.user?.birthday,
          cpf: res.data.user?.cpf,
          email: res.data.user?.email,
          id: res.data.user?.id,
          name: res.data.user?.name,
          phone: res.data.user?.phone,
        });
        saveToken(res.data.user?.token);
        handleNext();
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  }


  function bodyValidation() {
    if (
      data_user.token !== "" &&
      data_user.token !== null &&
      data_user?.token?.length === 6
    ) {
      setBtnIsOk(false);
    } else {
      setBtnIsOk(true);
    }
  }

  async function ResendToken() {
    setAuxTimer(true);
    patientConsultation();
  }

  useEffect(() => {
    bodyValidation();
  }, [data_user]);

  useEffect(() => {
    if (totalTimeInSeconds === 0) {
      setAuxTimer(false);
      setTotalTimeInSeconds(2 * 60);
      return;
    } else if (auxTimer === true) {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
  }, [totalTimeInSeconds, auxTimer]);

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
                value={data_user.token}
                onChange={(e) => setData_user({ ...data_user, token: e })}
              />
            </div>
            {auxTimer === false ? (
              <C.UnderlineText onClick={ResendToken}>
                Reenviar Código
              </C.UnderlineText>
            ) : (
              <C.TextDisabled>
                Reenviar Código -{" "}
                <b>
                  {" "}
                  {minutes}:{seconds.toString().padStart(2, "0")}{" "}
                </b>
              </C.TextDisabled>
            )}
          </C.Form>
          <C.ContainerButton>
            <PrimaryButton
              text="Continuar"
              disabled={btnIsOk}
              funcao={tokenValidation}
            />
          </C.ContainerButton>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

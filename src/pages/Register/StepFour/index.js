import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import { TextField } from "@mui/material";
import PrimaryButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { StateGlobal } from "../../../context/GlobalContext";
import api from "../../../services";

export default function StepFour() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(true);
  const { data_user, setData_user } = StateGlobal();
  const [btnIsOk, setBtnIsOk] = useState(true);

  function handleNext() {
    navigate("/register/5");
  }

  function handleBack() {
    navigate("/register/3");
  }

  async function handleSubmit() {
    try {
      const res = await api.put("/api/client/update", {
        name: data_user?.name,
        cpf: data_user?.cpf,
        email: data_user?.email,
        birthday: data_user?.birthday.split("/").reverse().join("-"),
        phone: data_user?.phone,
        password: data_user?.password,
      });
      if (res.data.error === "false") {
        handleNext();
      }
    } catch (err) {
      console.log(err);
    }
  }


  function validatePassword() {
    if (data_user?.password?.length > 0 && data_user.password?.length < 8) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }

  function validateButton() {
    if (data_user?.password === data_user?.auxPassword && alert === false) {
      setBtnIsOk(false);
    } else {
      setBtnIsOk(true);
    }
  }

  useEffect(() => {
    validatePassword();
    validateButton();
  }, [data_user?.password, data_user?.auxPassword, alert]);

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
              <TextField
                type="password"
                size="small"
                fullWidth={true}
                value={data_user.password}
                onChange={(e) =>
                  setData_user({ ...data_user, password: e.target.value })
                }
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label id="confirm-password">Confimar senha</label>
              <TextField
                type="password"
                size="small"
                fullWidth={true}
                value={data_user.auxPassword}
                onChange={(e) =>
                  setData_user({ ...data_user, auxPassword: e.target.value })
                }
              />
              {alert === true ? (
                <C.Alert>Sua senha precisa ter no mínimo 8 caracteres</C.Alert>
              ) : (
                ""
              )}
            </C.InputAndLabel>

            <C.ContainerButton>
              <PrimaryButton
                text="Continuar"
                funcao={handleSubmit}
                disabled={btnIsOk}
              />
              <C.TextBack onClick={handleBack}>Voltar</C.TextBack>
            </C.ContainerButton>
          </C.Form>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

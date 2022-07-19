import React, { useEffect, useState } from "react";
import * as C from "./styles";
import background_logo from "../../assets/images/logo-centro-medico.png";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../../components/Button";
import { useNavigate } from "react-router-dom";
import api from "../../services";
import { saveToken } from "../../services/auth";

export default function Login() {
  const navigate = useNavigate();
  const [mailClient, setMailClient] = useState("");
  const [passWordClient, setPassWordClient] = useState("");
  const [btnIsOk, setBtnIsOk] = useState(true);

  function handleRegister() {
    navigate("/register/1");
  }

  async function handleSubmit() {
    try {
      const res = await api.post("/api/client/login", {
        email: mailClient,
        password: passWordClient,
      });

      saveToken(res.data?.token);

      if (res.data.error === "false") {
        setTimeout(() => {
          navigate("/home");
        }, [1000]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function bodyValidation() {
    if (
      mailClient !== "" &&
      mailClient !== null &&
      passWordClient !== "" &&
      passWordClient !== null
    ) {
      setBtnIsOk(false);
    } else {
      setBtnIsOk(true);
    }
  }

  useEffect(() => {
    bodyValidation();
  }, [mailClient, passWordClient]);

  return (
    <C.Container>
      <C.Header />
      <C.Content>
        <C.Image>
          <img alt="logo" src={background_logo} />
        </C.Image>
        <C.Form>
          <C.Title>Bem vindo! 👋🏻</C.Title>
          <C.Text>
            Por favor preencha seu e-mail e senha de acesso a sua conta
          </C.Text>
          <C.InputAndLabel>
            <label id="email">Email</label>
            <TextField
              size="small"
              placeholder="johndoe@gmail.com"
              value={mailClient}
              onChange={(e) => setMailClient(e.target.value)}
            />
          </C.InputAndLabel>
          <C.InputAndLabel>
            <div>
              <label>Senha</label>
              <p>Esqueceu a senha?</p>
            </div>
            <TextField
              size="small"
              placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
              value={passWordClient}
              onChange={(e) => setPassWordClient(e.target.value)}
            />
          </C.InputAndLabel>
          <C.ContainerButton>
            <PrimaryButton
              text="Acessar"
              funcao={handleSubmit}
              disabled={btnIsOk}
            />
          </C.ContainerButton>
          <C.RegisterText>
            <p>Não tem cadastro?</p>
            <p id="register" onClick={handleRegister}>
              Cadastre-se
            </p>
          </C.RegisterText>
        </C.Form>
      </C.Content>
    </C.Container>
  );
}

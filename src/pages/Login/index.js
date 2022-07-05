import React from "react";
import * as C from "./styles";
import background_logo from "../../assets/images/logo-centro-medico.png";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleRegister() {
    navigate("/register/1");
  }

  function handleLogin() {
    navigate("/home");
  }

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
            <TextField size="small" placeholder="johndoe@gmail.com" />
          </C.InputAndLabel>
          <C.InputAndLabel>
            <div>
              <label>Senha</label>
              <p>Esqueceu a senha?</p>
            </div>
            <TextField size="small" placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉" />
          </C.InputAndLabel>
          <C.ContainerButton>
            <PrimaryButton text="Acessar" funcao={handleLogin} />
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

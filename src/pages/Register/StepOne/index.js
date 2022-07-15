import { useState, useEffect } from "react";
import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import { TextField } from "@mui/material";
import PrimaryButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { StateGlobal } from "../../../context/GlobalContext";
import { CpfMask, PhoneMask } from "../../../components/Masks/index";
import api from "../../../services/index";

export default function StepOne() {
  const navigate = useNavigate();
  const { data_user, setData_user } = StateGlobal();
  const [btnIsOk, setBtnIsOk] = useState(true);

  function handleNext() {
    navigate("/register/2");
  }

  async function patientConsultation() {
    try {
      if (data_user?.email !== "") {
        const res = await api.post("/api/client/token/send", {
          cpf: data_user?.cpf,
          type: "email",
          content: data_user?.email,
        });

        if (res.data.error === "false") {
          handleNext();
        } else {
        }
      } else {
        const res = await api.post("/api/client/token/send", {
          cpf: data_user?.cpf,
          type: "phone",
          content: data_user?.phone,
        });

        if (res.data.error === "false") {
          handleNext();
        } else {
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  function bodyValidation() {
    if (
      data_user.cpf !== "" &&
      data_user.cpf !== null &&
      data_user?.cpf?.length === 11
    ) {
      if (
        data_user.email !== "" &&
        data_user.email !== null &&
        data_user?.email?.length > 5
      ) {
        setBtnIsOk(false);
      } else if (
        data_user.phone !== "" &&
        data_user.phone !== null &&
        data_user?.phone?.length === 15
      ) {
        setBtnIsOk(false);
      } else {
        setBtnIsOk(true);
      }
    } else {
      setBtnIsOk(true);
    }
  }

  useEffect(() => {
    bodyValidation();
  }, [data_user]);


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
            <TextField
              size="small"
              placeholder="CPF"
              fullWidth={true}
              type="tel"
              value={data_user?.cpf ? CpfMask(data_user?.cpf) : data_user?.cpf}
              inputProps={{ maxLength: 12 }}
              onChange={(e) =>
                setData_user({ ...data_user, cpf: e.target.value })
              }
            />
            <TextField
              id="email"
              size="small"
              placeholder="E-mail"
              fullWidth={true}
              style={{ marginTop: "25px" }}
              value={data_user.email}
              onChange={(e) =>
                setData_user({ ...data_user, email: e.target.value })
              }
            />
            <C.TextInformation>ou</C.TextInformation>
            <TextField
              size="small"
              type="tel"
              placeholder="Telefone"
              fullWidth={true}
              value={data_user?.phone ? PhoneMask(data_user?.phone) : data_user?.phone }
              inputProps={{ maxLength: 15 }}
              onChange={(e) =>
                setData_user({ ...data_user, phone: e.target.value })
              }
            />
            <C.ContainerButton>
              <PrimaryButton
                text="Continuar"
                disabled={btnIsOk}
                funcao={patientConsultation}
              />
            </C.ContainerButton>
          </C.Form>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import { TextField } from "@mui/material";
import PrimaryButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { StateGlobal } from "../../../context/GlobalContext";
import api from "../../../services/index";

export default function StepOne() {
  const navigate = useNavigate();
  const { data_user, setData_user } = StateGlobal();

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
        console.log(res);

        // handleNext();
      } else {
        const res = await api.post("/api/client/token/send", {
          cpf: data_user?.cpf,
          type: "phone",
          content: data_user?.phone,
        });
        console.log(res);

        // handleNext();
      }
    } catch (err) {
      console.log(err);
    }
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
            <TextField
              size="small"
              placeholder="CPF"
              fullWidth={true}
              value={data_user.cpf}
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
              placeholder="Telefone"
              fullWidth={true}
              value={data_user.phone}
              onChange={(e) =>
                setData_user({ ...data_user, phone: e.target.value })
              }
            />
            <C.ContainerButton>
              <PrimaryButton text="Continuar" funcao={patientConsultation} />
            </C.ContainerButton>
          </C.Form>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

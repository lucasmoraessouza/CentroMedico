import { useEffect, useState } from "react";
import * as C from "./styles";
import background_logo from "../../../assets/images/logo-centro-medico.png";
import { TextField } from "@mui/material";
import PrimaryButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { StateGlobal } from "../../../context/GlobalContext";
import { CpfMask, PhoneMask } from "../../../components/Masks/index";
import api from "../../../services/index";

export default function StepThree() {
  const navigate = useNavigate();
  const { data_user, setData_user } = StateGlobal();
  const [btnIsOk, setBtnIsOk] = useState(true);

  function handleNext() {
    navigate("/register/4");
  }

  function bodyValidation() {
    if (
      data_user.cpf !== "" &&
      data_user.cpf !== null &&
      data_user.nome !== "" &&
      data_user.nome !== null &&
      data_user.birthday !== "" &&
      data_user.birthday !== null &&
      data_user.email !== "" &&
      data_user.email !== null &&
      data_user.phone !== "" &&
      data_user.phone !== null
    ) {
      setBtnIsOk(false);
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
                value={data_user.name}
                onChange={(e) =>
                  setData_user({ ...data_user, name: e.target.value })
                }
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label>CPF</label>
              <TextField
                id="cpf"
                size="small"
                placeholder="312.321.322-02"
                disabled={true}
                fullWidth={true}
                value={
                  data_user?.cpf ? CpfMask(data_user?.cpf) : data_user?.cpf
                }
                onChange={(e) =>
                  setData_user({ ...data_user, cpf: e.target.value })
                }
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label>Data de Nascimento</label>
              <TextField
                id="date"
                size="small"
                type="tel"
                placeholder="Telefone"
                fullWidth={true}
                value={data_user.birthday}
                onChange={(e) =>
                  setData_user({ ...data_user, birthday: e.target.value })
                }
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label>Email</label>
              <TextField
                id="email"
                size="small"
                placeholder="ana_carol231@gmail.com"
                fullWidth={true}
                value={data_user.email}
                onChange={(e) =>
                  setData_user({ ...data_user, email: e.target.value })
                }
              />
            </C.InputAndLabel>
            <C.InputAndLabel>
              <label>Telefone</label>
              <TextField
                id="tel"
                size="small"
                placeholder="(15) 9 9321-2312"
                fullWidth={true}
                value={
                  data_user?.phone
                    ? PhoneMask(data_user?.phone)
                    : data_user?.phone
                }
                inputProps={{ maxLength: 15 }}
                onChange={(e) =>
                  setData_user({ ...data_user, phone: e.target.value })
                }
              />
            </C.InputAndLabel>
            <C.ContainerButton>
              <PrimaryButton text="Continuar" funcao={handleNext} disabled={btnIsOk}/>
            </C.ContainerButton>
          </C.Form>
        </C.Content>
        <C.Footer>Centro Médico Sorocaba © 2022</C.Footer>
      </C.Container>
    </>
  );
}

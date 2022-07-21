import React, { useEffect, useState } from "react";
import * as C from "./styles";
import TextField from "@mui/material/TextField";
import IconSend from "../../../../assets/svgs/send.svg";
import BtnWhatsApp from "../../../../components/ButtonWhatsApp";
import api from "../../../../services";
import { CircularProgress, MenuItem, Select } from "@mui/material";

export default function ContactUs() {
  const [subject, setSubject] = useState();
  const [department, setDepartment] = useState();
  const [message, setMessage] = useState();
  const [progress, setProgress] = useState(true);
  const [isOk, setIsOk] = useState(true);

  
  function redirect() {
    window.open(`https://api.whatsapp.com/send?phone=5515981790066&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20contato`, "_blank");
  }
  
  const arrayDepartment = [
    { label: "Unidade de Atendimento", value: "unidade-de-atendimento" },
    { label: "Unidade Matriz", value: "unidade-matriz" },
    { label: "Unidade 2", value: "unidade-2" },
    { label: "Instituto da Mulher", value: "instituto-da-mulher" },
    { label: "Medicina Fetal", value: "medicina-fetal" },
    { label: "Medicina Nuclear", value: "medicina-nuclear" },
    { label: "Cardiologia", value: "cardiologia" },
    { label: "Unidade Ápice", value: "unidade-apice" },
    { label: "Unidade Zona Norte", value: "unidade-zona-norte" },
    { label: "Unidade Reunidas", value: "unidade-reunidas" },
    { label: "Não se aplica", value: "nao-se-aplica" },
  ];

  async function sendProceduresData() {
    try {
      const res = await api.post(`/api/client/contact`, {
        subject: subject ? subject : "",
        department: department ? department : "",
        message: message ? message : "",
      });
    } catch (err) {
      console.log(err);
    }
  }

  function validateBody() {
    if (
      subject !== "" &&
      subject !== null &&
      department !== "" &&
      department !== null &&
      department !== undefined &&
      message !== "" &&
      message !== null
    ) {
      setIsOk(false);
    } else {
      setIsOk(true);
    }
  }

  useEffect(() => {
    validateBody();
  }, [subject, department, message]);

  useEffect(() => {
    setProgress(true);
    setTimeout(() => {
      setProgress(false);
    }, [500]);
  }, []);

  return (
    <>
      {progress ? (
        <C.loading>
          <CircularProgress style={{ color: "#0F2554" }} />
        </C.loading>
      ) : (
        <>
          <C.Container>
            <p id="mySchedules">Fale conosco</p>
          </C.Container>

          <C.ContainerForm>
            <C.SectionInput>
              <label>Assunto</label>
              <TextField
                fullWidth={true}
                size="small"
                id="outlined-basic"
                variant="outlined"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </C.SectionInput>

            <C.SectionInput>
              <label>Departamento</label>
              <Select
                id="meet"
                size="small"
                style={{ border: "1px solid #d8d6de" }}
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                {arrayDepartment.map((optionTypePix) => (
                  <MenuItem
                    key={optionTypePix.value}
                    value={optionTypePix.value}
                  >
                    {optionTypePix.label}
                  </MenuItem>
                ))}
              </Select>
            </C.SectionInput>

            <C.SectionInput>
              <label>Mensagem</label>
              <TextField
                multiline={true}
                fullWidth={true}
                rows={6}
                maxRows={6}
                size="small"
                id="outlined-basic"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </C.SectionInput>

            <C.ContainerBtnPrint>
              {isOk ? (
                <C.BtnPrint2 disabled={true} onClick={() => {}}>
                  <img alt="IconPrint" src={IconSend} width={30} />
                  <span>Enviar</span>
                </C.BtnPrint2>
              ) : (
                <C.BtnPrint
                  disabled={false}
                  onClick={() => {
                    sendProceduresData();
                  }}
                >
                  <img alt="IconPrint" src={IconSend} width={30} />
                  <span>Enviar</span>
                </C.BtnPrint>
              )}

              <span id="phoneLabel">Nossos telefones:</span>
              <span>(15) 2312-2212 | (15) 2312-2212 | (15) 2312-2212 </span>
            </C.ContainerBtnPrint>

            <C.ContainerBtnWhatsApp>
              <BtnWhatsApp text="Atendimento Whatsapp" funcao={redirect} />
            </C.ContainerBtnWhatsApp>
          </C.ContainerForm>
        </>
      )}
    </>
  );
}

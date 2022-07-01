import React, { useEffect, useState } from "react";
import * as C from "./styles";
import TextField from "@mui/material/TextField";
import IconSend from "../../../../assets/svgs/send.svg";
import BtnWhatsApp from "../../../../components/ButtonWhatsApp";

export default function ContactUs() {
  return (
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
          />
        </C.SectionInput>

        <C.SectionInput>
          <label>Departamento</label>
          <TextField
            fullWidth={true}
            size="small"
            id="outlined-basic"
            variant="outlined"
          />
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
          />
        </C.SectionInput>

        <C.ContainerBtnPrint>
          <C.BtnPrint>
            <img alt="IconPrint" src={IconSend} width={30} />
            <span>Enviar</span>
          </C.BtnPrint>

          <span id="phoneLabel">Nossos telefones:</span>
          <span>(15) 2312-2212 | (15) 2312-2212 | (15) 2312-2212 </span>
        </C.ContainerBtnPrint>

        <C.ContainerBtnWhatsApp>
          <BtnWhatsApp text="Atendimento Whatsapp" />
        </C.ContainerBtnWhatsApp>
      </C.ContainerForm>
    </>
  );
}

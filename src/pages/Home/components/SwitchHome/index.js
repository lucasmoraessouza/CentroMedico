import React, { useEffect, useState } from "react";
import * as C from "./styles";
import CalendarioIcon from "../../../../assets/svgs/calendario.svg";
import ProntuarioIcon from "../../../../assets/svgs/prontuario.svg";
import PranchetaIcon from "../../../../assets/svgs/prancheta.svg";
import CartaIcon from "../../../../assets/svgs/carta.svg";
import ButtonWhatsApp from "../../../../components/ButtonWhatsApp";
import { StateGlobal } from "../../../../context/GlobalContext";
import api from "../../../../services/index";
import { CircularProgress } from "@mui/material";

export default function SwitchHome(props) {
  const { setComponents, clientData, setClientData} =
    StateGlobal();
  const [progress, setProgress] = useState(true);
  


  async function getData() {
    try {
      const response = await api.get(`/api/client`);
      setClientData(response.data);
      setProgress(false);
    } catch (err) {
      console.log(err);
      setProgress(true);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <C.Content>
      {progress ? (
        <C.loading>
          <CircularProgress style={{color: '#0F2554'}}/>
        </C.loading>
      ) : (
        <>
          <C.Title>
            Olá, <b>{clientData.name}</b>
          </C.Title>
          <C.TextInformation>Meu ID: {clientData.cm_id} </C.TextInformation>
          <C.TitleBaseboard>Para você</C.TitleBaseboard>
          <C.Bar />
          <C.ContainerCard>
            <C.CardLine>
              <C.CardOption
                onClick={() => {
                  setComponents(1);
                }}
              >
                <img alt="icon" src={CalendarioIcon} width="40px" />
                <C.InfoCard>
                  Meus <br />
                  Agendamentos
                </C.InfoCard>
              </C.CardOption>
              <C.CardOption
                onClick={() => {
                  setComponents(2);
                }}
              >
                <img alt="icon" src={ProntuarioIcon} width="40px" />
                <C.InfoCard>
                  Meus <br />
                  Resultados
                </C.InfoCard>
              </C.CardOption>
            </C.CardLine>
          </C.ContainerCard>
          <C.TitleBaseboard>Centro Médico</C.TitleBaseboard>
          <C.Bar />
          <C.ContainerCard>
            <C.CardLine>
              <C.CardOption
                onClick={() => {
                  setComponents(3);
                }}
              >
                <img alt="icon" src={PranchetaIcon} width="40px" />
                <C.InfoCard>
                  Nossos
                  <br />
                  procedimentos
                </C.InfoCard>
              </C.CardOption>
              <C.CardOption
                onClick={() => {
                  setComponents(4);
                }}
              >
                <img alt="icon" src={CartaIcon} width="40px" />
                <C.InfoCard>
                  Fale
                  <br />
                  conosco
                </C.InfoCard>
              </C.CardOption>
            </C.CardLine>
          </C.ContainerCard>

          <C.ContainerBtnWhatsApp>
            <ButtonWhatsApp text="Solicitar exame" />
          </C.ContainerBtnWhatsApp>
        </>
      )}
    </C.Content>
  );
}

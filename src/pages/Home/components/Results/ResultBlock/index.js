import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import IconPrint from "../../../../../assets/svgs/printWhite.svg";
import { CircularProgress } from "@mui/material";

export default function ResultBlock(props) {
  const [progress, setProgress] = useState(true);

  function switchState() {
    if (!progress) {
      setProgress(true);
      setTimeout(() => {
        setProgress(false);
      }, [750]);
    } else {
      setProgress(false);
    }
  }

  function redirect() {
    window.open(`${props?.data?.result_url}`, "_blank");
  }

  useEffect(() => {
    switchState();
  }, [props?.data.open]);

  return (
    <C.Container>
          <C.Date>
            <p id="Day">{props?.data?.day}</p>
            <p>{props?.data?.month_text}</p>
            <p>{props?.data?.year}</p>
            <label id="datePlus">{props?.data?.hour}</label>
          </C.Date>

          <C.ContainerInfor>
            <C.SubContainerInfo>
              <C.InfoList>
                <p id="primaryTitle">{props?.data?.name}</p>
                <p>Centro Médico {/*- {props?.data?.address}*/}</p>
                <p id="forma">Telefone: (15) 3323.1234</p>
              </C.InfoList>
              {props?.data?.open === false ? (
                <C.ContainerAccordion>
                  <IoIosArrowDown
                    style={{ color: "#D8D6DE", fontSize: "25px" }}
                  />
                </C.ContainerAccordion>
              ) : (
                <C.ContainerAccordion>
                  <IoIosArrowUp
                    style={{ color: "#6E6B7B", fontSize: "25px" }}
                  />
                </C.ContainerAccordion>
              )}
            </C.SubContainerInfo>
            {props?.data?.open=== false ? (
              ""
            ) : (
              <C.ContainerBtnPrint>
                <C.BtnPrint
                  onClick={() => {
                    redirect();
                  }}
                >
                  <img alt="IconPrint" src={IconPrint} width={20} />
                  <span>Imprimir</span>
                </C.BtnPrint>
              </C.ContainerBtnPrint>
            )}
          </C.ContainerInfor>
    </C.Container>
  );
}

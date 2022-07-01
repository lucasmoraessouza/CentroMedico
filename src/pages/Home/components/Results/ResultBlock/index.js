import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPrinterFill } from "react-icons/bs";
export default function ResultBlock(props) {
  return (
    <C.Container>
      <C.Date>
        <p id="Day">23</p>
        <p>Setembro</p>
        <p>2022</p>
        <label id="datePlus">22:00</label>
      </C.Date>

      <C.ContainerInfor>
        <C.SubContainerInfo>
          <C.InfoList>
            <p id="primaryTitle">Exame nome X</p>
            <p>Centro Médico - Unidade: Unidade I</p>
            <p id="forma">Telefone: (15) 3323.1234</p>
          </C.InfoList>
          {props.openAccordion === false ? (
            <C.ContainerAccordion>
              <IoIosArrowDown style={{ color: "#D8D6DE", fontSize: "25px" }} />
            </C.ContainerAccordion>
          ) : (
            <C.ContainerAccordion>
              <IoIosArrowUp style={{ color: "#6E6B7B", fontSize: "25px" }} />
            </C.ContainerAccordion>
          )}
        </C.SubContainerInfo>
        {props.openAccordion === false ? (
          ""
        ) : (
          <C.ContainerBtnPrint>
            <C.BtnPrint>
              <BsPrinterFill />
              <span>Imprimir</span>
            </C.BtnPrint>
          </C.ContainerBtnPrint>
        )}
      </C.ContainerInfor>
    </C.Container>
  );
}

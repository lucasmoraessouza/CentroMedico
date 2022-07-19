import React from "react";
import * as C from "./styles";
import { BsCalendar } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

export default function ResultBlock(props) {
  return (
    <C.Container>
      <C.Date>
        <p id="Day">{props?.data?.day}</p>
        <p>{props?.data?.month_text}</p>
        <p>{props?.data?.year}</p>
        <label id="datePlus">{props?.data?.hour}</label>
      </C.Date>

      <C.ContainerInfor>
        <C.InfoList>
          <p id="primaryTitle">{props?.data?.name}</p>
          <p>Centro Médico - {props?.data?.address}</p>
          <p id="forma">Telefone: (15) 3323.1234</p>

          <C.InfMap>
            <p>
              <FaLocationArrow
                style={{ marginTop: "2px", marginRight: "3px" }}
              />
              Como chegar
            </p>
          </C.InfMap>
        </C.InfoList>
      </C.ContainerInfor>
    </C.Container>
  );
}

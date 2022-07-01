import React from "react";
import * as C from "./styles";
import { BsCalendar } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

export default function ResultBlock() {
  return (
    <C.Container>
      <C.Date>
        <p id="Day">23</p>
        <p>Setembro</p>
        <p>2022</p>
        <label id="datePlus">22:00</label>
      </C.Date>

      <C.ContainerInfor>
        <C.InfoList>
          <p id="primaryTitle">Exame nome X</p>
          <p>Centro Médico - Unidade: Unidade I</p>
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

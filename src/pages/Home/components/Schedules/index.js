import React, { useEffect, useState } from "react";
import * as C from "./styles";
import SchedulingBlock from "./SchedulingBlock/index";

export default function Schedules() {
  const ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const ArrayNumber = [1, 2, 3 ];

  return (
    <C.Container>
        <p id="mySchedules">Meus agendamentos</p>
      <div>
        {ArrayNumber.map((item, index) => {
          return (
            <div>
              <SchedulingBlock />
            </div>
          );
        })}
      </div>
    </C.Container>
  );
}

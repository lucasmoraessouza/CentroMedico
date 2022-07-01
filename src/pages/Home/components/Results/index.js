import React, { useEffect, useState } from "react";
import * as C from "./styles";
import ResultBlock from "./ResultBlock/index";

export default function Results() {
  const ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const ArrayNumber = [1, 2, 3 ];
  const [openAccordion, setOpenAccordion] = useState(false);

console.log(openAccordion)

  return (
    <C.Container>
      <p id="mySchedules">Meus resultados</p>
      <div>
        {ArrayNumber.map((item, index) => {
          return (
            <div
              onClick={() => {
                setOpenAccordion(prevState => prevState ? false : true )
              }}
            >
              <ResultBlock
                openAccordion={openAccordion}
                setOpenAccordion={setOpenAccordion}
              />
            </div>
          );
        })}
      </div>
    </C.Container>
  );
}

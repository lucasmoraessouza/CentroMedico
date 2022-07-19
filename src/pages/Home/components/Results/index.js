import React, { useEffect, useState } from "react";
import * as C from "./styles";
import ResultBlock from "./ResultBlock/index";
import IconFilter from "../../../../assets/svgs/IconFilter.svg";
import ModalFilterResult from "../../../../components/ModalFilterResult"


export default function Results() {
  const ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   const ArrayNumber = [1, 2, 3 ];
  const [openAccordion, setOpenAccordion] = useState(false);
  const [open, setOpen] = useState(false);

function switchState() {
  setOpen(prevState => prevState ? false : true)
}

  return (
    <>
    <C.Container>
      <C.ContainerTitle>
        <p id="mySchedules">Meus resultados</p>
        <button onClick={() => {switchState()}}>
          <img alt="iconFilter" src={IconFilter}></img>
          Filtrar
        </button>
      </C.ContainerTitle>

      <div>
        {ArrayNumber.map((item, index) => {
          return (
            <C.SBlock
              onClick={() => {
                setOpenAccordion((prevState) => (prevState ? false : true));
              }}
            >
              <ResultBlock
                openAccordion={openAccordion}
                setOpenAccordion={setOpenAccordion}
              />
            </C.SBlock>
          );
        })}
      </div>
    </C.Container>

{open === true ? <ModalFilterResult open={open} funcao={switchState} /> : ""}

</>
  );
}

import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconPrint from "../../../../assets/svgs/print.svg";

export default function Procedures() {
  const [valueSearch, setValueSearch] = useState("");
  const ArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <C.Container>
        <p id="mySchedules">Nossos procedimentos</p>
        <C.ContainerSearch>
          <FormControl
            sx={{ m: 1, width: "100%", paddingRight: "10px" }}
            variant="outlined"
          >
            <OutlinedInput
              fullWidth={true}
              placeholder="Pesquisar"
              size="small"
              id="outlined-adornment-weight"
              value={valueSearch}
              onChange={(e) => {
                setValueSearch(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <BiSearchAlt color="#6E6B7B" style={{ fontSize: "25px" }} />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
            />
          </FormControl>
        </C.ContainerSearch>
        <C.ContainerCard>
          {ArrayNumber.map(() => {
            return (
              <C.CardPrint>
                <span>Procedimento exame X</span>
                <img alt="IconPrint" src={IconPrint} />
              </C.CardPrint>
            );
          })}
        </C.ContainerCard>
      </C.Container>
    </>
  );
}

import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconPrint from "../../../../assets/svgs/print.svg";
import api from "../../../../services/index";
import { StateGlobal } from "../../../../context/GlobalContext";
import { CircularProgress } from "@mui/material";
import { X } from "react-feather";

export default function Procedures(props) {
  const [valueSearch, setValueSearch] = useState("");
  const { proceduresFilter, setProceduresFilter } = StateGlobal();
  const [proceduresData, setProceduresData] = useState([]);
  const [progress, setProgress] = useState(true);

  async function getProcesuresData() {
    setProgress(true);
    try {
      const res = await api.post(
        `/api/client/list/procedures?page=${proceduresFilter.currentPage}`,
        {
          content: proceduresFilter.content,
        }
      );
      console.log("res", res);

      if (
        proceduresFilter.onFilter === true &&
        proceduresFilter.currentPage === 1
      ) {
        setProceduresData([]);
      }

      setProceduresData((oldState) => [...oldState, ...res.data.data]);
      setProceduresFilter({
        ...proceduresFilter,
        lastPage: res.data.last_page,
      });

      setTimeout(() => {
        setProgress(false);
      }, [500]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (proceduresFilter?.currentPage > proceduresFilter?.lastPage) {
    } else {
      getProcesuresData();
    }
  }, [proceduresFilter.currentPage, proceduresFilter.onFilter]);

  function checkPage() {
    if (props.scrollTop + props.clientHeight === props.scrollHeight) {
      setProceduresFilter({
        currentPage: proceduresFilter.currentPage + 1,
        start: proceduresFilter.start,
        end: proceduresFilter.end,
        onFilter: proceduresFilter.onFilter,
        lastPage: proceduresFilter.lastPage,
      });
    }
  }

  useEffect(() => {
    checkPage();
  }, [props.scrollTop + props.clientHeight === props.scrollHeight]);

  function clearFilter() {
    setProceduresFilter({
      content: "",
      currentPage: 1,
      lastPage: 1,
      onFilter: false,
    });
    setProceduresData([]);
  }

  function redirect(e) {
    window.open(`${e}`, "_blank");
  }

  function sendData() {
    setProceduresFilter({
      content: proceduresFilter.content,
      currentPage: 1,
      lastPage: 2,
      onFilter: true,
    });
  }

  return (
    <>
      <C.Container>
        {progress ? (
          <C.loading>
            <CircularProgress style={{ color: "#0F2554" }} />
          </C.loading>
        ) : (
          <>
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
                  value={proceduresFilter.content}
                  onChange={(e) => {
                    setProceduresFilter({
                      ...proceduresFilter,
                      content: e.target.value,
                    });
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      {proceduresFilter.onFilter === true ? (
                        <C.IconX>
                          <X
                            color="#0F2554"
                            onClick={() => {
                              clearFilter();
                            }}
                          />
                        </C.IconX>
                      ) : (
                        <BiSearchAlt
                          color="#6E6B7B"
                          style={{ fontSize: "25px" }}
                          onClick={() => {
                            sendData();
                          }}
                        />
                      )}
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                />
              </FormControl>
            </C.ContainerSearch>
            <C.ContainerCard>
              {proceduresData.map((item, index) => {
                return (
                  <C.CardPrint>
                    <span>{item.name}</span>
                    <C.BtnPrint
                      onClick={() => {
                        redirect(item.print_url);
                      }}
                    >
                      <img alt="IconPrint" src={IconPrint} />
                    </C.BtnPrint>
                  </C.CardPrint>
                );
              })}
            </C.ContainerCard>
          </>
        )}
      </C.Container>
    </>
  );
}

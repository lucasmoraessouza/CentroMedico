import React, { useEffect, useState } from "react";
import * as C from "./styles";
import ResultBlock from "./ResultBlock/index";
import IconFilter from "../../../../assets/svgs/IconFilter.svg";
import ModalFilterResult from "../../../../components/ModalFilterResult";
import api from "../../../../services/index";
import { CircularProgress } from "@mui/material";
import { StateGlobal } from "../../../../context/GlobalContext";
import clearIconX from "../../../../assets/svgs/clearIconX.svg";

export default function Results(props) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(true);
  const [ResultData, setResultData] = useState([]);
  const { resultsFilter, setResultsFilter } = StateGlobal();

  function switchState() {
    setOpen((prevState) => (prevState ? false : true));
  }

  async function getResultData() {
    setProgress(true);
    try {
      const res = await api.post(
        `/api/client/list/results?page=${resultsFilter.currentPage}`,
        {
          start: "",
          end: "",
        }
      );

      if (resultsFilter.onFilter === true && resultsFilter.currentPage === 1) {
        setResultData([]);
      }

      const newArray = res.data.data;

      newArray.map((item, index) => {
        if (!newArray[index].open) {
          newArray[index] = {
            ...newArray[index],
            open: false,
          };
        }
      });
      setResultData((oldState) => [...oldState, ...newArray]);

      setResultsFilter({
        ...resultsFilter,
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
    if (resultsFilter?.currentPage > resultsFilter?.lastPage) {
    } else {
      getResultData();
    }
  }, [resultsFilter.currentPage, resultsFilter.onFilter]);

  function checkPage() {
    if (props.scrollTop + props.clientHeight === props.scrollHeight) {
      setResultsFilter({
        currentPage: resultsFilter.currentPage + 1,
        start: resultsFilter.start,
        end: resultsFilter.end,
        onFilter: resultsFilter.onFilter,
        lastPage: resultsFilter.lastPage,
      });
    }
  }

  useEffect(() => {
    checkPage();
  }, [props.scrollTop + props.clientHeight === props.scrollHeight]);

  function clearFilter() {
    setResultsFilter({
      start: "",
      end: "",
      currentPage: 1,
      lastPage: 1,
      onFilter: false,
    });
    setResultData([]);
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
            <C.ContainerTitle>
              <p id="mySchedules">Meus resultados</p>
              {resultsFilter.onFilter === true ? (
                <button
                  id="clearBtn"
                  onClick={() => {
                    clearFilter();
                  }}
                >
                  <img alt="iconFilter" src={clearIconX}></img>
                  Remover
                </button>
              ) : (
                <button
                  onClick={() => {
                    switchState();
                  }}
                >
                  <img alt="iconFilter" src={IconFilter}></img>
                  Filtrar
                </button>
              )}
            </C.ContainerTitle>

            <div>
              {ResultData.map((item, index) => {
                return (
                  <C.SBlock
                    onClick={() => {
                      if (ResultData[index].open === true) {
                        ResultData[index] = {
                          ...ResultData[index],
                          open: false,
                        };

                        setResultData((oldState) => [...oldState]);
                      } else {
                        ResultData[index] = {
                          ...ResultData[index],
                          open: true,
                        };
                        setResultData((oldState) => [...oldState]);
                      }

                      console.log(ResultData);
                    }}
                  >
                    <ResultBlock data={item} />
                  </C.SBlock>
                );
              })}
            </div>
          </>
        )}
      </C.Container>

      {open === true ? (
        <ModalFilterResult open={open} funcao={switchState} />
      ) : (
        ""
      )}
    </>
  );
}

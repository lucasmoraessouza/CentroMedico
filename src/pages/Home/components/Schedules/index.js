import React, { useEffect, useState } from "react";
import * as C from "./styles";
import SchedulingBlock from "./SchedulingBlock/index";
import IconFilter from "../../../../assets/svgs/IconFilter.svg";
import clearIconX from "../../../../assets/svgs/clearIconX.svg";
import ModalFilterScheduling from "../../../../components/ModalFilterScheduling";
import api from "../../../../services/index";
import { CircularProgress } from "@mui/material";
import { StateGlobal } from "../../../../context/GlobalContext";

export default function Schedules(props) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(true);
  const [schedulingData, setSchedulingData] = useState([]);
  function switchState() {
    setOpen((prevState) => (prevState ? false : true));
  }
  const { scheduleFilter, setScheduleFilter } = StateGlobal();

  async function getSchedulingData() {
    setProgress(true);
    try {
      const res = await api.post(
        `/api/client/list/schedules?page=${scheduleFilter.currentPage}`,
        {
          start: scheduleFilter?.start ? scheduleFilter?.start : "",
          end: scheduleFilter?.end ? scheduleFilter?.end : "",
        }
      );

      if (
        scheduleFilter.onFilter === true &&
        scheduleFilter.currentPage === 1
      ) {
        setSchedulingData([]);
      }

      setSchedulingData((oldState) => [...oldState, ...res.data.data]);
      setScheduleFilter({
        ...scheduleFilter,
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
    if (scheduleFilter?.currentPage > scheduleFilter?.lastPage) {
    } else {
    getSchedulingData();
    }
  }, [scheduleFilter.currentPage, scheduleFilter.onFilter ]);

  function checkPage() {
    if (props.scrollTop + props.clientHeight === props.scrollHeight) {
      setScheduleFilter({
        currentPage: scheduleFilter.currentPage + 1,
        start: scheduleFilter.start,
        end: scheduleFilter.end,
        onFilter: scheduleFilter.onFilter,
        lastPage: scheduleFilter.lastPage,
      });
    }
  }

  useEffect(() => {
    checkPage();
  }, [props.scrollTop + props.clientHeight === props.scrollHeight]);

  function clearFilter() {
    setScheduleFilter({
      start: "",
      end: "",
      currentPage: 1,
      lastPage: 1,
      onFilter: false,
    });
    setSchedulingData([]);
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
              <p id="mySchedules">Meus agendamentos</p>
              {scheduleFilter.onFilter === true ? (
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

            <C.Block>
              {schedulingData?.map((item, index) => {
                return (
                  <div>
                    <SchedulingBlock data={item} />
                  </div>
                );
              })}
            </C.Block>
          </>
        )}
      </C.Container>

      {open === true ? (
        <ModalFilterScheduling open={open} funcao={switchState} />
      ) : (
        ""
      )}
    </>
  );
}

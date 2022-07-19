import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import SecondButton from "../Button/index";
import { X } from "react-feather";
// import { StateGlobal } from "../../Utility/Context/GlobalContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "#FFF",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  paddingLeft: "30px",
};

export default function ModalFilterResult(props) {
  // const { bodyFilterHistoric , setBodyFilterHistoric } = StateGlobal()
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [validate, setValidate] = useState(true);

  function Disabled() {
    if (
      startDate === undefined ||
      startDate === "" ||
      endDate === undefined ||
      endDate === ""
    ) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }

  useEffect(() => {
    Disabled();
  }, [startDate, endDate]);

  // function sendFilter() {
  //   setBodyFilterHistoric({
  //     start: startDate,
  //       end: endDate,
  //       page: 1,
  //       send: true
  //   })

  //   props.funcao()
  // }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={props.open}
        onClose={props.funcao}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <X
            color="#0F2554"
            style={{ position: "absolute", right: "15px", top: "15px" }}
            onClick={props.funcao}
          />
          <Typography
            variant="h6"
            component="h2"
            style={{
              color: "#0F2554",
              marginBottom: "10px",
              fontSize: "20px",
              fontWeight: 600,
              fontFamily: "Montserrat",
            }}
          >
            Filtrar por período:
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label id="from"> De</label>
            <TextField
              size="small"
              id="from"
              type="date"
              style={{ marginBottom: "15px" }}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
            <label id="to"> Até</label>
            <TextField
              size="small"
              id="to"
              type="date"
              style={{ marginBottom: "30px" }}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
          <SecondButton
            text="Filtrar"
            disabled={validate}
          />
        </Box>
      </Modal>
    </div>
  );
}

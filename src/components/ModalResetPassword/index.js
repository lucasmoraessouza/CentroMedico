import React, { useState, useEffect } from "react";
import * as C from "./styles";
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

export default function ModalResetPassword(props) {
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
            Alterar senha
          </Typography>
          <C.ContainerForm>
            <C.SectionInput>
              <label>Senha atual</label>
              <TextField
                fullWidth={true}
                size="small"
                id="outlined-basic"
                variant="outlined"
              />
            </C.SectionInput>

            <C.SectionInput>
              <label>nova senha</label>
              <TextField
                fullWidth={true}
                size="small"
                id="outlined-basic"
                variant="outlined"
              />
            </C.SectionInput>

            <C.SectionInput>
              <label>Confirmar nova senha</label>
              <TextField
                fullWidth={true}
                size="small"
                id="outlined-basic"
                variant="outlined"
              />
            </C.SectionInput>
          </C.ContainerForm>
          <div style={{marginTop: '20px'}}>
            <SecondButton
              text="Atualizar senha"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

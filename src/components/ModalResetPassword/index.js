import React, { useState, useEffect } from "react";
import * as C from "./styles";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import SecondButton from "../Button/index";
import { X } from "react-feather";
import api from "../../services";
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
  const [password, setPassword] = useState("");
  const [new_password, setNew_password] = useState("");
  const [aux_password, setAux_password] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  function validateButton() {
    if (
      password?.length >= 8 &&
      new_password?.length >= 8 &&
      aux_password.length >= 8 &&
      new_password === aux_password
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  async function handleUpdateInfo() {
    try {
      setIsLoading(true);
      const res = await api.put("/api/client/update", {
        password: password,
        new_password: new_password,
      });
      if (res.data.error === "false") {
        props.funcao();
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    validateButton();
  }, [new_password, aux_password, password]);

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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </C.SectionInput>

            <C.SectionInput>
              <label>Nova senha</label>
              <TextField
                fullWidth={true}
                size="small"
                id="outlined-basic"
                variant="outlined"
                value={aux_password}
                onChange={(e) => setAux_password(e.target.value)}
              />
            </C.SectionInput>

            <C.SectionInput>
              <label>Confirmar nova senha</label>
              <TextField
                fullWidth={true}
                size="small"
                id="outlined-basic"
                variant="outlined"
                value={new_password}
                onChange={(e) => setNew_password(e.target.value)}
              />
            </C.SectionInput>
          </C.ContainerForm>
          <div style={{ marginTop: "20px" }}>
            <SecondButton
              text="Atualizar senha"
              disabled={isDisabled}
              funcao={handleUpdateInfo}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

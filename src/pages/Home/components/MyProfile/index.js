import React, { useEffect, useState } from "react";
import * as C from "./styles";
import ImgPerfil from "../../../../assets/images/profile-image.png";
import IconEdit from "../../../../assets/svgs/edit.svg";
import TextField from "@mui/material/TextField";
import IconBlock from "../../../../assets/svgs/block.svg";
import IconCheck from "../../../../assets/svgs/IconCheck.svg";
import ModalResetPassword from "../../../../components/ModalResetPassword";

export default function MyProfile() {
  const [open, setOpen] = useState(false);

  function switchState() {
    setOpen((prevState) => (prevState ? false : true));
  }

  return (
    <>
      <C.Container>
        <p id="mySchedules">Meu perfil</p>
      </C.Container>

      <C.ContainerInfoImg>
        <C.ContainerImg>
          <img alt="Perfil" src={ImgPerfil} />
          <C.ItemIconEdit>
            <img alt="iconEdit" src={IconEdit} />
          </C.ItemIconEdit>
        </C.ContainerImg>

        <span>Meu ID:</span>
        <span>343231-21</span>
      </C.ContainerInfoImg>

      <C.ContainerForm>
        <C.SectionInput>
          <label>Nome</label>
          <TextField
            fullWidth={true}
            size="small"
            id="outlined-basic"
            variant="outlined"
          />
        </C.SectionInput>

        <C.SectionInput>
          <label>E-mail</label>
          <TextField
            fullWidth={true}
            size="small"
            id="outlined-basic"
            variant="outlined"
          />
        </C.SectionInput>

        <C.SectionInput>
          <label>Telefone</label>
          <TextField
            fullWidth={true}
            size="small"
            id="outlined-basic"
            variant="outlined"
          />
        </C.SectionInput>

        <C.BtnBlock
          onClick={() => {
            switchState();
          }}
        >
          <img alt="IconBlock" src={IconBlock} width={20} />
          <span>alterar senha de acesso</span>
        </C.BtnBlock>

        <C.BtnAtt>
          <img alt="IconBlock" src={IconCheck} width={20} />
          <span>Atualizar informações</span>
        </C.BtnAtt>
      </C.ContainerForm>

      {open === true ? (
        <ModalResetPassword open={open} funcao={switchState} />
      ) : (
        ""
      )}
    </>
  );
}

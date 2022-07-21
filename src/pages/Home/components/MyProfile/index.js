import React, { useEffect, useState } from "react";
import * as C from "./styles";
import ImgPerfil from "../../../../assets/images/logoCentroMedico.png";
import IconEdit from "../../../../assets/svgs/edit.svg";
import TextField from "@mui/material/TextField";
import IconBlock from "../../../../assets/svgs/block.svg";
import IconCheck from "../../../../assets/svgs/IconCheck.svg";
import ModalResetPassword from "../../../../components/ModalResetPassword";
import api from "../../../../services";
import { StateGlobal } from "../../../../context/GlobalContext";
import { CircularProgress } from "@mui/material";
import { PhoneMask } from "../../../../components/Masks";

export default function MyProfile() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(true);
  const [loadFoto, setLoadFoto] = useState(false);
  const { clientData, setClientData } = StateGlobal();
  const [isOk, setIsOk] = useState(true);

  function switchState() {
    setOpen((prevState) => (prevState ? false : true));
  }

  function getBase64(file) {
    if (file.size > 10000000) {
      alert(
        "Documento maior que 10MB, por favor verifique o tamanho do arquivo."
      );
      return;
    }

    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function () {
      putFotoPerfil(reader.result);
    };
  }

  async function putFotoPerfil(image) {
    console.log(image);

    setLoadFoto(true);
    try {
      const response = await api.post("/api/client/picture", { photo: image });

      console.log(response.data);

      if (response.data) {
        setClientData({ ...clientData, photo: response.data.picture_url });
        localStorage.setItem("attPhoto", true);
        window.location.reload(true);
      }
    } catch (err) {}
  }

  async function putDataPerfil(image) {
    try {
      const response = await api.put("/api/client/update", {
        name: clientData?.name,
        email: clientData?.email,
        phone: clientData?.phone,
      });
      if (response.data) {
        setProgress(true);
        setTimeout(() => {
          setProgress(false);
        }, [1000]);
      }
    } catch (err) {}
  }

  function validateBody() {
    if (
      clientData?.name !== "" &&
      clientData?.name !== null &&
      clientData?.email !== "" &&
      clientData?.email !== null &&
      clientData?.phone !== "" &&
      clientData?.phone !== null
    ) {
      setIsOk(false);
    } else {
      setIsOk(true);
    }
  }

  useEffect(() => {
    validateBody();
  }, [clientData]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(false);
    }, [1000]);
  });

  return (
    <>
      {progress ? (
        <C.loading>
          <CircularProgress style={{ color: "#0F2554" }} />
        </C.loading>
      ) : (
        <>
          <C.Container>
            <p id="mySchedules">Meu perfil</p>
          </C.Container>

          <C.ContainerInfoImg>
            <C.ContainerImg>
              <C.Perfil
                alt="Perfil"
                src={clientData.photo !== null ? clientData.photo : ImgPerfil}
              />

              <label htmlFor="addFoto">
                <C.ItemIconEdit>
                  {loadFoto ? (
                    <div style={{ paddingTop: "2px" }}>
                      <CircularProgress size={20} style={{ color: "#fff" }} />
                    </div>
                  ) : (
                    <img alt="iconEdit" src={IconEdit} />
                  )}

                  <input
                    id="addFoto"
                    type="file"
                    hidden
                    onChange={(event) => getBase64(event.target.files[0])}
                  />
                </C.ItemIconEdit>
              </label>
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
                value={clientData?.name}
                onChange={(e) => {
                  setClientData({
                    ...clientData,
                    name: e.target.value,
                  });
                }}
              />
            </C.SectionInput>

            <C.SectionInput>
              <label>E-mail</label>
              <TextField
                fullWidth={true}
                size="small"
                id="outlined-basic"
                variant="outlined"
                value={clientData?.email}
                onChange={(e) => {
                  setClientData({
                    ...clientData,
                    email: e.target.value,
                  });
                }}
              />
            </C.SectionInput>

            <C.SectionInput>
              <label>Telefone</label>
              <TextField
                fullWidth={true}
                type="tell"
                size="small"
                id="outlined-basic"
                variant="outlined"
                value={
                  clientData?.phone
                    ? PhoneMask(clientData?.phone)
                    : clientData?.phone
                }
                onChange={(e) => {
                  setClientData({
                    ...clientData,
                    phone: e.target.value,
                  });
                }}
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

            {isOk ? (
              <C.BtnAtt2
                disabled={true}
                onClick={() => {
                  // putDataPerfil();
                }}
              >
                <img alt="IconBlock" src={IconCheck} width={20} />
                <span>Atualizar informações</span>
              </C.BtnAtt2>
            ) : (
              <C.BtnAtt
                onClick={() => {
                  putDataPerfil();
                }}
              >
                <img alt="IconBlock" src={IconCheck} width={20} />
                <span>Atualizar informações</span>
              </C.BtnAtt>
            )}
          </C.ContainerForm>

          {open === true ? (
            <ModalResetPassword open={open} funcao={switchState} />
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}

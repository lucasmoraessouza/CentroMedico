import * as C from "./styles";
import profileImg from "../../assets/images/profile-image.png";
import { Menu } from "react-feather";
import { StateGlobal } from "../../context/GlobalContext";
import { IoIosArrowBack } from "react-icons/io";

export default function HeaderHome(props) {
  const { components, setComponents } = StateGlobal();
  const backValue = localStorage.getItem("backValue");

  function screenChangeBack() {
    if (backValue) {
      props.setOpenLeft(true);
    } else {
      setComponents(0);
    }
  }

  return (
    <>
      {components !== 0 ? (
        <C.Header>
          <C.ActionBack
            onClick={() => {
              screenChangeBack();
            }}
          >
            <IoIosArrowBack
              fill="#fff"
              style={{ height: "2em", width: "2em" }}
            />
            <span>Voltar</span>
          </C.ActionBack>
          <img alt="profile" src={profileImg} />
        </C.Header>
      ) : (
        <C.Header>
          <Menu
            color="#FFF"
            width={30}
            height={30}
            strokeWidth={2}
            onClick={() => {
              props.setOpenLeft(true);
            }}
          />
          <img alt="profile" src={profileImg} />
        </C.Header>
      )}
    </>
  );
}

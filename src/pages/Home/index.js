import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { StateGlobal } from "../../context/GlobalContext";
import HeaderHome from "../../components/HeaderHome";
import FooterHome from "../../components/FooterHome";
import SwitchHome from "./components/SwitchHome";
import Schedules from "./components/Schedules";
import Results from "./components/Results";
import Procedures from "./components/Procedures";
import ContactUs from "./components/ContactUs";
import LeftMenu from "../../components/LeftMenu";
import MyProfile from "./components/MyProfile";

export default function Home() {
  const { components } = StateGlobal();
  const [openLeft, setOpenLeft] = useState(false);
  const [progress, setProgress] = useState(true);

  return (
    <>
      {openLeft === true ? (
        <LeftMenu openLeft={openLeft} setOpenLeft={setOpenLeft} />
      ) : (
        <C.Container>
          <div>
            <HeaderHome openLeft={openLeft} setOpenLeft={setOpenLeft} />
          </div>

          <C.Section>
            {components === 0 ? (
              <SwitchHome />
            ) : components === 1 ? (
              <Schedules />
            ) : components === 2 ? (
              <Results />
            ) : components === 3 ? (
              <Procedures />
            ) : components === 4 ? (
              <ContactUs />
            ) : components === 5 ? (
              <MyProfile />
            ) : (
              ""
            )}
          </C.Section>
          <div>
            <FooterHome />
          </div>
        </C.Container>
      )}
    </>
  );
}

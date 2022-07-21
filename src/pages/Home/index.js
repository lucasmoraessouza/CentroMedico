import React, { useEffect, useState, useRef } from "react";
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
  const listInnerRef = useRef();
  const [scrolls, setScrolls] = useState({
    scrollTop: null,
    clientHeight: null,
    scrollHeight: null,
  });

  const onScroll = () => {
    let { scrollTop, clientHeight, scrollHeight } = listInnerRef.current;
    if (listInnerRef.current) {
      setScrolls({
        scrollTop: scrollTop,
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
      });
    }
  };

  return (
    <>
      {openLeft === true ? (
        <LeftMenu openLeft={openLeft} setOpenLeft={setOpenLeft} />
      ) : (
        <C.Container>
          <div>
            <HeaderHome openLeft={openLeft} setOpenLeft={setOpenLeft} />
          </div>

          <C.Section onScroll={() => onScroll()} ref={listInnerRef}>
            {components === 0 ? (
              <SwitchHome />
            ) : components === 1 ? (
              <Schedules
                scrollTop={scrolls.scrollTop}
                clientHeight={scrolls.clientHeight}
                scrollHeight={scrolls.scrollHeight}
              />
            ) : components === 2 ? (
              <Results
                scrollTop={scrolls.scrollTop}
                clientHeight={scrolls.clientHeight}
                scrollHeight={scrolls.scrollHeight}
              />
            ) : components === 3 ? (
              <Procedures
                scrollTop={scrolls.scrollTop}
                clientHeight={scrolls.clientHeight}
                scrollHeight={scrolls.scrollHeight}
              />
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

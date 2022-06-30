import { GlobalStyle } from "./assets/global";
import { ThemeProvider } from "styled-components";
import theme from "./assets/themes/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import LeftMenu from "./components/LeftMenu";
import Home from "./pages/Home";
import ContextProvider from "./context/registerContext";

function App() {
  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;

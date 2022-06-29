import { GlobalStyle } from "./assets/global";
import { ThemeProvider } from "styled-components";
import theme from "./assets/themes/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import LeftMenu from "./components/LeftMenu";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/left" element={<LeftMenu />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import { GlobalStyle } from "./assets/global";
import { ThemeProvider } from "styled-components";
import theme from "./assets/themes/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ContextProvider from "./context/GlobalContext";
import StepOne from "./pages/Register/StepOne";
import StepTwo from "./pages/Register/StepTwo";
import StepThree from "./pages/Register/StepThree";
import StepFour from "./pages/Register/StepFour";
import StepFive from "./pages/Register/StepFive";

function App() {
  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register/1" element={<StepOne />} />
              <Route exact path="/register/2" element={<StepTwo />} />
              <Route exact path="/register/3" element={<StepThree />} />
              <Route exact path="/register/4" element={<StepFour />} />
              <Route exact path="/register/5" element={<StepFive />} />

              <Route exact path="/home" element={<Home />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/LoginCredencials/index";
import Register from "./components/RegisterCredentials/index";
import LandingPage from "../src/components/landing/LandingPage"
import RealTime from "./components/landing/RealTime";
import "../../client/src/components/languageTranslator/i18n.js"
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/languageTranslator/LanguageSelector.js";
function App() {
  const {t} = useTranslation()
  return (
    <div className="app-wrapper">
      <LanguageSelector/>
      <h1>{t("greeting")}</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/realtime" element={<RealTime/>}/>   
        </Routes>
    </div>
  );
}

export default App;

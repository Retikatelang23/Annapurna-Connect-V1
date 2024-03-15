import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/LoginCredencials/index";
import Register from "./components/RegisterCredentials/index";
import LandingPage from "../src/components/landing/LandingPage"
import RealTime from "./components/landing/RealTime";
function App() {
  return (
    <div className="app-wrapper">
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

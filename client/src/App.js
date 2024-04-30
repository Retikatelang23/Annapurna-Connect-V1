import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/LoginCredencials/index";
import Register from "./components/RegisterCredentials/index";
import RealTime from "./components/landing/RealTime";
import LandingPage from "./components/landing/LandingPageIntegration/LandingPage";
import ColdStorage from "./components/landing/ColdStorage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/signup"
          element={
            <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/realtime" element={<RealTime />} />
        <Route path="/coldstorage" element={<ColdStorage />} />
      </Routes>
    </div>
  );
}

export default App;

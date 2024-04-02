import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/LoginCredencials/index";
import Register from "./components/RegisterCredentials/index";
import LandingPage from "../src/components/landing/LandingPage";
import RealTime from "./components/landing/RealTime";
import MyProductMain from "./components/landing/myProductsSection/MyProductMain";
import AddProducts from "./components/landing/myProductsSection/AddProducts";
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
        <Route path="/myproducts" element={<MyProductMain />} />
        <Route path="/addproducts" element={<AddProducts />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "../../styles/AboutUs.css";
import Navbar from "./Navbar";
import IndexImg from "./IndexImg";
import AboutUs from "./AboutUs";
import Footer from "./Footer";


const HomePage = () => {
  return (
    <div>
        <Navbar />
        <IndexImg />
        <AboutUs />
        <Footer />
    </div>
  );
};

export default HomePage;

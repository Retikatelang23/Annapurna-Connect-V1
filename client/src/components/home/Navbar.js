import React from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import LanguageSelector from "../LanguageTranslator/LanguageSelector";

const Navbar = () => {
  // const {t} = useTranslation();

  return (
    <div className="navbar-main">
      {/* <LanguageSelector/> */}
      <div className="container">
        <div className="logo-container">
          {/* <h1>{t("greeting")}</h1> */}
          <Link to="/">
            <h1>Annapurna Connect</h1>
          </Link>
        </div>
        <ul className="nav-list" id="navList">
          {/* <li className="nav-dropdown">
            <select className="dropbtn" >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
              </select>
          </li> */}

          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

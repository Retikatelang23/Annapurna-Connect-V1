import React from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
// import { useState } from "react";


const Navbar = () => {

  // const [selectedOption, setSelectedOption] = useState('');
  // const { i18n } = useTranslation();

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   i18n.changeLanguage(event.target.value);
  // };
  
  // const changeLanguage = (selectedOption) => {
  //   i18n.changeLanguage(selectedOption);
  // }

  // value={selectedOption} onChange={handleOptionChange}

  return (
    <div className="navbar-main">
      <div className="container">
        <div className="logo-container">
          <h1>Annapurna Connect</h1>
        </div>
        <ul className="nav-list" id="navList">
        
          <li className="nav-dropdown">
            <select className="dropbtn" >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
              </select>
          </li>

          <li>
            <Link to="/login"></Link>
          </li>
          <li className="nav-item">
            <Link to="/landingpage">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/landingpage">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

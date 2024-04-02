import React from 'react';
import { Link } from "react-router-dom";
import "../../styles/MainNavbar.css";
import RealTime from './RealTime';
import MyProductMain from './myProductsSection/MyProductMain';

const MainNavbar = () => {
  return (
    <div>
      <div className="navbar-main">
      <div className="container">
        <div className="logo-container">
          <h1>Annapurna Connect</h1>
        </div>
        <ul className="nav-list" id="navList">
          <li className="nav-item">
            <Link to="/landingpage">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/myproducts" element={<MyProductMain/>}>My Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/realtime" element={<RealTime/>}>Real Time Prices</Link>
          </li>
          <li className="nav-item">
            <Link to="/bidding">Bidding System</Link>
          </li>
          <li className="nav-item">
            <Link to="/coldstorage">Cold Storage</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default MainNavbar

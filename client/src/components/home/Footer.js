import React from "react";
import "../../styles/Footer.css";
import mapPin from "../../assets/map-pin.svg";
import mail from "../../assets/mail.svg"
import phoneCall from "../../assets/phoneCall.svg"

const Footer = () => {
  return (
    <div>
      <div class="footer-container">
        <div class="content">
          <h1 class="title">Get In Touch</h1>
          <div className="flex gap-3 location-section">
            <img className="location-img" src={mapPin}></img>
            <p class="text-white mb-0">Location, City, Country</p>
          </div>

          <div className="flex gap-3 mail-section">
            <img src={mail}></img>
            <p class="text-white mb-0">annapurnaConnect@gmail.com</p>
          </div>

          <div className="flex gap-3 phoneCall-section">
            <img src={phoneCall}></img>
            <p class="text-white mb-0">+91 1234567890</p>
          </div>

          <div class="social-icons">
            <a href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="#">
              <i class="fab fa-github-square"></i>
            </a>
            <a href="#">
              <i class="fab fa-dribbble-square"></i>
            </a>
          </div>
        </div>
        <div class="menu">
          <div class="menu-group">
            <h6 class="menu-title">Solutions</h6>
            <ul class="menu-list">
              <li>Analytics</li>
              <li>Marketing</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div class="menu-group">
            <h6 class="menu-title">Support</h6>
            <ul class="menu-list">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div class="menu-group">
            <h6 class="menu-title">Company</h6>
            <ul class="menu-list">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
          <div class="menu-group">
            <h6 class="menu-title">Legal</h6>
            <ul class="menu-list">
              <li>Claim</li>
              <li>Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

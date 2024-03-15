import React from "react";
import "../../styles/Footer.css"

const Footer = () => {
  return (
    <div>
      <div class="footer-container">
        <div class="content">
          <h1 class="title">REACT.</h1>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
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

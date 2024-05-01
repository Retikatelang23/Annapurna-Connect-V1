import React from "react";
import "../../../styles/AllLandingSections.css";
import vegetable from "../../../assets/vegetable.png";
import fruits from "../../../assets/fruits.png";
import Counterup from "../../landing/LandingPageIntegration/Counterup";
import star from "../../../assets/star.png";
import team from "../../../assets/team.png";
import verified from "../../../assets/verified.png";
import drink from "../../../assets/drink.png";
import mapPin from "../../../assets/map-pin.svg";
import mail from "../../../assets/mail.svg"
import phoneCall from "../../../assets/phoneCall.svg"

const AllLandingSections = () => {
  return (
    <div>
      {/****** Banner start **********/}
      <div className="banner">
        <div className="banner_wrapper">
          <div className="row_start">
            {/* Vegetable Section */}
            <div className="section1">
              <div className="section1-txt">
                <h2>Organic Vegetables</h2>
                <div className="section1-align">
                  <p>
                    Organic vegetables are grown without synthetic chemicals,
                    such as pesticides, fertilizers, hormones, or antibiotics,
                    and do not contain genetically modified organisms (GMOs).
                  </p>
                  <img src={vegetable}></img>
                </div>
              </div>
            </div>
            {/* Fruit Section */}
            <div className="section2">
              <div className="section2-txt">
                <h2 className="">Organic Fruits</h2>
                <div className="section2-align">
                  <p className="">
                    Organic farming practices of fruits are designed to be
                    environmentally friendly and sustainable, and may reduce
                    pollution, conserve water, reduce soil erosion, increase
                    soil fertility, and use less energy.
                  </p>
                  <img src={fruits}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/****** Banner end **********/}

      {/*******facts about us start********/}
      <div className="factsAbout">
        <div className="factsAboutdiv">
          <div className="row-begin">
            {/* Fact 1 */}
            <div className="facts">
              <div className="fact-item">
                <div className="fact-icon">
                  <img src={star}></img>
                </div>
                <div className="fact-content">
                  <h2>Our Experience</h2>
                  <Counterup initialValue={334} delay={10} duration={2000} />
                </div>
              </div>
            </div>
            {/* Fact 2 */}
            <div className="facts">
              <div className="fact-item">
                <div className="fact-icon">
                  <img src={team}></img>
                </div>
                <div className="fact-content">
                  <h2>Farm Specialist</h2>
                  <Counterup initialValue={450} delay={10} duration={2000} />
                </div>
              </div>
            </div>
            {/* Fact 3 */}
            <div className="facts">
              <div className="fact-item">
                <div className="fact-icon">
                  <img src={verified}></img>
                </div>
                <div className="fact-content">
                  <h2>Complete Project</h2>
                  <Counterup initialValue={267} delay={10} duration={2000} />
                </div>
              </div>
            </div>
            {/* Fact 4 */}
            <div className="facts">
              <div className="fact-item">
                <div className="fact-icon">
                  <img src={drink}></img>
                </div>
                <div className="fact-content">
                  <h2>Happy Clients</h2>
                  <Counterup initialValue={382} delay={10} duration={2000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*******facts about us end********/}

      {/**********footer start**************/}
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
      {/**********footer end**************/}

      {/* instructions to use our website
      how to take most advantage of our website */}
    </div>
  );
};

export default AllLandingSections;

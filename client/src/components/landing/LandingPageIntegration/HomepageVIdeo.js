import React from "react";
import farmingLandingVideo from "../../../assets/farmingLandingVideo.mp4"
import "../../../styles/HomepageVIdeo.css"

const HomepageVIdeo = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video className="video" src={farmingLandingVideo} autoPlay loop muted/>
      <div className="content">
      </div>
    </div>
  );
};

export default HomepageVIdeo;

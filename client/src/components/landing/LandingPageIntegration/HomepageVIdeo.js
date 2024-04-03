import React from "react";
import farmingVideo from "../../../assets/farmerVideo.mp4"
import "../../../styles/HomepageVIdeo.css"

const HomepageVIdeo = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video className="video" src={farmingVideo} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
};

export default HomepageVIdeo;

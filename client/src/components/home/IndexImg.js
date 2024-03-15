import React from "react";
import homeImg from "../../assets/indian_farmers.jpg"
import "../../styles/IndexImg.css"
import { ReactTyped } from "react-typed";

const IndexImg = () => {
  return (
    <div>
      <div className="home-content">
        {/* image */}
        <div className="img-box">
          <img src={homeImg} alt="home" className="home-image" loading="lazy" />
        </div>
        

        {/* heading */}
        <h1 className="home-heading">Annapurna Connect</h1>

        <div className="type-heading">
          <p>
            Welcome to 
          </p>
          <ReactTyped
              strings={["Cultivator",
                        "Grower",
                        "Harvester",
                        "Planter", 
                        "Agronomist", 
                        "Tiller",
                        "Purchaser", 
                        "Consumer", 
                        "User", 
                        "Vendee", 
                        "Customer", 
                        "End user"]}
              typeSpeed={80}
              backSpeed={80}
              loop
            ></ReactTyped>
        </div>
      </div>
    </div>
  );
};

export default IndexImg;

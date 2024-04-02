import React from "react";
import "../../styles/AboutUs.css";
import clock from "../../assets/clock.png";
import bidding from "../../assets/bid.png";
import coldStorage from "../../assets/coldStorage.png";
// import LanguageSelector from "../LanguageTranslator/LanguageSelector";
// import { useTranslation } from "react-i18next";

const AboutUs = () => {
  // const {t} = useTranslation();

  // const line1 = t("line1");
  // console.log(line1)
  return (
    <div>
      {/* About Us */}
      {/* <LanguageSelector/> */}
      <div>
        <div className="aboutUs">About Us</div>
        {/* <h2 className="Questions">{t("line1")}</h2> */}
        <h2 className="Questions">What Exactly is Annapurna Connect?</h2>

        <p className="Answers">
          Welcome to Annapurna-Connect, a cutting-edge, 100% free platform
          designed for seamless connectivity among farmers, producers, and
          consumers. Our platform facilitates a sustainable and efficient
          exchange of agricultural products, fostering a robust and
          interconnected agricultural ecosystem. Experience the ease of use as
          we empower farmers to connect with producers and consumers, ensuring a
          transparent and mutually beneficial marketplace. Join
          Annapurna-Connect today for a smarter and more sustainable approach to
          agriculture.
        </p>

        <h2 className="Questions">What we do?</h2>

        <p className="Answers">
          We offer a dynamic platform that seamlessly connects farmers,
          producers, and consumers, fostering a sustainable and efficient
          exchange of agricultural products. Our mission is to empower and
          streamline the agricultural ecosystem, providing a collaborative space
          for all stakeholders. Join us in creating a more connected,
          sustainable, and prosperous future for agriculture.
        </p>

        <h2 className="Questions">
          How is this website beneficial for farmers?
        </h2>

        <p className="Answers">
          At Annapurna, we empower farmers by providing them with substantial
          control over pricing, effectively eliminating the need for
          intermediaries. Our platform is designed to ensure that farmers can
          directly engage with the market, resulting in fairer prices and
          greater financial autonomy. Join us in revolutionizing the
          agricultural landscape, putting the power back into the hands of those
          who cultivate our sustenance.
        </p>

        <h2 className="Questions">
          How is this website beneficial for buyers?
        </h2>

        <p className="Answers">
          At Annapurna, we prioritize consumer choice by offering a platform
          that provides flexibility in selecting from a diverse range of crops.
          We believe in giving consumers the freedom to choose the agricultural
          products that best meet their needs. Join us and experience a
          marketplace that empowers both farmers and consumers, fostering a
          mutually beneficial and flexible exchange of quality crops.
        </p>
      </div>

      {/* Vision */}
      <div>
        <h2 class="vision">Vision</h2>
        <div class="row">
          <div class="vision-circle"></div>
          <div class="vision-circle"></div>
          <div class="vision-circle"></div>
        </div>

        <div class="vision-heading">
          <p class="heading">Direct Connectivity</p>
          <p class="heading">Efficient And Reliable Exchange</p>
          <p class="heading">Control Over Pricing</p>
        </div>
      </div>

      {/*services */}
      <div>
        <h2 className="services">Services</h2>
      </div>

      <div className="service-boxes">
        <div class="real-time">
          <div class="realtime-img">
            <img src={clock} alt="Real Time" />
          </div>
          <div class="realtime-container">
            <h2>REAL TIME UPDATE</h2>
            <h3>Know Real time Price of Vegetables</h3>
            <p>
              On Annapurna-Connect we have a separate section for buyers to view
              the real time price of the crops in the market and compare and
              make decision to buy the crops accordingly.
            </p>
          </div>
        </div>

        <div class="bidding">
          <div class="bidding-img">
            <img src={bidding} alt="Bidding" />
          </div>
          <div class="bidding-container">
            <h2>BIDDING SYSTEM</h2>
            <h3>Bid your products according to you</h3>
            <p>
              In our website the farmers can set a base price and then the
              buyers can bid which ensures farmers as well as the buyer sell or
              buy the product to gain the maximum profit.
            </p>
          </div>
        </div>

        <div class="coldStorage-time">
          <div class="coldStorage-img">
            <img src={coldStorage} alt="Cold Storage" />
          </div>
          <div class="coldStorage-container">
            <h2>COLD STORAGE SYSTEM</h2>
            <h3>Keep your vegetables safe for longer period of time</h3>
            <p>
              Here we also have integrated Cold storage system in a separate
              section for farmers and consumers to view the nearby cold storage
              and where farmer and store there produce a not to have any
              seasonal dependencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-box">
        <p className="banner-text">
          Si me contactas desde esta página, obtienes un{" "}
          <span className="banner-discount">15% OFF</span> en los siguientes
          planes de entrenamiento!
        </p>
      </div>
    </div>
  );
};

export default Banner;

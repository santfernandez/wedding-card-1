import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-us-title">Nosotros...</h2>
      <div className="about-us-images-container">
        <div className="about-us-images-row-a">
          <img
            className="about-us-image"
            src={`https://drive.google.com/uc?export=view&id=114WKg_DWDmOtG4JnkFYRkhT80KFgUVUi`}
          />
          <img
            className="about-us-image"
            src={`https://drive.google.com/uc?export=view&id=1kG5uw35q6__-N8yrr7QZECjXNSnD5I4Y`}
          />
        </div>
        <div className="about-us-images-row-b">
          <img
            className="about-us-image"
            src={`https://drive.google.com/uc?export=view&id=1uiAe0AD7DgUBKqXn8aBWsINSmgw_pDp6`}
          />
          <img
            className="about-us-image"
            src={`https://drive.google.com/uc?export=view&id=1Ql4OS5HnawNGtLh77iXpSju0918_GRrN`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

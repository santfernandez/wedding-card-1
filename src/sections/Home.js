import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="rectangle-background">
        <div className="date-and-icon">
          <img
            className="home-icon"
            src={`https://drive.google.com/uc?export=view&id=1Z5ERq9IyFtww_cKvXTwYj7xY54Nebon4`}
          />
        </div>
        <div className="title">
          <h2>Matias</h2>
          <p className="middle-title">&</p>
          <h2>Solana</h2>
        </div>
        <span className="home-date">07|05|22</span>
      </div>
    </div>
  );
};

export default Home;

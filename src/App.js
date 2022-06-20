import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./sections/Home";
import Countdown from "./sections/Countdown";
import VenueInfo from "./sections/VenueInfo";
import RSVP from "./sections/RSVP";
import AboutUs from "./sections/AboutUs";
import PartyInfo from "./sections/PartyInfo";
import Instagram from "./sections/Instagram";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Countdown />
      <VenueInfo />
      <RSVP />
      <AboutUs />
      <PartyInfo />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;

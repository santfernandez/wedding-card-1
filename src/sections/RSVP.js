import React, { useState } from "react";
import "../styles/RSVP.css";

const RSVP = () => {
  return (
    <div className="rsvp-container">
      <div className="rsvp">
        <h2 className="rsvp-title">Asistencia</h2>
        <p className="rsvp-info">Confirmar antes del 30 julio</p>
        <button type="button">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBsJ9zCOEgW-dCjGXtaWwsoYTkPw1UZbe3Uay7L00ZkTFhiw/viewform"
          >
            Confirmar
          </a>
        </button>
      </div>
    </div>
  );
};

export default RSVP;

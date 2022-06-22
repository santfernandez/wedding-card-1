import React, { useState } from "react";
import "../styles/RSVP.css";
import RSVPModal from "../components/RSVPModal";

const RSVP = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rsvp-container">
      <div className="rsvp">
        <h2 className="rsvp-title">Asistencia</h2>
        <p className="rsvp-info">Confirmar antes del 30 julio</p>
        <button type="button" onClick={() => setIsOpen(true)}>
          Confirmar
        </button>
        <RSVPModal open={isOpen} onClose={() => setIsOpen(false)}></RSVPModal>
      </div>
    </div>
  );
};

export default RSVP;

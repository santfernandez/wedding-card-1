import React, { useState } from "react";
import "../styles/VenueInfo.css";

const VenueInfo = () => {
  return (
    <div className="venue-info">
      <div className="venue-info-row-a">
        <div className="ceremony">
          <div className="venue-info-image">
            <img
              src={`https://drive.google.com/uc?export=view&id=10NglwLY36k_WZ7REXDf-RJSRyetzAc_Z`}
            />
          </div>
          <div className="venue-info-content">
            <div className="venue-info-event">
              <h2>Ceremonia</h2>
            </div>
            <div className="venue-info-day">
              <h4 className="venue-info-list-title">Día</h4>
              <p>7 de mayo de 2022</p>
            </div>
            <div className="venue-info-hour">
              <h4 className="venue-info-list-title">Hora</h4>
              <p>12 pm</p>
            </div>
            <div className="venue-info-venue">
              <h4 className="venue-info-list-title">Lugar</h4>
              <p>Parroquia Cristo Rey</p>
            </div>
            <div className="venue-info-address">
              <h4 className="venue-info-list-title">Dirección</h4>
              <p>Av. Mate de luna 3906, SM de Tucumán</p>
            </div>
          </div>
          <div className="venue-info-button">
            <button type="button">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/9hy8zLpiVS9EjkpJ7"
              >
                Cómo llegar
              </a>
            </button>
          </div>
        </div>
        <div className="party">
          <div className="venue-info-image">
            <img
              src={`https://drive.google.com/uc?export=view&id=1dHgwvmbBYuojeYkqW5C41CyDZRYvVaJh`}
            />
          </div>
          <div className="venue-info-content">
            <div className="venue-info-event">
              <h2>Celebración</h2>
            </div>
            <div className="venue-info-day">
              <h4 className="venue-info-list-title">Día</h4>
              <p>7 de mayo de 2022</p>
            </div>
            <div className="venue-info-hour">
              <h4 className="venue-info-list-title">Hora</h4>
              <p>1 pm</p>
            </div>
            <div className="venue-info-venue">
              <h4 className="venue-info-list-title">Lugar</h4>
              <p>La Finca Eventos</p>
            </div>
            <div className="venue-info-addres">
              <h4 className="venue-info-list-title">Dirección</h4>
              <p>Maipú 1850, Tafí Viejo</p>
            </div>
          </div>
          <div className="venue-info-button">
            <button type="button">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/kAbPHbbyrnAPdWED7"
              >
                Cómo llegar
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;

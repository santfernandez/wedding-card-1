import React, { useState } from "react";
import "../styles/PartyInfo.css";
import DressCodeModal from "../components/DressCodeModal";
import MusicModal from "../components/MusicModal";
import GiftModal from "../components/GiftModal";

const PartyInfo = () => {
  const [dresscodeIsOpen, setDresscodeIsOpen] = useState(false);
  const [musicIsOpen, setMusicIsOpen] = useState(false);
  const [giftIsOpen, setGiftIsOpen] = useState(false);
  return (
    <div className="party-info">
      <div className="party-info-a">
        <h1 className="party-info-title">¡Hora de la fiesta!</h1>
      </div>
      <div className="party-info-b">
        <div className="party-info-row-a">
          <div className="party-items">
            <div className="party-info-image">
              <img
                src={`https://drive.google.com/uc?export=view&id=1yLiU_Sma63bRx6MKP7ojtAtPgKEO3YgT`}
              />
            </div>
            <h2 className="party-info-subtitle">Música</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setMusicIsOpen(true)}
            >
              ¿Qué cancion no debería faltar?
            </button>
            <MusicModal
              open={musicIsOpen}
              onClose={() => setMusicIsOpen(false)}
            ></MusicModal>
          </div>
          <div className="party-items">
            <div className="party-info-image">
              <img
                src={`https://drive.google.com/uc?export=view&id=12uOQ6Ki98lgQmMlXsYEu5QzRJil22-QP`}
              />
            </div>
            <h2 className="party-info-subtitle">Dress Code</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setDresscodeIsOpen(true)}
            >
              ¿Qué me pongo?
            </button>
            <DressCodeModal
              open={dresscodeIsOpen}
              onClose={() => setDresscodeIsOpen(false)}
            >
              <img></img>
              <h2>Elegante</h2>
            </DressCodeModal>
          </div>
          <div className="party-items">
            <div className="party-info-image">
              <img
                src={`https://drive.google.com/uc?export=view&id=1YuESZPvn3ZMbWKFNLVhO5J6EOQRgLBc1`}
              />
            </div>
            <h2 className="party-info-subtitle">Regalos</h2>
            <button
              type="button"
              className="party-info-button"
              onClick={() => setGiftIsOpen(true)}
            >
              Más info
            </button>
            <GiftModal
              open={giftIsOpen}
              onClose={() => setGiftIsOpen(false)}
            ></GiftModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyInfo;

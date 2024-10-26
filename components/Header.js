/** @format */

import React from 'react';
import Logo from './svg/Logo';

const Header = ({ enableHeroText }) => (
  <header role="banner" className="mb4">
    <div className="header-content">
      <a id="link-home" href="/" aria-label="Home">
        <div>
          <Logo />
          <div style={{ textAlign: 'right', fontSize: 12 }}>Modded by bitRocket</div>
        </div>
      </a>
      {enableHeroText ? (
        <h2 className="mt3" style={{ marginTop: 50 }}>
          Crea e condividi splendide immagini del tuo codice.
          <br />
          Inizia a scrivere o trascina un file nell'area di testo.
        </h2>
      ) : null}
    </div>
    <style jsx>
      {`
        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-content a {
          height: 64px;
          max-width: 96vw;
        }

        h2 {
          text-align: center;
        }

        @media (max-width: 768px) {
          header {
            margin-bottom: var(--x3);
          }
          h2 {
            font-size: 13px;
          }
        }
      `}
    </style>
  </header>
);

export default Header;

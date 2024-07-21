import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 ChilDev. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.tiktok.com/@chil.dev?_t=8o3jlwOIk5e&_r=1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/chil.dev/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
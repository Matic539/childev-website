import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <div className="wave-container">
      <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>

      {/* CAHTGPT */}
      <div className="footer-container">
        <div className="footer-content">
          <div className="menu">
            <h3>Menú</h3>
            <ul>
              <li>Inicio</li>
              <li>Servicios tecnológicos</li>
              <li>Productos</li>
              <li>Trabaja con nosotros</li>
            </ul>
          </div>
          <div className="products">
            <h3>Productos</h3>
            <ul>
              <li>LARA Chatbots</li>
              <li>Ivento</li>
              <li>GatAuth</li>
              <li>Meleti</li>
              <li>Vive Las Tarjetas</li>
              <li>INDicadores CL</li>
              <li>Otros Productos</li>
            </ul>
          </div>
          <div className="social">
            <h3>Síguenos en Redes Sociales</h3>
            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
            </div>
          </div>
          <div className="interest">
            <h3>Te puede interesar</h3>
            <i className="fab fa-google-play"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
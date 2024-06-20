import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
import './styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>
                    <span className="chil">Chil</span>Dev Studio
                </h1>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/about">Nosotros</a></li>
                <li><a href="/services">Servicios</a></li>
                <li><a href="/portfolio">Portafolio</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
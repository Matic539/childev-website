import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
import './styles/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const scrollToHome = () => {
    //     document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>
                    <span className="chil">Chil</span>Dev Studio
                </h1>
            </div>
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li><a href="/">Inicio</a></li>
                <li><a href="/team">Equipo</a></li>
                <li><a href="/services">Servicios</a></li>
                <li><a href="/portfolio">Portafolio</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    )
}

export default Navbar
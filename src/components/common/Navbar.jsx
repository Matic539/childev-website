import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">ChilDev</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/faq">FAQ</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
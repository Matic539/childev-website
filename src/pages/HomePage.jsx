import React from "react";
// import { Link } from 'react-router-dom';
import Navbar from "../components/common/Navbar";
import About from "../components/Home/About";
import '../components/Home/styles/Home.css';

function HomePage() {
    const scrollToNextSection = () => {
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Navbar />
            <section id="home" className="home-section">
                <div className="home-container">
                    <h1><span>Chil</span>Dev Studio</h1>
                    <div className="desc-home">
                        <p>Innovative Development Solutions</p>
                        <p>Hacemos de tu idea una realidad, transformando tus conceptos en soluciones tecnológicas innovadoras y efectivas.</p>
                    </div>
                    <div className="home-btn">
                        <button onClick={scrollToNextSection} className="scroll-button">
                            <b>Conoce más de nosotros</b>
                        </button>
                        <button className="link-services-button">
                            <b>Nuestros servicios</b>
                        </button>
                    </div>
                </div>
            </section>

            <div id="about-section">
                <About />
            </div>
        </div>
    )
}

export default HomePage
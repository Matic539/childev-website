import React from "react";
// import { Link } from 'react-router-dom';
import Navbar from "../components/common/Navbar";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
import Footer from "../components/common/Footer";
import '../components/Home/styles/Home.css';

function HomePage() {
    const scrollToAboutSection = () => {
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContactForm = () => {
        document.getElementById('contactForm-section').scrollIntoView({ behavior: 'smooth' });
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
                        <button onClick={scrollToAboutSection} className="scroll-button">
                            <b>Conoce más de nosotros</b>
                        </button>
                        <button onClick={scrollToContactForm} className="link-services-button">
                            <b>Contáctanos</b>
                        </button>
                    </div>
                </div>
            </section>

            <div id="about-section">
                <About />
            </div>
            <div id="services-section">
                <Services />
            </div>
            <div id="contactForm-section" className="contactForm">
                <Contact />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HomePage
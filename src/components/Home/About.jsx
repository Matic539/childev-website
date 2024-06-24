import React, { useEffect } from 'react';
import AOS from 'aos';
import './styles/About.css';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div data-aos="fade-down">
                    <h2>Nosotros</h2>
                    <p>
                        En ChilDev Studio, nos especializamos en transformar tus ideas en soluciones tecnológicas innovadoras y efectivas. Nuestro equipo de expertos está dedicado a ofrecer servicios de desarrollo de software y páginas web de alta calidad, adaptados a las necesidades específicas de nuestros clientes.
                    </p>
                </div>
                <div className="mission-vision-values">
                    <div className="mission" data-aos="zoom-in">
                        <h3>Misión</h3>
                        <p>
                            Nuestra misión es proporcionar soluciones tecnológicas excepcionales que ayuden a nuestros clientes a alcanzar sus objetivos de negocio. Nos esforzamos por innovar y mejorar constantemente nuestros servicios para ofrecer el mayor valor posible.
                        </p>
                    </div>
                    <div className="vision" data-aos="zoom-in">
                        <h3>Visión</h3>
                        <p>
                            Nuestra visión es ser un líder reconocido en el desarrollo de software y soluciones web, conocido por nuestra creatividad, innovación y compromiso con la excelencia.
                        </p>
                    </div>
                    <div className="values" data-aos="zoom-in">
                        <h3>Valores</h3>
                        <ul>
                            <li><b>Innovación:</b> Buscamos continuamente nuevas formas de mejorar y crear soluciones únicas.</li>
                            <li><b>Calidad:</b> Nos comprometemos a entregar productos y servicios de la más alta calidad.</li>
                            <li><b>Compromiso:</b> Estamos dedicados a satisfacer las necesidades de nuestros clientes y superar sus expectativas.</li>
                            <li><b>Integridad:</b> Actuamos con honestidad y transparencia en todas nuestras interacciones.</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="team">
                    <h3>Equipo</h3>
                    <p>
                        Nuestro equipo está compuesto por profesionales talentosos y apasionados por la tecnología. Cada miembro aporta su experiencia y habilidades únicas para asegurar que cada proyecto sea un éxito.
                    </p>
                </div> */}
            </div>
        </section>
    )
}

export default About
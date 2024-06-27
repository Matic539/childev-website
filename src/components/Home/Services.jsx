import React, { useEffect } from 'react';
import AOS from 'aos';
import webDevIcon from '../services/img/MonitorDashboard.svg';
import ConsultIcon from '../services/img/Gear.svg';
import ecommerceIcon from '../services/img/ShoppingCart.svg';
import AutomationIcon from '../services/img/Robot.svg';
import softwareDevIcon from '../services/img/Programming.svg';
import cotactIcon from '../services/img/Person.svg';
import './styles/Services.css';
import 'aos/dist/aos.css';

const services = [
    {
        title: 'Desarrollo Web',
        description: 'Creación de sitios web personalizados y adaptativos.',
        icon: webDevIcon,
    },
    {
        title: 'Consultoría Técnica',
        description: 'Asesoramiento y consultoría en proyectos tecnológicos.',
        icon: ConsultIcon,
    },
    {
        title: 'Desarrollo de E-commerce',
        description: 'Creación de tiendas en línea con sistemas de pago integrados.',
        icon: ecommerceIcon,
    },
    {
        title: 'Automatización de Procesos',
        description: 'Soluciones para automatizar tareas repetitivas.',
        icon: AutomationIcon,
    },
    {
        title: 'Desarrollo de Software',
        description: 'Soluciones de software personalizadas.',
        icon: softwareDevIcon,
    },
    {
        title: 'Contáctanos',
        description: 'Si necesitas otro servicio o tienes alguna duda, contáctanos para ayudarte',
        icon: cotactIcon,
    },
];

function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="services-section">
            <div className="services-container">
                <h2 data-aos="zoom-in">Nuestros Servicios</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index} data-aos="flip-left">
                            <img src={service.icon} alt={service.title} className="service-icon" />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
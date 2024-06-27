import React, { useEffect } from 'react';
import AOS from 'aos';
import ContactForm from '../common/ContactForm';
import emailIcon from './img/contact/Email.svg';
import phoneIcon from './img/contact/Phone.svg';
import socialIcon from './img/contact/Hashtag.svg';
import './styles/Contact.css';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <section className='contact-section'>
                <div className="contact-container">
                    <h2>Contacto</h2>
                    <div className="contact-card-container">
                        <div className="contact-grid">
                            <div className="contact-card" data-aos="zoom-in">
                                <img src={emailIcon} alt="icono de contacto" className='contact-icon' />
                                <h3>Correo</h3>
                                <p>childev.studio@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-grid">
                            <div className="contact-card" data-aos="zoom-in">
                                <img src={phoneIcon} alt="icono de contacto" className='contact-icon' />
                                <h3>Teléfono</h3>
                                <p>+56 9 5678 4321</p>
                            </div>
                        </div>
                        <div className="contact-grid">
                            <div className="contact-card" data-aos="zoom-in">
                                <img src={socialIcon} alt="icono de contacto" className='contact-icon' />
                                <h3>Redes sociales</h3>
                                <div className="contact-social-list">
                                    <ul>
                                        <li><a href='https://www.instagram.com/chil.dev/'>Instagram</a></li>
                                        <li><a href='https://www.tiktok.com/@chil.dev?lang=es'>TikTok</a></li>
                                        <li><a href='#'>Twitter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ContactForm />
            </section>
        </div>
    )
}

export default Contact
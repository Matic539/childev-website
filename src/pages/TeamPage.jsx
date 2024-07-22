import React, { useEffect } from "react";
import AOS from 'aos';
import ContactForm from '../components/common/ContactForm';
import Navbar from "../components/common/Navbar";
import Footer from '../components/common/Footer';
import InstagramIcon from '../components/Team/img/InstagramIcon.svg';
import LinkedindIcon from '../components/Team/img/linkedinIcon.svg';
import GithubIcon from '../components/Team/img/githubIcon.svg';
import GmailIcon from '../components/Team/img/gmailIcon.svg';
import MatiasPhoto from '../components/Team/img/matiasimg.webp';
import AlfredoPhoto from '../components/Team/img/peyoimg.webp';
import RodolfoPhoto from '../components/Team/img/rodolfoIMG.webp';
import '../components/Team/styles/Team.css';


function TeamPage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Navbar />
            <section id="team-page" className="team-page">
                <div className="team-container">
                    <h2>Nuestro equipo</h2>
                    <div className="team-grid">
                        <div className="team-cards">
                            <div className="team-desc" data-aos="fade-right">
                                <h3>Matias López</h3>
                                <p>Desarrollador...</p>
                                <p>
                                    Apasionado por la programación desde los 16 años con experiencia en React, Python y mas.
                                    Para más información, puedes explorar mi portafolio web
                                </p>
                                <div className="team-links">
                                    <a href="https://matic539.github.io/My-portfolio/" target="_blank">Mi portafolio</a>
                                    <ul>
                                        <li>
                                            <a href="https://www.instagram.com/dinamic_official/" target="_blank"><img src={InstagramIcon} alt="Instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/matias-l%C3%B3pez-6978b5268/" target="_blank"><img src={LinkedindIcon} alt="Linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Matic539" target="_blank"><img src={GithubIcon} alt="GitHub" /></a>
                                        </li>
                                        <li>
                                            <a href="mailto:matias.lopez.renato@gmail.com"><img src={GmailIcon} alt="Gmail" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-img">
                                <img src={MatiasPhoto} alt="foto matias lopez" />
                            </div>
                        </div>
                    </div>

                    <div className="team-grid">
                        <div className="team-cards">
                            <div className="team-img">
                                <img src={AlfredoPhoto} alt="foto Alfredo Muñoz" />
                            </div>
                            <div className="team-desc" data-aos="fade-left">
                                <h3>Alfredo Muñoz</h3>
                                <p>Desarrollador...</p>
                                <p>
                                    Un experto en diseño y desarrollo web con 2 años de experiencia.
                                    {/* Para más información, te invito a explorar mi portafolio web */}
                                </p>
                                <div className="team-links">
                                    {/* <a href="" target="_blank">Mi portafolio</a> */}
                                    <ul>
                                        <li>
                                            <a href="https://www.instagram.com/el.peeyo/" target="_blank"><img src={InstagramIcon} alt="Instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/alfredo-muñoz-leyton-4203a6218/" target="_blank"><img src={LinkedindIcon} alt="Linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/peyoTRX" target="_blank"><img src={GithubIcon} alt="GitHub" /></a>
                                        </li>
                                        <li>
                                            <a href="mailto:alfredo.eml003@gmail.com"><img src={GmailIcon} alt="Gmail" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-grid">
                        <div className="team-cards">
                            <div className="team-desc" data-aos="fade-right">
                                <h3>Rodolfo Guzman</h3>
                                <p>Desarrollador...</p>
                                <p>
                                    Estudiante de ingeniería informática y apasionado de la tecnología, 
                                    tengo conocimientos tanto en front end como en back end y en el desarrollo de software.
                                    {/* Para más información sobre mi, puedes explorar mi portafolio web */}
                                </p>
                                <div className="team-links">
                                    {/* <a href="">Mi portafolio</a> */}
                                    <ul>
                                        <li>
                                            <a href="https://www.instagram.com/r.o.g.n_/" target="_blank"><img src={InstagramIcon} alt="Instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/rodolfo-guzman-012297316/" target="_blank"><img src={LinkedindIcon} alt="Linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/omelochino" target="_blank"><img src={GithubIcon} alt="GitHub" /></a>
                                        </li>
                                        <li>
                                            <a href="mailto:rogn.mickle@gmail.com"><img src={GmailIcon} alt="Gmail" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-img">
                                <img src={RodolfoPhoto} alt="foto Rodolfo Guzman" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-contact-form">
                <ContactForm />
            </section>
            <Footer />
        </div>
    )
}

export default TeamPage
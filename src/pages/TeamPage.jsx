import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from '../components/common/Footer';
import InstagramIcon from '../components/Team/img/InstagramIcon.svg';
import LinkedindIcon from '../components/Team/img/linkedinIcon.svg';
import GithubIcon from '../components/Team/img/githubIcon.svg';
import GmailIcon from '../components/Team/img/gmailIcon.svg';
import '../components/Team/styles/Team.css';


function TeamPage() {
    return (
        <div>
            <Navbar />
            <section id="team-page" className="team-page">
                <div className="team-container">
                    <h2>Nuestro equipo</h2>
                    <div className="team-grid">
                        <div className="team-cards">
                            <div className="team-desc">
                                <h3>Matias López</h3>
                                <p>Desarrollador...</p>
                                <p>
                                    Apasionado por la programación desde los 16 años con experiencia en React, Python y mas.
                                    Para más información, puedes explorar mi portafolio web
                                </p>
                                <div className="team-links">
                                    <a href="">Mi portafolio</a>
                                    <ul>
                                        <li>
                                            <a href=""><img src={InstagramIcon} alt="Instagram" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={LinkedindIcon} alt="Linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={GithubIcon} alt="GitHub" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={GmailIcon} alt="Gmail" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-img">
                                <img src="" alt="foto matias lopez" />
                            </div>
                        </div>
                    </div>

                    <div className="team-grid">
                        <div className="team-cards">
                            <div className="team-img">
                                <img src="" alt="foto Alfredo Muñoz" />
                            </div>
                            <div className="team-desc">
                                <h3>Alfredo Muñoz</h3>
                                <p>Desarrollador...</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <div className="team-links">
                                    <a href="">Mi portafolio</a>
                                    <ul>
                                        <li>
                                            <a href=""><img src={InstagramIcon} alt="Instagram" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={LinkedindIcon} alt="Linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={GithubIcon} alt="GitHub" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={GmailIcon} alt="Gmail" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-grid">
                        <div className="team-cards">
                            <div className="team-desc">
                                <h3>Rodolfo Guzman</h3>
                                <p>Desarrollador...</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <div className="team-links">
                                    <a href="">Mi portafolio</a>
                                    <ul>
                                        <li>
                                            <a href=""><img src={InstagramIcon} alt="Instagram" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={LinkedindIcon} alt="Linkedin" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={GithubIcon} alt="GitHub" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src={GmailIcon} alt="Gmail" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-img">
                                <img src="" alt="foto Rodolfo Guzman" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default TeamPage
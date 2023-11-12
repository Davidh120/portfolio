import React from 'react'
import "./footer.css"

export const Footer = () => {
    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container container">
                <h2 className="footer-title">David Heredia</h2>
                <ul className="footer-list">
                    <li>
                        <a href="#home" className="footer-link" onClick={(event) => {scrollToSection(event, "home")}}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer-link" onClick={(event) => {scrollToSection(event, "about")}}>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer-link" onClick={(event) => {scrollToSection(event, "portfolio")}}>Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer-link" onClick={(event) => {scrollToSection(event, "skills")}}>Skills</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/davidheredia12/" className="footer-social-link" target="_blank">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/Davidh120" className="footer-social-link" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.instagram.com/davidheredia12/" className="footer-social-link" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
                <span className='footer-copy'>
                    &#169; David Heredia. All rights reserved
                </span>
            </div>
        </footer>
    )
}

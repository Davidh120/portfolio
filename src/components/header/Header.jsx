import React, { useState} from 'react'
import "./header.css"
import Logo from "../../assets/img/logo_dark.png"

export const Header = () => {
    //Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className='nav container'>
                <a href="/" className="nav-logo">
                    <img src={Logo} alt="logo" />
                </a>

                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#home" className={activeNav === "#home" ? "nav-link active-link" : "nav-link"} onClick={() => {showMenu(false); setActiveNav("#home")}}>
                                <i className="uil uil-estate nav-icon"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className={activeNav === "#about" ? "nav-link active-link" : "nav-link"} onClick={() => {showMenu(false); setActiveNav("#about")}}>
                                <i className="uil uil-user nav-icon"></i> About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"} onClick={() => {showMenu(false); setActiveNav("#skills")}}>
                                <i className="uil uil-file nav-icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className={activeNav === "#services" ? "nav-link active-link" : "nav-link"} onClick={() => {showMenu(false); setActiveNav("#services")}}>
                                <i className="uil uil-briefcase-alt nav-icon"></i> Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"} onClick={() => {showMenu(false); setActiveNav("#portfolio")}}>
                                <i className="uil uil-scenery nav-icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className={activeNav === "#contact" ? "nav-link active-link2 nav-contact-button" : "nav-link nav-contact-button"} onClick={() => {showMenu(false); setActiveNav("#contact")}}>
                                <i className="uil uil-message nav-icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}


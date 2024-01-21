import React, { useState, useEffect, useRef } from 'react'
import "./header.css"
import LogoDark from "/src/assets/img/logo_dark.png"

export const Header = ({ timeline, ease }) => {
    //Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    let logo = useRef(null)
    let navItem1 = useRef(null)
    let navItem2 = useRef(null)
    let navItem3 = useRef(null)
    let navItem4 = useRef(null)
    let navItem5 = useRef(null)
    let navItem6 = useRef(null)

    useEffect(() => {
        const navItemsArray = [navItem1, navItem2, navItem3, navItem4, navItem5, navItem6];

        timeline.from(logo, 1, { opacity: 0, y: -200 })
        timeline.from(navItemsArray, 1, { opacity: 0, y: -200, stagger: { amount: .4 }, ease: ease }, .10)
    }, [])

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
        <header className="header">
            <nav className='nav container'>
                <a href="#home" className="nav-logo" onClick={(event) => { showMenu(false); setActiveNav("#home"); scrollToSection(event, "home")}}>
                    DAVID
                </a>

                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list grid">
                        <li className="nav-item" ref={el => navItem1 = el}>
                            <a href="#home" className={activeNav === "#home" ? "nav-link active-link" : "nav-link"} onClick={(event) => { showMenu(false); setActiveNav("#home"); scrollToSection(event, "home")}}>
                                <i className="uil uil-estate nav-icon"></i> Home
                            </a>
                        </li>
                        <li className="nav-item" ref={el => navItem2 = el}>
                            <a href="#about" className={activeNav === "#about" ? "nav-link active-link" : "nav-link"} onClick={(event) => { showMenu(false); setActiveNav("#about"); scrollToSection(event, "about") }}>
                                <i className="uil uil-user nav-icon"></i> About
                            </a>
                        </li>
                        <li className="nav-item" ref={el => navItem3 = el}>
                            <a href="#skills" className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"} onClick={(event) => { showMenu(false); setActiveNav("#skills"); scrollToSection(event, "skills") }}>
                                <i className="uil uil-file nav-icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav-item" ref={el => navItem4 = el}>
                            <a href="#services" className={activeNav === "#services" ? "nav-link active-link" : "nav-link"} onClick={(event) => { showMenu(false); setActiveNav("#services"); scrollToSection(event, "services") }}>
                                <i className="uil uil-briefcase-alt nav-icon"></i> Services
                            </a>
                        </li>
                        <li className="nav-item" ref={el => navItem5 = el}>
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"} onClick={(event) => { showMenu(false); setActiveNav("#portfolio"); scrollToSection(event, "portfolio") }}>
                                <i className="uil uil-scenery nav-icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav-item" ref={el => navItem6 = el}>
                            <a href="#contact" className={activeNav === "#contact" ? "nav-link active-link2 nav-contact-button" : "nav-link nav-contact-button"} onClick={(event) => { showMenu(false); setActiveNav("#contact"); scrollToSection(event, "contact") }}>
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


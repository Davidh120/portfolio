import React from 'react'
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h2 className="footer-title">David Heredia</h2>
                <ul className="footer-list">
                    <li>
                        <a href="#home" className="footer-link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer-link">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer-link">Skills</a>
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

import React, { useState } from 'react'
import './services.css'

export const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id='services'>
            <h2 className="section-title">Services</h2>
            <span className="section-subtitle">What i offer</span>
            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className="uil uil-window services-icon"></i>
                        <h3 className="services-title">Frontend <br /> developer</h3>
                    </div>
                    <span className="services-button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services-modal-title">Frontend developer</h3>
                            <p className="services-modal-description">
                                Service with a passion to learn and grow, dedicated to providing high-quality work to clients and companies.
                            </p>
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Design and development of user interfaces for websites and applications.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Development of HTML, CSS, and JavaScript code to implement client-side logic.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Integration of user interfaces with back-end services using APIs and other mechanisms.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Testing and debugging of front-end code to ensure quality and usability.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services-content">
                    <div>
                        <i className="uil uil-brackets-curly services-icon"></i>
                        <h3 className="services-title">Backend <br /> developer</h3>
                    </div>
                    <span className="services-button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services-modal-title">Backend developer</h3>
                            <p className="services-modal-description">
                                Service with a passion to learn and grow, dedicated to providing high-quality work to clients and companies.
                            </p>
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Design and development of server-side code and database integration.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Building and maintaining scalable and efficient server-side systems.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Integration of back-end services with front-end interfaces.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Testing and debugging of back-end code to ensure quality and reliability.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services-content">
                    <div>
                        <i className="uil uil-server services-icon"></i>
                        <h3 className="services-title">Database <br /> administrator</h3>
                    </div>
                    <span className="services-button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close" onClick={() => toggleTab(0)}></i>
                            <h3 className="services-modal-title">Database administrator</h3>
                            <p className="services-modal-description">
                                Service with a passion to learn and grow, dedicated to providing high-quality work to clients and companies.
                            </p>
                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Management and maintenance of databases for organizations.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Implementation of security and access controls for databases.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Monitoring and optimizing database performance and scalability.
                                    </p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Collaboration with developers and other stakeholders to ensure smooth database integration with other systems.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

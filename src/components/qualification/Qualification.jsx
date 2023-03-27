import React, { useState } from 'react'
import './qualification.css'

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section-title">Qualification</h2>
            <span className="section-subtitle">My personal journey</span>
            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={toggleState === 1 ? "qualification-button button-flex qualification-active" : "qualification-button button-flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification-icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification-button button-flex qualification-active" : "qualification-button button-flex"}
                    onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification-icon"></i> Experience
                    </div>
                </div>
                <div className="qualification-sections">
                    <div id="education" className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">SEO</h3>
                                <span className="qualification-subtitle">Next U</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                        <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Python</h3>
                                <span className="qualification-subtitle">Next U</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">JavaScript</h3>
                                <span className="qualification-subtitle">Next U</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                        <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Back End</h3>
                                <span className="qualification-subtitle">Next U</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Git</h3>
                                <span className="qualification-subtitle">Next U</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                        <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Databases</h3>
                                <span className="qualification-subtitle">Next U</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Front End</h3>
                                <span className="qualification-subtitle">Next U</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                    </div>

                    <div id="experience" className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Freelancer</h3>
                                <span className="qualification-subtitle">Colombia</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

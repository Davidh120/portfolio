import React from 'react'

export const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-box">
            <i className="uil uil-award about-icon"></i>
                <h3 className="about-title">Certificates</h3>
                <span className="about-subtitle">10+</span>
            </div>
            <div className="about-box">
            <i className="uil uil-briefcase-alt about-icon"></i>
                <h3 className="about-title">Projects</h3>
                <span className="about-subtitle">50+</span>
            </div>
            <div className="about-box">
            <i className="uil uil-desktop-cloud-alt about-icon"></i>
                <h3 className="about-title">Skills</h3>
                <span className="about-subtitle">40+</span>
            </div>
        </div>
    )
}

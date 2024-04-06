import React from 'react'
import './skills.css'
import { FrontEnd } from './FrontEnd'
import { BackEnd } from './BackEnd'
import { Mobile } from './Mobile'
import { Databases } from './Databases'

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">My specialized skills</span>
            <div className="skills-container container grid">
                <FrontEnd/>
                <BackEnd/>
                <Databases/>
                {/* <Mobile/> */}
            </div>
        </section>
    )
}

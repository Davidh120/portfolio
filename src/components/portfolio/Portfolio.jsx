import React from 'react'
import { Works } from './Works'
import "./portfolio.css"

export const Portfolio = () => {
  return (
    <section className="portfolio section" id='portfolio'>
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">Recent projects</span>
      <Works/>
    </section>
  )
}

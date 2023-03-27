import React from 'react'
import "./home.css"
import { Social } from './Social'
import { Data } from './Data'
import { ScrollDown } from './ScrollDown'

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid animate-fade-in-up">
        <div className="home-content grid">
          <Social/>
          <div className="home-img">
          </div>
          <Data/>
        </div>
        <ScrollDown/>
      </div>
    </section>
  )
}
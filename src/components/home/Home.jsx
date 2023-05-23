import React, { useEffect, useRef } from 'react'
import "./home.css"
import { Social } from './Social'
import { Data } from './Data'
import { ScrollDown } from './ScrollDown'

export const Home = ({timeline, ease}) => {
  let image = useRef(null);

  useEffect(() => {
    timeline.from(image, 1, {opacity: 0, x: 1000, ease: ease})
  }, [])

  return (
    <section className="home section" id="home">
      <div className="home-container container grid animate-fade-in-up">
        <div className="home-content grid">
          <Social timeline={timeline} ease={ease}/>
          <div className="home-img" ref={el => image = el}>
          </div>
          <Data timeline={timeline} ease={ease}/>
        </div>
        <ScrollDown timeline={timeline} ease={ease}/>
      </div>
    </section>
  )
}
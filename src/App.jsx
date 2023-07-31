import './App.css'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';
import { Portfolio } from './components/portfolio/Portfolio';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

//GSAP
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  let tl = gsap.timeline()
  let ease = Power3.easeOut()
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <Header timeline={tl} ease={ease} />
      <main className="main scroll-container">
        <Home timeline={tl} ease={ease}/>
        <About/>
        <Skills/>
        <Services/>
        {/* <Qualification/> */}
        <Portfolio/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App

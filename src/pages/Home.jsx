import HeroSection from "../components/HeroSection"
import Experience from "../components/Experience"
import HomeProjects from "../components/HomeProjects"
import Logos from "../components/Logos"

import '../styles/tech.css'

import '../styles/home.css';


const Home = () => {
  return (
    <div className="content">
        <HeroSection />
        <div className="homeTech">
          <div className="homeTech-title">
            <h2>Tecnologias</h2>
            <h5>Linguagens e Programas que utilizo regularmente no meu dia a dia</h5>
          </div>
          <div className="homeTech-cards">
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Logos.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>

            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Logos.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Logos.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Logos.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Logos.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Logos.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
          </div>
        </div>
        <HomeProjects />
        <Experience />
    </div>
  )
}

export default Home
import Experience from "../components/Experience/Experience"
import HomeProjects from "../components/HomeProjects/HomeProjects"
import HomeTech from "../components/HomeTech/HomeTech"


import '../pages/tech.css'
import '../styles/hero.css'

import '../pages/home.css';
import Icons from '../components/Icons'

const Home = () => {
  return (
    <div className="content">
      <div className='hero-sec'>
            <div className='data'>
              <h2>Olá! sou</h2>
              <h1>Igor Lima</h1>
              <h2>Desenvolvedor <span>Front-End</span></h2>
              <br />
              <span className='location'>
                <img src={Icons.loc} alt="Ponto de Localização" />
                <h4>Catanduva,SP</h4>
                <img src={Icons.flag} alt="Bandeira do Brasil" />
              </span>
            </div>
          </div>        
        <HomeProjects />
        <HomeTech/>
        <Experience />
    </div>
  )
}

export default Home
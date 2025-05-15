import Experience from "../components/Experience/Experience"
import HomeProjects from "../components/HomeProjects/HomeProjects"
import HomeTech from "../components/HomeTech/HomeTech"
import { useTranslation } from "react-i18next"

import '../pages/tech.css'

import '../pages/home.css';
import Icons from '../components/Icons'

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <div className='hero-sec'>
        <div className='data'>
          <h2>{t('home.welcome')}</h2>
          <h1>Igor Lima</h1>
          <h2 style={{color:"var(--purple-light)"}}>{t('home.title')}</h2>
          <br />
          <span className='location'>
            <img src={Icons.loc} alt="Ponto de Localização" />
            <h4>Catanduva,SP</h4>
            <img src={Icons.brFlag} alt="Bandeira do Brasil" />
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
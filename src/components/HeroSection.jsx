import Icons from '../components/ui/Icons'

import '../styles/hero.css'

const HeroSection = () => {
  return (
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
  )
}

export default HeroSection
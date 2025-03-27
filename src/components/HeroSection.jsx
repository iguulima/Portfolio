import React from 'react'

// Styles
import '../styles/hero.css'

// Images
import brasilFlag from '../assets/icons/br-flag.svg'	
import locationDot from '../assets/icons/loc-dot.svg'

const HeroSection = () => {
  return (
    <div className='hero-sec'>
      <div className='data'>
        <h4>Estudante de Gestão da Tecnologia da Informação</h4>
        <h2>Olá! sou</h2>
        <h1>Igor Lima</h1>
        <span className='location'>
          <img src={locationDot} alt="Ponto de Localização" />
          <h4>Catanduva,SP</h4>
          <img src={brasilFlag} alt="Bandeira do Brasil" />
        </span>

        <div className="social">
          <ul>
            <a href="https://github.com/iguulima" target="_blank">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" alt="Github Page">
                    <path fill="#D1D1D1" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>                    
                </li>
            </a>

            <a href="https://www.linkedin.com/in/igorlima-s/" target="_blank">
                <li>
                  <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M6.71518 30H0.495536V9.97054H6.71518V30ZM3.60201 7.23833C1.61317 7.23833 0 5.59097 0 3.60209C1.42353e-08 2.64676 0.379496 1.73055 1.055 1.05503C1.73051 0.379505 2.6467 0 3.60201 0C4.55732 0 5.47351 0.379505 6.14901 1.05503C6.82452 1.73055 7.20402 2.64676 7.20402 3.60209C7.20402 5.59097 5.59018 7.23833 3.60201 7.23833ZM29.9933 30H23.7871V20.2498C23.7871 17.9261 23.7402 14.9461 20.5533 14.9461C17.3196 14.9461 16.8241 17.4707 16.8241 20.0824V30H10.6112V9.97054H16.5763V12.7027H16.6634C17.4937 11.129 19.5221 9.46829 22.5482 9.46829C28.8429 9.46829 30 13.6135 30 18.9975V30H29.9933Z" fill="#D1D1D1"/>
                  </svg>
                </li>
            </a>

            <a href="https://x.com/igorlkkk" target="_blank">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" alt="Twitter Page">
                    <path fill="#D1D1D1" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                </li>
            </a>
          </ul>
        </div>
        <div className='cv'><a href=""><h3>Ver Curriculo</h3></a></div>
      </div>
      <div className="fixed-background"></div>
    </div>
  )
}

export default HeroSection;
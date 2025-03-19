import React from 'react'

//Styles
import '../styles/projects.css'

//Imagens
import tgImg from '../assets/images/tg.png'

const Projects = () => {
  return (
    <div className='main'>
      <h3>My Projects</h3>
      <div className='cards'>
        <div className="cardProj">
          <img src={tgImg} alt="Telas TG" className='card-img'/>
          <div className='card-text'>
            <h4>SD Locacoes</h4>
            <h5>Sistema mobile feito para automatizar o sistema de locacoes da usina</h5>
          </div>
        </div>

        <div className="cardProj">
          <img src={tgImg} alt="Telas TG" className='card-img'/>
          <div className='card-text'>
            <h4>SD Locacoes</h4>
            <h5>Sistema mobile feito para automatizar o sistema de locacoes da usina</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
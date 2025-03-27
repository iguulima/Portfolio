import {Link} from 'react-router-dom'

//Styles
import '../styles/projects.css'

//Imagens
import tgImg from '../assets/images/tg.png'

const Projects = () => {
  return (
    <div className='proj-main'>
      <div className="proj-header">
        <h2>MEUS PROJETOS</h2>
        <Link to='/projetos' className='proj-link'>Ver Todos
          <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.30176 1.42822L10.3857 0.344238C10.8447 -0.114746 11.5869 -0.114746 12.041 0.344238L21.5332 9.83154C21.9922 10.2905 21.9922 11.0327 21.5332 11.4868L12.041 20.979C11.582 21.438 10.8398 21.438 10.3857 20.979L9.30176 19.895C8.83789 19.4312 8.84766 18.6743 9.32129 18.2202L15.2051 12.6147H1.17188C0.522461 12.6147 0 12.0923 0 11.4429V9.88037C0 9.23096 0.522461 8.7085 1.17188 8.7085H15.2051L9.32129 3.10303C8.84277 2.64893 8.83301 1.89209 9.30176 1.42822Z" fill="white"/>
          </svg>
        </Link>
      </div>
      <div className='cards'>
        <div className="cardProj">
          <img src={tgImg} alt="Telas TG" className='card-img'/>
          <div className='card-text'>
            <h4>SD Locacoes</h4>
            <h5>Sistema mobile feito para automatizar o sistema de locacoes da usina</h5>
            <div className="card-tags">
              <h6>React Native</h6>
              <h6>Expo</h6>
            </div>
          </div>
        </div>

        <div className="cardProj">
          <img src={tgImg} alt="Telas TG" className='card-img'/>
          <div className='card-text'>
            <h4>SD Locacoes</h4>
            <h5>Sistema mobile feito para automatizar o sistema de locacoes da usina</h5>
            <div className="card-tags">
              <h6>React Native</h6>
              <h6>Expo</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
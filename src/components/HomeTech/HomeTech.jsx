import Icons from '../Icons'

import './homeTech.css'

const HomeTech = () => {
  return (
    <div>
        <div className="homeTech">
          <div className="homeTech-title">
            <h2>Tecnologias</h2>
            <h5>Linguagens e Programas que utilizo regularmente no meu dia a dia</h5>
          </div>
          <div className="homeTech-cards">
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Icons.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>Typescript</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>

            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Icons.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Icons.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Icons.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Icons.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
            <a href="https://react.dev" target='_blank' rel="noreferrer">
              <div className="card">
                  <span className='tech-img'><img src={Icons.figma} alt="Logo do Figma" /></span>
                  <div className="tech-text">
                      <h4>React</h4>
                      <h6>Interface de design colaborativa</h6>
                  </div>
              </div>
            </a>
          </div>
        </div>
    </div>
  )
}

export default HomeTech
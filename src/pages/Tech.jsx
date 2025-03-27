import React from 'react'


// Styles
import '../styles/tech.css'

//Imagens
import figmaLogo from '../assets/icons/figma.svg'
import vscodeLogo from '../assets/icons/vscode.svg'
import reactLogo from '../assets/icons/react.svg'

const Tech = () => {
  return (
    <div className='tech-main'>
        <div className='titles'>
            <h4>Tecnologias</h4>
        </div>
        <div className="tech-section">
            <h3 className='section-title'>Front-End</h3>
            <div className="tech-cards">
                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>React</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>

                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>Javascript</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>
                
                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>HTML5</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>

                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>CSS3</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>
            </div>
        </div>    

        <div className="tech-section">
            <h3 className='section-title'>Back-End</h3>
            <div className="tech-cards">

            </div>
        </div> 
        
        <div className="tech-section">
            <h3 className='section-title'>Ferramentas</h3>
            <div className="tech-cards">
                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>Figma</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>

                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>VSCode</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>
                
                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>Photoshop</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="tech-section">
            <h3 className='section-title'>Desenvolvimento Mobile</h3>
            <div className="tech-cards">
                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>React Native</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>

                <div className="card">
                    <span className='tech-img'><img src={figmaLogo} alt="Logo do Figma" /></span>
                    <div className="tech-text">
                        <h4>Expo</h4>
                        <h5>Collaborative interface design tool</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tech
import React from 'react'


// Styles
import '../styles/tech.css'

//Imagens
import figmaLogo from '../assets/icons/figma.svg'
import vscodeLogo from '../assets/icons/vscode.svg'
import reactLogo from '../assets/icons/react.svg'

const Tech = () => {
  return (
    <div className='main'>
        <div className='card'>
            <div className="cardIcon">
                <img src={figmaLogo} alt="Logo do Figma" />
            </div>
            <div className="cardText">
                <h4>HTML</h4>
            </div>
        </div>
        <div className='card'>
            <div className="cardIcon">
                <img src={vscodeLogo} alt="Logo do Figma" style={{ width: '2.5vw' }} />
            </div>
            <div className="cardText">
                <h4>CSS</h4>
            </div>
        </div>
        <div className='card'>
            <div className="cardIcon">
                <img src={reactLogo} alt="Logo do Figma" style={{ width: '2.5vw' }} />
            </div>
            <div className="cardText">
                <h4>JavaScript</h4>
            </div>
        </div>
        <div className='card'>
            <div className="cardIcon">
                <img src={reactLogo} alt="Logo do Figma" style={{ width: '2.5vw' }} />
            </div>
            <div className="cardText">
                <h4>React</h4>
            </div>
        </div>
        <div className='card'>
            <div className="cardIcon">
                <img src={reactLogo} alt="Logo do Figma" style={{ width: '2.5vw' }} />
            </div>
            <div className="cardText">
                <h4>NodeJS</h4>
            </div>
        </div>
        <div className='card'>
            <div className="cardIcon">
                <img src={reactLogo} alt="Logo do Figma" style={{ width: '2.5vw' }} />
            </div>
            <div className="cardText">
                <h4>React</h4>
            </div>
        </div>
    </div>
  )
}

export default Tech
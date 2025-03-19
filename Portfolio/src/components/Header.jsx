
import "../styles/header.css";

import igorLogo from '../assets/icons/logo.svg'; 


const Header = () => {

    return (
        <div className="header">
            <img src={igorLogo} alt="Logo do Igor" className="logo"/>
            <ul className="navbar">
                <li>Tecnologias</li>
                <li>Projetos</li>
                <li>Experiencia</li>
                <li>Sobre Mim</li>
            </ul>
        </div>
    )

}

export default Header;
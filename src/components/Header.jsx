import { Link } from "react-router-dom";

import "../styles/header.css";

import igorLogo from '../assets/icons/logo.svg'; 


const Header = () => {

    return (
        <div className="header">
            <img src={igorLogo} alt="Logo do Igor" className="logo"/>
            <nav className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">Projetos</Link>
                <Link className="nav-link" to="/tech">Tecnologias</Link>
                <Link className="nav-link" to="/">Sobre Mim</Link>
            </nav>
        </div>
    )
}
export default Header;
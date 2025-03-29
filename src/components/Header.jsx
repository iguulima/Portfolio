import { Link } from "react-router-dom";

import Logos from "../components/Logos";

import "../styles/header.css";



const Header = () => {

    return (
        <div className="header">
            <img src={Logos.igor} alt="Logo do Igor" className="logo"/>
            <nav className="navbar">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/proj">Projetos</Link>
                <Link className="nav-link" to="/tech">Tecnologias</Link>
                <Link className="nav-link" to="/about">Sobre Mim</Link>
            </nav>
        </div>
    )
}
export default Header;
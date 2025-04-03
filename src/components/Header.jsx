import {Link} from "react-router-dom"

import Icons from "../components/ui/Icons"

import "../styles/header.css"

const Header = () => {
  return (
    <header>
        <img src={Icons.igor} alt="" />
        <nav>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/proj">Projetos</Link>
            <Link className="nav-link" to="/tech">Tecnologias</Link>
            <Link className="nav-link" to="/sobre">Sobre mim</Link>
        </nav>
    </header>
  )
}

export default Header
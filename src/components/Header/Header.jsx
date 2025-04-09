import {Link} from "react-router-dom"

import Icons from "../../components/Icons"

import "./header.css"

const Header = () => {
  return (
    <header>
      <Link to="/"><img src={Icons.igor} alt="" /></Link>
        <nav>
            <Link className="nav-link" to="/">Início</Link>
            <Link className="nav-link" to="/proj">Projetos</Link>
            <Link className="nav-link" to="/tech">Tecnologias</Link>
            <Link className="nav-link" to="/sobre">Sobre mim</Link>
        </nav>
    </header>
  )
}

export default Header
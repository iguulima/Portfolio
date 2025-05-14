import { Link } from 'react-router-dom'
import Icons from '../Icons'
import './social.css'

const SocialBar = () => {
  return (
    <div className='social-bar'>
        <Link to="/"><img src={Icons.homeBar} alt="Icone da Home" /></Link>
        <hr />
        <a href="https://www.github.com/iguulima" target="_black" rel="noopener noreferrer"><img src={Icons.githubBar} alt="Icone do Github" /></a>
        <a href="www.linkedin.com/in/igorlima-s" target="_black" rel="noopener noreferrer"><img src={Icons.linkedinBar} alt="Icone do LinkedIn" /></a>
        <a href="" target="_black" rel="noopener noreferrer"><img src={Icons.mailBar} alt="Icone do Email" /></a>
        <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer"><img src={Icons.resumeBar} alt="Icone do Curriculo" /></a>
        <hr />
        <img src={Icons.moonBar} alt="" />
    </div>
  )
}

export default SocialBar
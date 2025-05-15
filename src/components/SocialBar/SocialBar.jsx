import { Link } from 'react-router-dom'
import Icons from '../Icons'
import Tooltip from '../Tooltip'
import { useTranslation } from 'react-i18next'

import '../../i18n/i18n';

import './social.css'

const SocialBar = () => {

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLanguage);
  };
  

  return (
    <div className='social-bar'>
          <Tooltip text={"Página Inicial"}>
            <Link to="/"><img src={Icons.homeBar} alt="Icone da Home" /></Link>
          </Tooltip>
        <hr />
        <Tooltip text={"GitHub"}>
          <a href="https://www.github.com/iguulima" target="_black" rel="noopener noreferrer"><img src={Icons.githubBar} alt="Icone do Github" /></a>
        </Tooltip>
        <Tooltip text={"LinkedIn"}>
          <a href="www.linkedin.com/in/igorlima-s" target="_black" rel="noopener noreferrer"><img src={Icons.linkedinBar} alt="Icone do LinkedIn" /></a>
        </Tooltip>
        <Tooltip text={"Email"}>
          <a href="" target="_black" rel="noopener noreferrer"><img src={Icons.mailBar} alt="Icone do Email" /></a>
        </Tooltip>
        <Tooltip text={"Currículo"}>
          <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer"><img src={Icons.resumeBar} alt="Icone do Curriculo" /></a>
        </Tooltip>
        <hr />

        <Tooltip text={t('langTooltip')}>
          <button onClick={toggleLanguage} className="lang-btn">
            <img
            src={i18n.language === 'pt' ? Icons.brFlag : Icons.usFlag}
            alt="Bandeira de Idioma"
            style={{ width: "1.8rem" }}
          />
          </button>
        </Tooltip>
    </div>
  )
}

export default SocialBar
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Icons from "../../components/Icons";

import "./header.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <Link to="/"><img src={Icons.igor} alt="Logotipo" /></Link>
      <nav>
        <Link className="nav-link" to="/">{t('navbar.home')}</Link>
        <Link className="nav-link" to="/proj">{t('navbar.projects')}</Link>
        <Link className="nav-link" to="/tech">{t('navbar.tech')}</Link>
        <Link className="nav-link" to="/sobre">{t('navbar.about')}</Link>
      </nav>
    </header>
  );
};

export default Header;
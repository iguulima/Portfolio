import Icons from '../Icons';
import TechCard from '../TechCard';
import { useTranslation } from 'react-i18next';
import './homeTech.css';

const HomeTech = () => {
  const { t } = useTranslation();

  const techs = [
    {
      id: 1,
      icon: Icons.react,
      link: "https://www.react.com/",
      size: 30,
    },
    {
      id: 2,
      icon: Icons.js,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      size: 25,
    },
    {
      id: 3,
      icon: Icons.css,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      size: 30,
    },
    {
      id: 4,
      icon: Icons.figma,
      link: "https://www.figma.com/",
      size: 15,
    },
    {
      id: 5,
      icon: Icons.html,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      size: 30,
    },
    {
      id: 6,
      icon: Icons.git,
      link: "https://git-scm.com",
      size: 30,
    },
  ];

  return (
    <div>
      <div className="homeTech">
        <div className="homeTech-title">
          <h2>{t('tech-section.title')}</h2>
          <h5>{t('tech-section.description')}</h5>
        </div>
        <div className="homeTech-cards">
          {techs.map((tech) => (
            <TechCard
              id={tech.id}
              icon={tech.icon}
              link={tech.link}
              size={tech.size}
              title={t(`tech-section.tech-list.${tech.id}.title`)}
              description={t(`tech-section.tech-list.${tech.id}.description`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTech;
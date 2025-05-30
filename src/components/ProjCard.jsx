import '../components/HomeProjects/homeProjects.css';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const ProjCard = ({ title, description, tags, image, link, style }) => {
      const { t } = useTranslation();

    return (
        <div className="cardProj" style={style}>
            <img src={image} alt={`Imagem do projeto ${title}`} className="card-img" />
            <div className="card-text">
                <h4>{title}</h4>
                <h5>{description}</h5>
                <div className="card-tags">
                    {Array.isArray(tags) && tags.map((tag, index) => (
                        <h6 key={index}>{tag}</h6>
                    ))}
                </div>
            </div>
            <Link to={link} target='_blank' className='proj-link-btn'>
                {t('projects-section.linkButton')}
                <svg style={{width: "1rem"}} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polyline points="8.25 2.75,2.75 2.75,2.75 13.25,13.25 13.25,13.25 7.75"></polyline> <path d="m13.25 2.75-5.5 5.5m3-6.5h3.5v3.5"></path> </g></svg>
            </Link>
        </div>

    );
};

export default ProjCard;
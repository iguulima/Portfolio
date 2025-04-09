import '../components/HomeProjects/homeProjects.css';
import { Link } from 'react-router-dom';

const ProjCard = ({ title, description, tags, image, link, style }) => {
    return (
        <Link to={link} className="cardProj" style={style}>
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
        </Link>
    );
};

export default ProjCard;
import React from 'react';

const TechCard = ({ id, icon, link, size, title, description }) => {
  return (
    <a href={link} target='_blank' rel="noreferrer">
      <div className="card">
        <div className='tech-img'>
          <img style={{ width: `${size}px` }} src={icon} alt={`Logo do ${title}`} />
        </div>
        <div className="tech-text">
          <h4>{title}</h4>
          <h6>{description}</h6>
        </div>
      </div>
    </a>
  );
};

export default TechCard;
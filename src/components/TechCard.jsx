import React from 'react'

const TechCard = ({ name, description, icon, link }) => {
    return (
        <a href={link} target='_blank' rel="noreferrer">
            <div className="card">
                <div className='tech-img'>
                    <img src={icon} alt="Logo do {name}" />
                </div>
                <div className="tech-text">
                    <h4>{name}</h4>
                    <h6>{description}</h6>
                </div>
            </div>
        </a>
    );
};

export default TechCard
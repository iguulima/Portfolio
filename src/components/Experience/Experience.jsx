import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './experience.css';

function Experience() {
  const { t } = useTranslation();
  const [experience, setExperience] = useState(1);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const estiloBtn = (botaoAtivo, isHovered) => {
  if (botaoAtivo) {
    return {
      backgroundColor: '#f8f8ff',
      color: '#000',
      cursor: 'pointer',
      transition: 'background 0.2s, color 0.3s',
    };
  }
  return {
    backgroundColor: isHovered ? '#151617bf' : 'transparent',
    color:'#b597ec',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.3s',
  };
};

  return (
    <div className="exp-main">
      <h2>{t('exp-section.title')}</h2>
      <h5 className="exp-subtitle">{t('exp-section.description')}</h5>
      <div className="exp-btn">
        <button
          className="btn"
          style={estiloBtn(experience === 1, hoveredBtn === 1)}
          onClick={() => setExperience(1)}
          onMouseEnter={() => setHoveredBtn(1)}
          onMouseLeave={() => setHoveredBtn(null)}
        >
        <svg className='btn-icon' fill={experience === 1 ? "#000" : "#b597ec"} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>briefcase</title> <path d="M28 7.75h-3.75v-2.75c-0.002-1.794-1.456-3.248-3.25-3.25h-10c-1.794 0.002-3.248 1.456-3.25 3.25v2.75h-3.75c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM10.25 5c0.006-0.412 0.338-0.744 0.749-0.75h10.001c0.412 0.006 0.744 0.338 0.75 0.749v2.751h-11.5zM4 10.25h24c0.412 0.006 0.744 0.338 0.75 0.749v3.751h-25.5v-3.75c0.006-0.412 0.338-0.744 0.749-0.75h0.001zM14.25 17.25h3.5v0.25c-0.004 0.137-0.113 0.246-0.25 0.25h-3c-0.137-0.002-0.248-0.113-0.25-0.25v-0zM28 27.75h-24c-0.412-0.006-0.744-0.338-0.75-0.749v-9.751h8.5v0.25c0.002 1.518 1.232 2.748 2.75 2.75h3c1.518-0.002 2.748-1.232 2.75-2.75v-0.25h8.5v9.75c-0.006 0.412-0.338 0.744-0.749 0.75h-0.001z"></path> </g></svg>
        {t('exp-section.work')}
        </button>
        <button
          className="btn"
          style={estiloBtn(experience === 2, hoveredBtn === 2)}
          onClick={() => setExperience(2)}
          onMouseEnter={() => setHoveredBtn(2)}
          onMouseLeave={() => setHoveredBtn(null)}
        >
          <svg className='btn-icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M22 9L12 4L2 9L12 14L22 9ZM22 9V15M19 10.5V16.5L12 20L5 16.5V10.5" stroke={experience === 1 ? "#b597ec" : "#000"}  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          {t('exp-section.study')}
        </button>
      </div>
      <div className="exp-content">
        {experience === 1 ? (
          <div className="exp-cards">
            <div className="exp-scontent">
              <h3>{t('exp-section.work-list.1.title')}</h3>
              <div>
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M11 11H6.2C5.07989 11 4.51984 11 4.09202 11.218C3.71569 11.4097 3.40973 11.7157 3.21799 12.092C3 12.5198 3 13.0799 3 14.2V21M21 21V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H14.2C13.0799 3 12.5198 3 12.092 3.21799C11.7157 3.40973 11.4097 3.71569 11.218 4.09202C11 4.51984 11 5.0799 11 6.2V21M22 21H2M14.5 7H17.5M14.5 11H17.5M14.5 15H17.5" stroke="#976ce4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                  {t('exp-section.work-list.1.company')}
                </h4>
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#976ce4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  {t('exp-section.work-list.1.date')} 
                </h4>
                </div>
              <h5>{t('exp-section.work-list.1.description')}</h5>
            </div>
          </div>
        ) : (
          <div>
            <div className="exp-scontent">
              <h3>{t('exp-section.study-list.1.title')}</h3>
              <div>
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11 11H6.2C5.07989 11 4.51984 11 4.09202 11.218C3.71569 11.4097 3.40973 11.7157 3.21799 12.092C3 12.5198 3 13.0799 3 14.2V21M21 21V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H14.2C13.0799 3 12.5198 3 12.092 3.21799C11.7157 3.40973 11.4097 3.71569 11.218 4.09202C11 4.51984 11 5.0799 11 6.2V21M22 21H2M14.5 7H17.5M14.5 11H17.5M14.5 15H17.5" stroke="#976ce4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                  {t('exp-section.study-list.1.company')}
                </h4>
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#976ce4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  {t('exp-section.study-list.1.date')} 
                </h4>
                </div>
              <h5>{t('exp-section.study-list.1.description')}</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
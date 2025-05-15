import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './experience.css';

function Experience() {
  const { t } = useTranslation();
  const [experience, setExperience] = useState(1);

  const estiloBtn = (botaoAtivo) => ({
    backgroundColor: botaoAtivo ? '#f8f8ff' : 'transparent',
    color: botaoAtivo ? '#000000' : '#fff',
    cursor: 'pointer',
  });

  return (
    <div className="exp-main">
      <h2>{t('exp-section.title')}</h2>
      <h5 className="exp-subtitle">{t('exp-section.description')}      </h5>
      <div className="exp-btn">
        <button className="btn" style={{ ...estiloBtn(experience === 1), borderRadius: '1rem 1rem 1rem 0' }} onClick={() => setExperience(1)}>
          {t('exp-section.work')}
        </button>
        <button className="btn" style={{ ...estiloBtn(experience === 2), borderRadius: '1rem 1rem 0 1rem' }} onClick={() => setExperience(2)}>
          {t('exp-section.study')}
        </button>
      </div>
      <div className="exp-content">
        {experience === 1 ? (
          <div className="exp-cards">
            <div className="exp-scontent">
              <h3>{t('exp-section.work-list.1.title')}</h3>
              <h4>{t('exp-section.work-list.1.company')} ( {t('exp-section.work-list.1.date')} )</h4>
              <h5>{t('exp-section.work-list.1.description')}</h5>
            </div>
          </div>
        ) : (
          <div>
            <div className="exp-scontent">
              <h3>{t('exp-section.study-list.1.title')}</h3>
              <h4>{t('exp-section.study-list.1.company')} ( {t('exp-section.study-list.1.date')} )</h4>
              <h5>{t('exp-section.study-list.1.description')}</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
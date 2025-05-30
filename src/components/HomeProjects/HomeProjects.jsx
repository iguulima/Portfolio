import {Link} from 'react-router-dom'

import ProjCard from '../ProjCard'
import { useTranslation } from 'react-i18next'

//Styles
import './homeProjects.css'

//Imagens
import usdImg from '../../assets/images/UsdApp.png'
import interImg from '../../assets/images/interImg.png'

const HomeProjects = () => {
  const { t } = useTranslation();
  return (
    <div className='proj-main'>
      <div className="proj-header">
        <div>
          <h2>{t('projects-section.title')}</h2>
          <h5>{t('projects-section.description')}</h5>
        </div>
        <Link to='/proj' className='proj-link'><span>{t('projects-section.button')}</span>
          <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.30176 1.42822L10.3857 0.344238C10.8447 -0.114746 11.5869 -0.114746 12.041 0.344238L21.5332 9.83154C21.9922 10.2905 21.9922 11.0327 21.5332 11.4868L12.041 20.979C11.582 21.438 10.8398 21.438 10.3857 20.979L9.30176 19.895C8.83789 19.4312 8.84766 18.6743 9.32129 18.2202L15.2051 12.6147H1.17188C0.522461 12.6147 0 12.0923 0 11.4429V9.88037C0 9.23096 0.522461 8.7085 1.17188 8.7085H15.2051L9.32129 3.10303C8.84277 2.64893 8.83301 1.89209 9.30176 1.42822Z" fill="white"/>
          </svg>
        </Link>
      </div>
      <div className='home-cards'>
      <ProjCard
        title={t('projects-list.1.title')}
        description={t('projects-list.1.description')}
        tags={[t('projects-list.1.tags.1'), t('projects-list.1.tags.2')]}
        image={usdImg}
        link="https://www.figma.com/design/OZQxaf9kJH8lQaZcS0lBM8/TG-Sao-Domingos?node-id=0-1&t=KigqONukGgdslG9y-11"
        style={{ width: "40vw" }}
      />

        <ProjCard
          title={t('projects-list.2.title')}
          description={t('projects-list.2.description')}
          tags={[t('projects-list.2.tags.1'), t('projects-list.2.tags.2')]}
          image={interImg}
          link="https://www.figma.com/design/7IGA92KVU0oHQWVvUieu1Z/Inter?node-id=2-17&p=f&t=tZBmhH7wXD63Pt09-0"
          style={{ width: "40vw" }}
        />
      </div>
    </div>
  )
}

export default HomeProjects
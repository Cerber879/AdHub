import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './preview.module.css'
import { ROUTES } from '../../../../../utils/routes'

import DataAdvertisment from '../../componentsPreview/BigAdvertisment/DataAdvertisment/DataAdvertisment'
import PhotosBlock from '../../componentsPreview/PhotosBlock/PhotosBlock'
import UserAdvertisment from '../../componentsPreview/BigAdvertisment/UserAdvertisment/UserAdvertisment'

import { FindAllAnnouncementsQuery } from '../../../../../graphql/generated/output'

interface PreviewBigAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
}

const PreviewBigAdvertisment: React.FC<PreviewBigAdvertismentProps> = ({ input }) => { 
  const [activeAd, setActiveAd] = useState(false);
  
  return (
    <Link 
        onMouseEnter={() => setActiveAd(true)} 
        onMouseLeave={() => setActiveAd(false)} 
        to={ROUTES.ITEMS + "/" + input.name + "/" + input.id} 
        className={styles.container}
    >
        <PhotosBlock active={activeAd} useStylesProfile={false}/>
        <DataAdvertisment input={input} /> 
        <UserAdvertisment />
    </Link>
  )
}

export default PreviewBigAdvertisment;

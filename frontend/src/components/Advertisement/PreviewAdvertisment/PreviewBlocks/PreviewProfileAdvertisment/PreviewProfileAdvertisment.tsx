import { useState } from 'react'

import styles from './preview.module.css'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../../utils/routes'

import DataAdvertisment from '../../componentsPreview/ProfileAdvertisment/DataAdvertisment/DataAdvertisment'
import PhotosBlock from '../../componentsPreview/PhotosBlock/PhotosBlock'
import { FindAllAnnouncementsQuery } from '../../../../../graphql/generated/output'

interface PreviewProfileAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
}

const PreviewProfileAdvertisment = ({ input }: PreviewProfileAdvertismentProps) => {

    const [activeAd, setActiveAd] = useState(false);
      
  return (
    <Link 
        onMouseEnter={() => setActiveAd(true)} 
        onMouseLeave={() => setActiveAd(false)} 
        to={ROUTES.ITEMS} 
        className={styles.container}
    >
        <PhotosBlock active={activeAd} useStylesProfile={true}/>
        <DataAdvertisment input={input} />
    </Link>
  )
}

export default PreviewProfileAdvertisment
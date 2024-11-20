import { useState } from 'react'

import styles from './preview.module.css'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../../utils/routes'

import DataAdvertisment from '../../componentsPreview/ProfileAdvertisment/DataAdvertisment/DataAdvertisment'
import PhotosBlock from '../../componentsPreview/ProfileAdvertisment/PhotosBlock/PhotosBlock'

const PreviewProfileAdvertisment = () => {

    const [activeAd, setActiveAd] = useState(false);
      
  return (
    <Link 
        onMouseEnter={() => setActiveAd(true)} 
        onMouseLeave={() => setActiveAd(false)} 
        to={ROUTES.ADVERTISMENT} 
        className={styles.container}
    >
        <PhotosBlock active={activeAd}/>
        <DataAdvertisment />
    </Link>
  )
}

export default PreviewProfileAdvertisment
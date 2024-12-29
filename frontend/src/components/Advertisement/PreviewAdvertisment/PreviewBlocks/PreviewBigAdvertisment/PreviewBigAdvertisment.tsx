import { useState } from 'react'

import styles from './preview.module.css'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../../utils/routes'

import DataAdvertisment from '../../componentsPreview/BigAdvertisment/DataAdvertisment/DataAdvertisment'
import PhotosBlock from '../../componentsPreview/PhotosBlock/PhotosBlock'
import UserAdvertisment from '../../componentsPreview/BigAdvertisment/UserAdvertisment/UserAdvertisment'

const PreviewBigAdvertisment = () => {

    const [activeAd, setActiveAd] = useState(false);
      
  return (
    <Link 
        onMouseEnter={() => setActiveAd(true)} 
        onMouseLeave={() => setActiveAd(false)} 
        to={ROUTES.ADVERTISMENT} 
        className={styles.container}
    >
        <PhotosBlock active={activeAd} useStylesProfile={false}/>
        <DataAdvertisment />
        <UserAdvertisment />
    </Link>
  )
}

export default PreviewBigAdvertisment
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../../utils/routes'

import styles from './preview.module.css'
import PhotosBlock from '../../componentsPreview/PhotosBlock/PhotosBlock'
import DataAdvertisment from '../../componentsPreview/SmallAdvertisment/DataAdvertisment/DataAdvertisment'

const PreviewSmallAdvertisment = () => {

  const [activeAd, setActiveAd] = useState(false);

  return (
    <Link         
      onMouseEnter={() => setActiveAd(true)} 
      onMouseLeave={() => setActiveAd(false)} 
      to={ROUTES.ADVERTISMENT} 
      className={styles.container}
    >
      <PhotosBlock active={activeAd} useStylesProfile={false}  />
      <DataAdvertisment />
    </Link>
  )
}

export default PreviewSmallAdvertisment
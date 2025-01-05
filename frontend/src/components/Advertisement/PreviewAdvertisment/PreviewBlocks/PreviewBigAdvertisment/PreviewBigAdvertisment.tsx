import { Link } from 'react-router-dom'

import styles from './preview.module.css'
import { ROUTES } from '../../../../../utils/routes'

import DataAdvertisment from '../../componentsPreview/BigAdvertisment/DataAdvertisment/DataAdvertisment'
import PhotosBlock from '../../componentsPreview/PhotosBlock/PhotosBlock'
import UserAdvertisment from '../../componentsPreview/BigAdvertisment/UserAdvertisment/UserAdvertisment'

import { FindAllAnnouncementsQuery } from '../../../../../graphql/generated/output'

interface PreviewBigAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
  useStylesProfile: boolean
}

const PreviewBigAdvertisment: React.FC<PreviewBigAdvertismentProps> = ({ input, useStylesProfile }) => { 
  
  return (
    <Link 
        to={ROUTES.ITEMS + "/" + input.name + "/" + input.id} 
        className={styles.container}
    >
        <PhotosBlock useStylesProfile={useStylesProfile}/>
        <DataAdvertisment input={input} /> 
        <UserAdvertisment input={input} />
    </Link>
  )
}

export default PreviewBigAdvertisment;

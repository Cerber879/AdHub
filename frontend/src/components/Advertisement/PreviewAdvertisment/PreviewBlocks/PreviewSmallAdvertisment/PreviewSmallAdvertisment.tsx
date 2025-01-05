import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../../utils/routes'

import styles from './preview.module.css'
import PhotosBlock from '../../componentsPreview/PhotosBlock/PhotosBlock'
import DataAdvertisment from '../../componentsPreview/SmallAdvertisment/DataAdvertisment/DataAdvertisment'



import { FindAllAnnouncementsQuery } from '../../../../../graphql/generated/output'

interface PreviewSmallAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 

}

const PreviewSmallAdvertisment: React.FC<PreviewSmallAdvertismentProps> = ({ input }) => { 

  return (
    <Link         
      to={ROUTES.ITEMS + '/' + input.name + '/' + input.id} 
      className={styles.container}
    >
      <PhotosBlock useStylesProfile={false}  />
      <DataAdvertisment input={input} />
    </Link>
  )
}

export default PreviewSmallAdvertisment
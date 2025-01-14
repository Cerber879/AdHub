  import{ useMemo, useState } from 'react'

  import styles from './ads.module.css'

  import { useGetAnnouncementByUserQuery } from '../../../../../graphql/generated/output';
  import { statusMap } from '../../../../../types';

  import PreviewSmallAdvertisment from '../../../../Advertisement/PreviewAdvertisment/PreviewBlocks/PreviewSmallAdvertisment/PreviewSmallAdvertisment';

    const ProfileListAdvertisments = ({ id }: { id: string }) => {

    const { data } = useGetAnnouncementByUserQuery({
      variables: { 
        id: id || ''
      }
    })

    const ads = useMemo(() => data?.getAnnouncementByUser || [], [data]);

    const [isActiveAnnouncements, setIsActiveAnnouncements] = useState(true); 

    const handleReleaseButton = () => {
      setIsActiveAnnouncements(true)
    }

    const handleFinishButton = () => {
      setIsActiveAnnouncements(false)
    }

    return (
      <div className={styles.container}>
        <div className={styles.bar_block}>
          <button 
            onClick={handleReleaseButton}
            className={`${isActiveAnnouncements ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
            <span>Активные</span>
          </button>
          <button 
            onClick={handleFinishButton}
            className={`${!isActiveAnnouncements ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
            <span>Завершенные</span>
          </button>
        </div>

        <div className={styles.ads}>
          {ads?.map((ad) => {
            const status = statusMap[ad.status]
            if (status === "Активное") {
              return <PreviewSmallAdvertisment input={ad} key={ad.id} />;
            }
            return null; 
          })}
        </div>
      </div>
    )
  }

  export default ProfileListAdvertisments
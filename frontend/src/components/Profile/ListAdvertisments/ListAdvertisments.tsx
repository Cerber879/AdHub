import React, { useMemo, useState } from 'react'

import styles from './ads.module.css'

import { useGetAnnouncementByProfileQuery } from '../../../graphql/generated/output';
import { statusMap } from '../../../types';

import PreviewProfileAdvertisment from '../../Advertisement/PreviewAdvertisment/PreviewBlocks/PreviewProfileAdvertisment/PreviewProfileAdvertisment';

const ProfileListAdvertisments = () => {

  const { data } = useGetAnnouncementByProfileQuery()
  const ads = useMemo(() => data?.getAnnouncementByProfile || [], [data]);

  const [releaseButton, setReleaseButton] = useState(true);
  const [archiveButton, setArchiveButton] = useState(false);

  const handleReleaseButton = () => {
    setReleaseButton(true)
    setArchiveButton(false)
  }

  const handleArchiveButton = () => {
    setReleaseButton(false)
    setArchiveButton(true)
  }

  return (
    <div className={styles.container}>
      <span className={styles.name}>Мои объявления</span>
      <div className={styles.bar_block}>
        <button 
          onClick={handleReleaseButton}
          className={`${releaseButton ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Активные</span>
        </button>
        <button 
          onClick={handleArchiveButton}
          className={`${archiveButton ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Архив</span>
        </button>
      </div>

      <div className={styles.ads}>
        {ads?.map((ad) => {
          const status = statusMap[ad.status]
          if (status === "Активное") {
            return <PreviewProfileAdvertisment input={ad} key={ad.id} />;
          }
          return null; 
        })}
      </div>
    </div>
  )
}

export default ProfileListAdvertisments
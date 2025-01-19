import React, { useEffect, useMemo, useState } from 'react'

import styles from './ads.module.css'

import { AnnouncementStatus, useGetAnnouncementByProfileQuery } from '../../../graphql/generated/output';

import PreviewProfileAdvertisment from '../../Advertisement/PreviewAdvertisment/PreviewBlocks/PreviewProfileAdvertisment/PreviewProfileAdvertisment';
import Loader from '../../../utils/Loader/Loader';


const ProfileListAdvertisments = () => {

  const { data, refetch, loading } = useGetAnnouncementByProfileQuery()
  const ads = useMemo(() => data?.getAnnouncementByProfile || [], [data]);

  const [releaseButton, setReleaseButton] = useState<AnnouncementStatus>(AnnouncementStatus.Active);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Мои объявления</span>
      <div className={styles.bar_block}>
        <button 
          onClick={() => setReleaseButton(AnnouncementStatus.Active)}
          className={`${releaseButton === AnnouncementStatus.Active ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Активные</span>
        </button>
        <button 
          onClick={() => setReleaseButton(AnnouncementStatus.Inactive)}
          className={`${releaseButton === AnnouncementStatus.Inactive ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Архив</span>
        </button>
      </div>

      {loading ? <Loader /> : 
        <div className={styles.ads}>
          {ads?.map((ad) => {
            if (releaseButton === ad.status) {
              return <PreviewProfileAdvertisment refetch={refetch} input={ad} key={ad.id} />;
            }
            return null; 
          })}
        </div>
      }
    </div>
  )
}

export default ProfileListAdvertisments
import React, { useState } from 'react'

import styles from './favourites.module.css'

import PreviewBigAdvertisment from '../../Advertisement/PreviewAdvertisment/PreviewBlocks/PreviewBigAdvertisment/PreviewBigAdvertisment';

const ProfileFavourites = () => {

    const [adsButton, setAdsButton] = useState(true);
    const [profilesButton, setProfilesButton] = useState(false);

    const handleAdsButton = () => {
        setAdsButton(true)
        setProfilesButton(false)
      }
    
      const handleProfilesButton = () => {
        setAdsButton(false)
        setProfilesButton(true)
      }

  return (
    <div className={styles.container}>
        <span className={styles.name}>Избранное</span>
        <div className={styles.bar_block}>
            <button 
                onClick={handleAdsButton}
                className={`${adsButton ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
                <span>Объявления</span>
            </button>
            <button 
                onClick={handleProfilesButton}
                className={`${profilesButton ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
                <span>Профили</span>
            </button>
        </div>
        <div className={styles.ads}>
            <PreviewBigAdvertisment />
            <PreviewBigAdvertisment />
            <PreviewBigAdvertisment />
        </div>
    </div>
  )
}

export default ProfileFavourites
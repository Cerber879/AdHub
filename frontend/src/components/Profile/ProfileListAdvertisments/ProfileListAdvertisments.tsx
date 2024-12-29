import React, { useState } from 'react'

import styles from './ads.module.css'

import PreviewProfileAdvertisment from '../../Advertisement/PreviewAdvertisment/PreviewBlocks/PreviewProfileAdvertisment/PreviewProfileAdvertisment';

const ProfileListAdvertisments = () => {

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
            <PreviewProfileAdvertisment />
            <PreviewProfileAdvertisment />
            <PreviewProfileAdvertisment />
        </div>
    </div>
  )
}

export default ProfileListAdvertisments
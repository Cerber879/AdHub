import React from 'react'

import { initialAdvertisement as ad } from '../../../../../../modules/data'

import styles from './data.module.css'

const DataAdvertisment = () => {
  return (
    <div className={styles.data_block}>
        <div className={styles.name_block}>
            <p className={styles.name_ad}>{ad.Name}</p>
            <img className={styles.heart_icon} src="./images/Advertisment/heart.svg" alt="heart" />
        </div>
        <p className={styles.price}>{ad.Price} ₽</p>
        <p className={styles.condition_ad}>{ad.Condition}</p>
        <div className={styles.description}>{ad.Description}</div>
        <span className={styles.date}>{ad.Date}</span>
    </div>
  )
}

export default DataAdvertisment
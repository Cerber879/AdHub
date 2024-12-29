import React from 'react'

import { initialAdvertisement as ad } from '../../../../../../modules/data'

import styles from './data.module.css'

const DataAdvertisment = () => {
  return (
    <div className={styles.data_block}>
        <div className={styles.name_block}>
            <div className={styles.name_ad}>{ad.Name}</div>
            <img className={styles.heart_icon} src="./images/Advertisment/heart.svg" alt="heart" />
        </div>
        <p className={styles.price}>{ad.Price} ₽</p>
    </div>
  )
}

export default DataAdvertisment
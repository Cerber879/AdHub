import React from 'react'

import { initialAdvertisement as ad } from '../../../../../../modules/data'

import styles from './data.module.css'

const DataAdvertisment = () => {
  return (
    <div className={styles.data_block}>
        <p className={styles.name_ad}>{ad.Name}</p>
        <p className={styles.price}>{ad.Price} ₽</p>
        <span className={styles.date}>{ad.Date}</span>
    </div>
  )
}

export default DataAdvertisment
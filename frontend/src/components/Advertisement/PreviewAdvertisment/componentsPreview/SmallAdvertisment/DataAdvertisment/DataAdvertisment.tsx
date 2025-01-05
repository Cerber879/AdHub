import React from 'react'

import styles from './data.module.css'

import { FindAllAnnouncementsQuery } from '../../../../../../graphql/generated/output'

interface PreviewSmallAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
}

const DataAdvertisment = ({ input }: PreviewSmallAdvertismentProps) => {
  return (
    <div className={styles.data_block}>
        <div className={styles.name_block}>
            <div className={styles.name_ad}>{input.name}</div>
            <img className={styles.heart_icon} src='/images/Advertisment/heart.svg' alt="heart" />
        </div>
        <p className={styles.price}>{input.price} ₽</p>
    </div>
  )
}

export default DataAdvertisment
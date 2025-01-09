import React from 'react'

import styles from './data.module.css'
import { FindAllAnnouncementsQuery } from '../../../../../../graphql/generated/output'

interface PreviewProfileAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
}

const DataAdvertisment = ({ input }: PreviewProfileAdvertismentProps) => {
  return (
    <div className={styles.data_block}>
      <p className={styles.name_ad}>{input.name}</p>
      <p className={styles.price}>{input.price} ₽</p>
      <span className={styles.date}>{new Date(input.placementDate).toLocaleDateString()}</span>
    </div>
  )
}

export default DataAdvertisment
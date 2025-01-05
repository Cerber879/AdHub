import React from 'react'
import { FindAllAnnouncementsQuery } from '../../../../../../graphql/generated/output' 

import styles from './data.module.css'

interface DataAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number]
}

const DataAdvertisment: React.FC<DataAdvertismentProps> = ({ input }) => {
  return (
    <div className={styles.data_block}>
      <div className={styles.name_block}>
        <p className={styles.name_input}>{input.name}</p>
        <img className={styles.heart_icon} src="/images/Advertisment/heart.svg" alt="heart" />
      </div>
      <p className={styles.price}>{input.price} ₽</p>
      <p className={styles.condition_input}>{input.condition}</p>
      <div className={styles.description}>{input.description}</div>
      <span className={styles.date}>{new Date(input.placementDate).toLocaleDateString()}</span> 
    </div>
  )
}

export default DataAdvertisment

import React from 'react'
import ProfileListBar from '../../../components/Profile/ListBar/ListBar'
import ListAdvertisments from '../../../components/Profile/ListAdvertisments/ListAdvertisments'

import styles from './profile.module.css'

const ProfileMain = () => {
  return (
    <div className={styles.container}>
        <ProfileListBar/>
        <ListAdvertisments />
    </div>
  )
}

export default ProfileMain
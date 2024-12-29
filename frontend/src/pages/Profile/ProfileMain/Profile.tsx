import React from 'react'
import ProfileListBar from '../../../components/Profile/ProfileListBar/ProfileListBar'
import ProfileListAdvertisments from '../../../components/Profile/ProfileListAdvertisments/ProfileListAdvertisments'

import styles from './profile.module.css'

const ProfileMain = () => {
  return (
    <div className={styles.container}>
        <ProfileListBar/>
        <ProfileListAdvertisments />
    </div>
  )
}

export default ProfileMain
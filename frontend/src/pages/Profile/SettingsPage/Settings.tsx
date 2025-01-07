import React from 'react'
import ProfileListBar from '../../../components/Profile/ListBar/ListBar'
import Settings from '../../../components/Profile/Settings/Settings'

import styles from './settings.module.css'

const SettingsPage = () => {
  return (
    <div className={styles.container}>
        <ProfileListBar/>
        <Settings />
    </div>
  )
}

export default SettingsPage
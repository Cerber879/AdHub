import React from 'react'

import ProfileListBar from '../../../components/Profile/ListBar/ListBar'
import ProfileMessenger from '../../../components/Profile/Messenger/Messenger'

import styles from '../profile.module.css'

const Chat = () => {
  return (
    <div className={styles.container}>
      <ProfileListBar/>
      <ProfileMessenger />
    </div>
  )
}

export default Chat
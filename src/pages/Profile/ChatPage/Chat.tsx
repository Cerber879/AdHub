import React from 'react'

import ProfileListBar from '../../../components/Profile/ProfileListBar/ProfileListBar'
import ProfileMessenger from '../../../components/Profile/ProfileMessenger/Messenger'

import styles from './chat.module.css'

const Chat = () => {
  return (
    <div className={styles.container}>
        <ProfileListBar/>
        <ProfileMessenger />
    </div>
  )
}

export default Chat
import React from 'react'
import InfoUser from '../../components/User/ListBar/InfoUser'
import Container from '../../components/User/dataUser/Container/Container'

import styles from './user.module.css'

const User = () => { 
  return (
    <div className={styles.container}>
      <InfoUser />
      <Container />
    </div>
  )
}

export default User
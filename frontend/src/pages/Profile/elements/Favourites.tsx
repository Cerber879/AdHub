import React from 'react'
import ProfileListBar from '../../../components/Profile/ListBar/ListBar'
import Favourites from '../../../components/Profile/Favourites/Favourites'

import styles from '../profile.module.css'

const FavouritesPage = () => {
  return (
    <div className={styles.container}>
      <ProfileListBar/>
      <Favourites />
    </div>
  )
}

export default FavouritesPage
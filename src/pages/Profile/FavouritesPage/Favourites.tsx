import React from 'react'
import ProfileListBar from '../../../components/Profile/ProfileListBar/ProfileListBar'
import ProfileFavourites from '../../../components/Profile/ProfileFavourites/ProfileFavourites'

import styles from './favourites.module.css'

const FavouritesPage = () => {
  return (
    <div className={styles.container}>
        <ProfileListBar/>
        <ProfileFavourites />
    </div>
  )
}

export default FavouritesPage
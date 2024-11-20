import React from 'react'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../../../utils/routes'

import { initialUser as user } from '../../../../../../modules/data'

import styles from './user.module.css'

const UserAdvertisment = () => {
  return (
    <div className={styles.info_block}>
      <p className={styles.user_name}>{user.FullName}</p>
      <div className={styles.user_rating_block}>
          <span className={styles.user_rating_number}>{user.Rating}</span>
          <span className={styles.user_count_feedback}>126 отзывов</span>
      </div>
      <Link
          to={ROUTES.MESSENGER}
          className={styles.link_chat}
      >
          <button className={styles.link_chat_name}>Написать</button>
      </Link>
  </div>
  )
}

export default UserAdvertisment
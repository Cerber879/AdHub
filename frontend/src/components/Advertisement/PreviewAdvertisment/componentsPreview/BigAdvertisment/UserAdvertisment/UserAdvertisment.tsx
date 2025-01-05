import React from 'react'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../../../utils/routes'

import styles from './user.module.css'

import { FindAllAnnouncementsQuery, useFindUserQuery } from '../../../../../../graphql/generated/output'

interface DataAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number]
}

const UserAdvertisment: React.FC<DataAdvertismentProps> = ({ input }) => {

  const { data } = useFindUserQuery({ variables: { id: input.userId } })
  const user = data?.findUser

  return (
    <div className={styles.info_block}>
      <p className={styles.user_name}>{user?.displayName}</p>
      <div className={styles.user_rating_block}>
          <span className={styles.user_rating_number}>{user?.rating}</span>
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
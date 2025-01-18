import React from 'react'

import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../../../utils/routes'

import styles from './user.module.css'

import { FindAllAnnouncementsQuery, useFindUserQuery, useGetReviewsByUserQuery } from '../../../../../../graphql/generated/output'
import { printRewiewsLength } from '../../../../../../utils/reviews-length'

interface DataAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number]
}

const UserAdvertisment: React.FC<DataAdvertismentProps> = ({ input }) => {

  const { data } = useFindUserQuery({ variables: { id: input.userId } })
  const user = data?.findUser

  const { data: dataReviews } = useGetReviewsByUserQuery({
    variables: {
      userId: user?.id || '',
    },
  })

  const reviews = dataReviews?.getReviewsByUser || [];

  return (
    <div className={styles.info_block}>
      <p className={styles.user_name}>{user?.displayName}</p>
      <div className={styles.user_rating_block}>
        {user?.rating && <span className={styles.user_rating_number}>{user.rating.toFixed(1)}</span>}
        <span className={styles.user_count_feedback}>{printRewiewsLength(reviews.length)}</span>
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
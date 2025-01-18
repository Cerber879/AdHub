import React, { useEffect } from 'react';
import styles from './reviews.module.css';
import { useFindUserQuery, useGetReviewsByUserQuery } from '../../../../../graphql/generated/output';
import Loader from '../../../../../utils/Loader/Loader';
import { Link } from 'react-scroll';
import { ROUTES } from '../../../../../utils/routes';

const UserReviews: React.FC<{ id: string }> = ({ id }) => {

  const { data: userData, refetch: refetchUserData } = useFindUserQuery({
    variables: { 
      id: id || '' 
    },
  });

  const userInfo = userData?.findUser

  const { data, loading, refetch } = useGetReviewsByUserQuery({
    variables: {
      userId: id || '',
    },
  })

  useEffect(() => {
    refetch()
    refetchUserData()
  }, [refetch, refetchUserData])

  const reviews = data?.getReviewsByUser || [];

  const reviewStatistics = [5, 4, 3, 2, 1].map((rating) => {
    const count = reviews.filter((r) => r.rating === rating).length;
    const percentage = ((count / reviews.length) * 100).toFixed(0);
    return { rating, count, percentage };
  });

  return loading ? <Loader /> : reviews.length === 0 ? <p>Нет отзывов</p> : (
    <div className={styles.reviewsBlock}>
      <div className={styles.overallRating}>
        {userInfo?.rating && <span className={styles.ratingValue}>{userInfo.rating.toFixed(1)}</span>}
        <div className={styles.averageRating}>
          <div className={styles.stars_big}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= Math.round(Number(userInfo?.rating))
                    ? styles.starFilled_big
                    : styles.starEmpty_big
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className={styles.totalReviews}>{`на основании ${reviews.length} оценок`}</span>
        </div>
      </div>

      <div className={styles.reviewsStatistics}>
        {reviewStatistics.map(({ rating, count, percentage }) => (
          <div key={rating} className={styles.ratingRow}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= rating ? styles.starFilled : styles.starEmpty
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <div className={styles.ratingBar}>
              <div
                className={styles.ratingFill}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className={styles.ratingCount}>{count}</span>
          </div>
        ))}
      </div>

      <div className={styles.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewItem}>
            <div className={styles.review_user_block}>
              <img
                src={review.reviewer?.avatar || '/images/Profile/user.svg'}
                alt='user'
                className={styles.avatar}
              />
              <div className={styles.info_reviewer}>
                <span className={styles.userName}>{review.reviewer ? review.reviewer.displayName : 'Удаленный пользователь'}</span>
                <span className={styles.date}>{new Date(review.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
            <div className={styles.reviewContent}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= review.rating ? styles.starFilled : styles.starEmpty
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <Link to={ROUTES.ITEMS}>
                <span className={styles.announcement_name}>{review.announcement ? review.announcement.name : 'Объявление удалено'}</span>
              </Link>
            </div>
            <span className={styles.reviewText}>{review.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;


const Stars = ({ rating }: {rating: number}) => {
  return (
    [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={
          star <= rating ? styles.starFilled : styles.starEmpty
        }
      >
        ★
      </span>
    ))
  )
}
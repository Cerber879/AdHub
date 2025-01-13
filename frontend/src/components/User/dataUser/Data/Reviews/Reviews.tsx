import React from 'react';
import styles from './reviews.module.css';

interface Review {
  id: string;
  rating: number;
  bio: string;
  user: {
    avatar?: string;
    name: string;
  };
}

interface UserReviewsProps {
  reviews?: Review[];
}

const UserReviews: React.FC<UserReviewsProps> = ({ reviews = [] }) => {
  const averageRating = reviews.length
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : '0';

  const reviewStatistics = [5, 4, 3, 2, 1].map((rating) => {
    const count = reviews.filter((r) => r.rating === rating).length;
    const percentage = ((count / reviews.length) * 100).toFixed(0);
    return { rating, count, percentage };
  });

  return (
    <div className={styles.reviewsBlock}>
      <div className={styles.overallRating}>
        <div className={styles.averageRating}>
          <span className={styles.ratingValue}>{averageRating}</span>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= Math.round(Number(averageRating))
                    ? styles.starFilled
                    : styles.starEmpty
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
            <span className={styles.ratingLabel}>{rating} ★</span>
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
            <img
              src={review.user.avatar || '/default-avatar.png'}
              alt={review.user.name}
              className={styles.avatar}
            />
            <div className={styles.reviewContent}>
              <span className={styles.userName}>{review.user.name}</span>
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
              <p className={styles.reviewText}>{review.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;

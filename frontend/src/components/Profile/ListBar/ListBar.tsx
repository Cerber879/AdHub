import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom'; 
import styles from './list.module.css';
import { ROUTES } from '../../../utils/routes';
import { useFindProfileQuery, useGetReviewsByUserQuery, useLogoutUserMutation } from '../../../graphql/generated/output';
import { useDispatch } from 'react-redux';
import { exit } from '../../../store/slices/userSlise';
import { printRewiewsLength } from '../../../utils/reviews-length';

const ListBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser, loadingLogout] = useLogoutUserMutation({
    onCompleted: () => {
      refetch()
      dispatch(exit());
      navigate(ROUTES.HOME);  
    },
    onError: (error) => {
      console.log('Error during logout:', error);
    }
  });

  const { data, refetch } = useFindProfileQuery();
  const user = data?.findProfile;

  const { data: dataReviews, loading } = useGetReviewsByUserQuery({
    variables: {
      userId: user?.id || '',
    },
  })

  const reviews = dataReviews?.getReviewsByUser || [];

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? styles.active : '';
  };

  const handleExit = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const [showReviewsPopup, setShowReviewsPopup] = useState(false);

  return (
    <div className={styles.bar_block}>
      <div className={styles.user_block}>
        <img className={styles.user_logo} src={user?.avatar || '/images/Profile/user.svg'} alt="avatar" />
        <span className={styles.user_name}>{user?.displayName}</span>
        <div className={styles.user_rating_block}>
          {user?.rating && <span className={styles.user_rating_number}>{user.rating}</span>}
          <span 
            className={styles.user_count_feedback} 
            onClick={() => setShowReviewsPopup(true)}
          >
            {printRewiewsLength(reviews.length)}
          </span>
        </div>
      </div>
      <div className={styles.links}>
        <Link to={ROUTES.PROFILE} className={`${styles.link} ${isActive(ROUTES.PROFILE)}`}>
          <span>Мои объявления</span>
        </Link>
        <Link to={ROUTES.FAVOURITES} className={`${styles.link} ${isActive(ROUTES.FAVOURITES)}`}>
          <span>Избранное</span>
        </Link>
        <Link to={ROUTES.MESSENGER} className={`${styles.link} ${isActive(ROUTES.MESSENGER)}`}>
          <span>Сообщения</span>
        </Link>
        <Link to={ROUTES.SETTINGS} className={`${styles.link} ${isActive(ROUTES.SETTINGS)}`}>
          <span>Настройки</span>
        </Link>
        <div onClick={handleExit} className={`${styles.link} ${styles.exit}`}>
          <span >Выйти</span>
        </div>
      </div>
      <div className={styles.reviewsList}>
      {showReviewsPopup && (
      <div className={styles.reviews_popup}>
        <div className={styles.reviews_popup_content}>
          <h3>Отзывы о {user?.displayName}</h3>
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
                    <span className={styles.userName}>
                      {review.reviewer ? review.reviewer.displayName : 'Удаленный пользователь'}
                    </span>
                    <span className={styles.date}>
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
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
                    <span className={styles.announcement_name}>
                      {review.announcement ? review.announcement.name : 'Объявление удалено'}
                    </span>
                  </Link>
                </div>
                <span className={styles.reviewText}>{review.content}</span>
              </div>
            ))}
          </div>
          <button 
            className={styles.close_button} 
            onClick={() => setShowReviewsPopup(false)}
          >
            Закрыть
          </button>
        </div>
      </div>
    )}
      </div>
    </div>
  );
};

export default ListBar;

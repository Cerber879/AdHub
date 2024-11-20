import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './list.module.css';
import { ROUTES } from '../../../utils/routes';
import { initialUser } from '../../../modules/data';

const ProfileListBar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <div className={styles.bar_block}>
      <div className={styles.user_block}>
        <img className={styles.user_logo} src={initialUser.LinkPhoto} alt="" />
        <span className={styles.user_name}>{initialUser.FullName}</span>
        <div className={styles.user_rating_block}>
          <span className={styles.user_rating_number}>{initialUser.Rating}</span>
          <span className={styles.user_count_feedback}>126 отзывов</span>
        </div>
      </div>
      <div className={styles.links}>
        <Link to={ROUTES.PROFILE} className={`${styles.link} ${isActive(ROUTES.PROFILE)}`}>
          <span>Мои объявления</span>
        </Link>
        <Link to={ROUTES.MESSENGER} className={`${styles.link} ${isActive(ROUTES.MESSENGER)}`}>
          <span>Сообщения</span>
        </Link>
        <Link to={ROUTES.FAVOURITES} className={`${styles.link} ${isActive(ROUTES.FAVOURITES)}`}>
          <span>Избранное</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileListBar;

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

  return (
    <div className={styles.bar_block}>
      <div className={styles.user_block}>
        <img className={styles.user_logo} src={user?.avatar || '/images/Profile/user.svg'} alt="avatar" />
        <span className={styles.user_name}>{user?.displayName}</span>
        <div className={styles.user_rating_block}>
          {user?.rating && <span className={styles.user_rating_number}>{user.rating}</span>}
          <span className={styles.user_count_feedback}>{printRewiewsLength(reviews.length)}</span>
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
    </div>
  );
};

export default ListBar;

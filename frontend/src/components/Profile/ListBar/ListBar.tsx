import { useLocation, Link, useNavigate } from 'react-router-dom'; 
import styles from './list.module.css';
import { ROUTES } from '../../../utils/routes';
import { useFindProfileQuery, useLogoutUserMutation } from '../../../graphql/generated/output';
import { useDispatch } from 'react-redux';
import { exit } from '../../../store/slices/userSlise';

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
          <span className={styles.user_rating_number}>{user?.rating}</span>
          <span className={styles.user_count_feedback}>126 отзывов</span>
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
        <div className={`${styles.link} ${styles.exit}`}>
          <span onClick={handleExit}>Выйти</span>
        </div>
      </div>
    </div>
  );
};

export default ListBar;

import { Link, useParams } from 'react-router-dom'; 
import { Link as ScrollLink } from 'react-scroll'
import { ROUTES } from '../../../utils/routes';
import { useFindUserQuery } from '../../../graphql/generated/output';

import styles from './info.module.css';

const InfoUser = () => {
  const { userId } = useParams();

  const { data } = useFindUserQuery({
    variables: { 
      id: userId || '' 
    }
  });

  const user = data?.findUser;

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
      <Link to={ROUTES.MESSENGER} className={styles.button_message}>Написать</Link>

      <div className={styles.nav_block}> 
        <span className={styles.nav_title}>Быстрый доступ</span>
        <div className={styles.nav_links}>
          <ScrollLink to="ads" smooth={true} duration={500} className={styles.nav_link} activeClass={styles.active} offset={-70}>Объявления</ScrollLink>
          <ScrollLink to="info" smooth={true} duration={500} className={styles.nav_link} activeClass={styles.active} offset={-70}>Информация</ScrollLink>
          <ScrollLink to="reviews" smooth={true} duration={500} className={styles.nav_link} activeClass={styles.active} offset={-70}>Отзывы</ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
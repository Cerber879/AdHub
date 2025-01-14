import React from 'react';

import ListAdvertisments from '../Data/ListAdvertisments/ListAdvertisments';
import UserInfo from '../Data/Info/Info';
import UserReviews from '../Data/Reviews/Reviews';

import styles from './container.module.css';
import { useParams } from 'react-router-dom';

const Container = () => {

  const { userId } = useParams<{userId: string}>();
  const validUserId = userId ?? ''
  
  return (
    <div className={styles.container}>

      <section id="ads" className={styles.section}>
        <span className={styles.name}>Объявления пользователя</span>
        <ListAdvertisments id={validUserId} />
      </section>

      <section id="info" className={styles.section}>
        <span className={styles.name}>Информация</span>
        <UserInfo id={validUserId}/>
      </section>

      <section id="reviews" className={styles.section}>
        <span className={styles.name}>Отзывы</span>
        <UserReviews id={validUserId}/>
      </section>
    </div>
  );
};

export default Container;

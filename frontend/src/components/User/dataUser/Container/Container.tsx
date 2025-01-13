import React from 'react';

import ListAdvertisments from '../Data/ListAdvertisments/ListAdvertisments';
import UserInfo from '../Data/Info/Info';
import UserReviews from '../Data/Reviews/Reviews';

import styles from './container.module.css';

const Container = () => {
  return (
    <div className={styles.container}>

      <section id="ads" className={styles.section}>
        <span className={styles.name}>Объявления пользователя</span>
        <ListAdvertisments />
      </section>

      <section id="info" className={styles.section}>
        <span className={styles.name}>Информация</span>
        <UserInfo />
      </section>

      <section id="reviews" className={styles.section}>
        <span className={styles.name}>Отзывы</span>
        <UserReviews />
      </section>
    </div>
  );
};

export default Container;

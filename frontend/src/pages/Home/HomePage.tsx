import React from 'react';
import AdvertisementList from '../../components/Advertisement/ViewAdvertisementList/ViewAdvertisementList';
import AdvertisementTop from '../../components/SearchNavigation/SearchNavigation';

import styles from './home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <AdvertisementTop/>
      <h1 className={styles.title}>Рекомендованные объявления</h1>
      <div className={styles.list}>
        <AdvertisementList/>
      </div>
    </div>
  );
};

export default Home;

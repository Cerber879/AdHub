import React from 'react';
import AdvertisementTop from '../../components/SearchNavigation/SearchNavigation';
import AdvertisementData from '../../components/Advertisement/AdvertismentPage/Advertisement';

import styles from './advertisment.module.css'

const AdvertismentPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AdvertisementTop />
      <AdvertisementData />
    </div>
  );
};

export default AdvertismentPage;

import React from 'react';
import AdvertisementList from '../../components/Advertisement/ViewAdvertisementList/ViewAdvertisementList';
import AdvertisementTop from '../../components/SearchNavigation/SearchNavigation';

import styles from './catalogue.module.css'
import Filters from '../../components/Advertisement/Filters/Filters';
import Characteristics from '../../components/Advertisement/Filters/Characteristics/Characteristics';

const Catalogue: React.FC = () => {
  return (
    <div className={styles.container}>
      <AdvertisementTop/>
      <h1 className={styles.title}>Машины</h1>
      <div className={styles.content}>
        <Characteristics />
        <div className={styles.list}>
            <Filters/>
            <AdvertisementList/>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;

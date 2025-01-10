import React from 'react';
import AdvertisementTop from '../../components/SearchNavigation/SearchNavigation';
import AdvertisementData from '../../components/Advertisement/AdvertismentPage/Advertisement';

const AdvertismentPage: React.FC = () => {
  return (
    <div>
      <AdvertisementTop />
      <AdvertisementData />
    </div>
  );
};

export default AdvertismentPage;

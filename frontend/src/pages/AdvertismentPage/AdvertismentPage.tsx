import React from 'react';
import AdvertisementTop from '../../components/Advertisement/AdvertismentPage/AdvertismentTop/AdvertismentTop';
import AdvertisementData from '../../components/Advertisement/AdvertismentPage/AdvertismentData/AdvertisementData';

const AdvertismentPage: React.FC = () => {
  return (
    <div>
      <AdvertisementTop />
      <AdvertisementData />
    </div>
  );
};

export default AdvertismentPage;
import React from 'react';
import AdvertisementList from '../../components/Advertisement/ViewAdvertisementList/ViewAdvertisementList';
import AdvertisementTop from '../../components/Advertisement/AdvertismentPage/AdvertismentTop/AdvertismentTop';

const Home: React.FC = () => {
  return (
    <div>
      <AdvertisementTop/>
      <h1>Рекомендованные объявления</h1>
      <AdvertisementList/>
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setAdvertisements } from '../../../store/slices/advertisementSlice';
import { getAdvertisements } from '../../../services/api';
import { RootState } from '../../../store/store';
import styles from './advertisment.module.css'
import PreviewBigAdvertisment from '../PreviewAdvertisment/PreviewBlocks/PreviewBigAdvertisment/PreviewBigAdvertisment';
import PreviewSmallAdvertisment from '../PreviewAdvertisment/PreviewBlocks/PreviewSmallAdvertisment/PreviewSmallAdvertisment';

import AdvertisementTop from '../AdvertismentPage/AdvertismentTop/AdvertismentTop';
const AdvertisementList: React.FC = () => {
  const dispatch = useDispatch();
  const advertisements = useSelector((state: RootState) => state.advertisement.advertisements);

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const data = await getAdvertisements();
        dispatch(setAdvertisements(data));
      } catch (error) {
        console.error('Failed to fetch advertisements', error);
      }
    };

    fetchAdvertisements();
  }, [dispatch]);

  return (
    <div>
      <AdvertisementTop/>
      <ul className={styles.advertisment}>
        {advertisements.map((ad) => (
          <li key={ad.AdvertisementID}>{ad.Name}</li>
        ))}
      </ul>
      <PreviewBigAdvertisment />
      <PreviewSmallAdvertisment />
    </div>
  );
};

export default AdvertisementList;

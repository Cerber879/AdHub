import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setAdvertisements } from '../../../store/slices/advertisementSlice';
import { getAdvertisements } from '../../../services/api';
import { RootState } from '../../../store/store';
import styles from './advertisment.module.css'
import PreviewBigAdvertisment from '../PreviewAdvertisment/PreviewBigAdvertisment/PreviewBigAdvertisment';
import PreviewSmallAdvertisment from '../PreviewAdvertisment/PreviewSmallAdvertisment/PreviewSmallAdvertisment';


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
      <h2 className={styles.catalogue}>Каталог Объявлений</h2>
      <div className={styles.search_bar}>
        <form className={styles.search_form}>
          <input className={styles.search_input} type="text" placeholder="Искать здесь..."/>
          <button className={styles.search_button}type="submit">
            <img className={styles.search_icon} src="/images/ImagesHomePage/search.svg" alt="Icon" />
          </button>
        </form>
        <div className={styles.sort_by}>
          <select>
            <option value="relevance">По релевантности</option>
            <option value="date">По дате</option>
            <option value="price">По цене</option>
          </select>
        </div>
      </div>
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

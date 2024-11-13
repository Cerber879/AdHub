import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAdvertisements } from '../../../store/slices/advertisementSlice';
import { getAdvertisements } from '../../../services/api';
import { RootState } from '../../../store/store';
import styles from './advertisment.module.css'


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
        <form>
          <input type="text" placeholder="Искать здесь..."/>
          <button type="submit">
            <img className={styles.search_icon} src="/images/ImagesHomePage/search.svg" alt="Icon" />
          </button>
        </form>
      </div>
      <div></div>
      <ul className={styles.advertisment}>
        {advertisements.map((ad) => (
          <li key={ad.AdvertisementID}>{ad.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertisementList;

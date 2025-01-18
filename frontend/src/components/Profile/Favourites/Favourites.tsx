import React, { useEffect, useMemo, useState } from 'react';
import styles from './favourites.module.css';
import PreviewBigAdvertisment from '../../Advertisement/PreviewAdvertisment/PreviewBlocks/PreviewBigAdvertisment/PreviewBigAdvertisment';
import { useGetFavouritesByUserIdQuery } from '../../../graphql/generated/output';
import Loader from '../../../utils/Loader/Loader';

const Favourites = () => {
  const [adsButton, setAdsButton] = useState(true);
  const [profilesButton, setProfilesButton] = useState(false);

  const handleAdsButton = () => {
    setAdsButton(true);
    setProfilesButton(false);
  };

  const handleProfilesButton = () => {
    setAdsButton(false);
    setProfilesButton(true);
  };

  const { data: getFavouritesData, refetch, loading } = useGetFavouritesByUserIdQuery({ variables: {} });

  const favourites = useMemo(() => getFavouritesData?.getFavouritesByUserId, [getFavouritesData]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Избранное</span>
      <div className={styles.bar_block}>
        <button
          onClick={handleAdsButton}
          className={`${adsButton ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Объявления</span>
        </button>
        <button
          onClick={handleProfilesButton}
          className={`${profilesButton ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Профили</span>
        </button>
      </div>
      {loading ? <Loader /> : 
        <div className={styles.ads}>
          {favourites?.map((announcement) => (
            <PreviewBigAdvertisment key={announcement.id} input={announcement} />
          ))}
        </div>
      }
    </div>
  );
};

export default Favourites;

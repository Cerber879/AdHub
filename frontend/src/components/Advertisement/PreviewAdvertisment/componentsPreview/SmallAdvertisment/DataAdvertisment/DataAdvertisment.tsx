import React, { useEffect, useMemo, useState } from 'react'

import styles from './data.module.css'

import { FindAllAnnouncementsQuery, useAddFavouriteMutation, useCheckAnnouncementInFavouritesQuery, useRemoveFavouriteMutation } from '../../../../../../graphql/generated/output'
import { useCurrent } from '../../../../../../hooks/useCurrent'

interface PreviewSmallAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
  stopPropagation: (event: React.MouseEvent) => void
}

const DataAdvertisment = ({ input, stopPropagation }: PreviewSmallAdvertismentProps) => {
  const { user } = useCurrent();

  const { data } = useCheckAnnouncementInFavouritesQuery({
    variables: { adId: input.id },
    skip: !user,
  });

  const [check, setCheck] = useState(data?.checkAnnouncementInFavourites || false);

  useEffect(() => {
    if (data) {
      setCheck(data.checkAnnouncementInFavourites);
    }
  }, [data]);

  const [addFavourites] = useAddFavouriteMutation({
    onCompleted() {
      console.log("Added to favourites");
    },
  });

  const [removeFavourites] = useRemoveFavouriteMutation({
    onCompleted() {
      console.log("Removed from favourites");
    },
  });

  const handleFavourites = (id: string, event: React.MouseEvent) => {
    stopPropagation(event);

    if (user) {
      if (check) {
        setCheck(false); 
        removeFavourites({ variables: { id: id } });
      } else {
        setCheck(true); 
        addFavourites({ variables: { data: { announcementID: id } } });
      }
    } else {
      alert('Вы не авторизованы');
    }
  };

  return (
    <div className={styles.data_block}>
      <div className={styles.name_block}>
        <div className={styles.name_ad}>{input.name}</div>
        <img
          className={styles.heart_icon}
          onClick={(e) => handleFavourites(input.id, e)}
          src={
            check
              ? '/images/Advertisment/heart_blue_fill.svg'
              : '/images/Advertisment/heart.svg'
          }
          alt="heart"
        />
      </div>
      <p className={styles.price}>{input.price} ₽</p>
    </div>
  );
};

export default DataAdvertisment;

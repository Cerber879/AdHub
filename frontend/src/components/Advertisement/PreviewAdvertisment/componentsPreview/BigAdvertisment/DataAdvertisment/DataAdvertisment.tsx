import React, { useEffect, useState } from 'react'
import { FindAllAnnouncementsQuery, useAddFavouriteMutation, useCheckAnnouncementInFavouritesQuery, useRemoveFavouriteMutation } from '../../../../../../graphql/generated/output' 

import styles from './data.module.css'

import { parseAnnouncementCondition } from '../../../../../../utils/parse-types-ad'
import { useCurrent } from '../../../../../../hooks/useCurrent'

interface DataAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number]
  stopPropagation: (event: React.MouseEvent) => void
}

const DataAdvertisment: React.FC<DataAdvertismentProps> = ({ input, stopPropagation }) => {

  const { user } = useCurrent();

  const { data, refetch } = useCheckAnnouncementInFavouritesQuery({
    variables: { adId: input.id },
    skip: !user,
  });

  const [check, setCheck] = useState(data?.checkAnnouncementInFavourites || false);

  useEffect(() => {
    refetch()
    if (data) {
      setCheck(data.checkAnnouncementInFavourites);
    }
  }, [data, refetch]);

  const [addFavourites, { loading: addLoading }] = useAddFavouriteMutation({
    onCompleted() {
      console.log("Added to favourites");
    },
  });

  const [removeFavourites, { loading: removeLoading }] = useRemoveFavouriteMutation({
    onCompleted() {
      console.log("Removed from favourites");
    },
  });

  const handleFavourites = (id: string, event: React.MouseEvent) => {
    stopPropagation(event);

    if (user && !addLoading && !removeLoading) {
      if (check) {
        setCheck(false); 
        removeFavourites({ variables: { id: id } });
      } else {
        setCheck(true); 
        addFavourites({ variables: { data: { announcementID: id } } });
      }
      refetch()
    } 
  };

  return (
    <div className={styles.data_block}>
      <div className={styles.name_block}>
        <p className={styles.name_input}>{input.name}</p>
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
      <p className={styles.condition_input}>{parseAnnouncementCondition(input.condition)}</p>
      <div className={styles.description}>{input.description}</div>
      <span className={styles.date}>{new Date(input.placementDate).toLocaleDateString()}</span> 
    </div>
  )
}

export default DataAdvertisment
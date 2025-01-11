import React, { useEffect, useMemo, useState } from 'react'

import styles from './data.module.css'

import { FindAllAnnouncementsQuery, useAddFavouriteMutation, useCheckAnnouncementInFavouritesQuery, useRemoveFavouriteMutation } from '../../../../../../graphql/generated/output'

interface PreviewSmallAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
}

const DataAdvertisment = ({ input }: PreviewSmallAdvertismentProps) => {

  const { data } = useCheckAnnouncementInFavouritesQuery({ variables: { adId: input.id } })

  const [check, setCheck] = useState(data?.checkAnnouncementInFavourites || false)

  useEffect(() => {
    setCheck(data?.checkAnnouncementInFavourites || false)
  }, [data])

  const [addFavourites] = useAddFavouriteMutation({
    onCompleted() {
      setCheck(true)
    }
  })

  const [removeFavourites] = useRemoveFavouriteMutation({
    onCompleted() {
      setCheck(false)
    }
  })

  const handleAddFavourites = (id: string) => {
    addFavourites({ variables: { data: { announcementID: id } } })
  }

  const handleremoveFavourites = (id: string) => {
    removeFavourites({ variables: { id: id } })
  }

  const handleFavourites = (id: string) => {
    if (check) {
      handleremoveFavourites(id)
    } else {
      handleAddFavourites(id)
    }
  }

  return (
    <div className={styles.data_block}>
      <div className={styles.name_block}>
        <div className={styles.name_ad}>{input.name}</div>
        <img className={styles.heart_icon} onClick={() => {handleFavourites(input.id)}} src={`${!check ? '/images/Advertisment/heart.svg' : '/images/Advertisment/heart_blue_fill.svg'}`} alt="heart" />
      </div>
      <p className={styles.price}>{input.price} ₽</p>
    </div>
  )
}

export default DataAdvertisment

import React, { useEffect, useRef, useState } from 'react';
import styles from './advertisementdata.module.css'
import {initialUser as user} from '../../../../modules/data'
import { photos } from '../../../../modules/data'
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../../../../utils/routes';

import { useGetAnnouncementQuery } from '../../../../graphql/generated/output';

const AdvertisementData = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = photos

  const { adId } = useParams();
  console.log(adId)

  const imageDivRef = useRef<HTMLDivElement>(null);

  const { data } = useGetAnnouncementQuery({variables: { id: adId || '' }})
  const advertisment = data?.getAnnouncementById
  console.log("advertisment", advertisment)

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  useEffect(() => {
      if (images[currentImage] && imageDivRef.current) {
        imageDivRef.current.style.setProperty('--background-image', `url('${images[currentImage]}')`);
      }
  }, [currentImage, images]);

  return (
    <div className={styles.container}>
        <div >
          <ul className={styles.complex_list}>
            <li className={styles.complex_list_item}>
              <a className={styles.link}href="/">{advertisment?.categoryId}</a>
            </li>
          </ul>
        </div>
        <div className={styles.flex_block}>
          <h2 className={styles.title}>{advertisment?.name}</h2>
        </div>

        <div className={styles.main_block}>
          <div className={styles.main_image_description}>
            <div className={styles.image_div} ref={imageDivRef}>
              <img
                className={styles.image_block}
                src={images[currentImage]}
                alt="img"
              />
            </div>
            <div className={styles.thumbnails}>
            {images.map((img, index) => (
              <img 
                key={index}
                className={`${styles.thumbnail} ${currentImage === index ? styles.active : styles.passive}`}
                src={img}
                alt={`thumbnail ${index}`}
                onClick={() => setCurrentImage(index)}
              />
              ))} {/*переключатель на картинки справа слева*/}
            </div>
            <div className={styles.characteristics}>
            <h2>Характеристики</h2>
            <dl className={styles.characteristics_list}>
              <div className={styles.characteristic_item}>
                <dt>Состояние:</dt>
                <dd>{advertisment?.condition}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Дата размещения:</dt>
                <dd>{new Date(advertisment?.placementDate).toLocaleDateString()}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Статус:</dt>
                <dd>{advertisment?.status}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Цена:</dt>
                <dd>{advertisment?.price} ₽</dd>
              </div>
            </dl>
          </div>
            <div>
              <h2>Описание</h2>
              <p className={styles.description}>{advertisment?.description}</p>
            </div>
              
            
          </div>
          <div className={styles.info_block}>
            <div className={styles.price_heart}>
              <p className={styles.price}>{advertisment?.price} ₽</p>
              <img className={styles.heart_icon} src="/images/Advertisment/heart.svg" alt="heart"></img> {/*button heart*/}
            </div>
            
            <Link className={styles.user_info}
              to={ROUTES.USER + '/' + advertisment?.userId}
            >
              <h3>
                <a className={styles.user_name} href="/">{user.FullName}</a>
              </h3>
              <img
                className={styles.avatar}
                src="https://i.pravatar.cc/150?img=10"
                alt="User Avatar"
              />
            </Link>
            
            <div className={styles.buttons}>
              <button className={styles.button}>Показать номер</button>
              <Link to={ROUTES.MESSENGER}>
                <button className={styles.button}>Написать</button>
              </Link>
            </div>
          </div>
          {/*отзывы*/}
        </div>
        
    </div>
  )
}

export default AdvertisementData

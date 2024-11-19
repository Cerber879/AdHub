import React, { useRef, useState } from 'react'

import { initialAdvertisement as ad } from '../../../../modules/data'
import { initialUser as user } from '../../../../modules/data'
import { photos } from '../../../../modules/data'

import styles from './preview.module.css'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../utils/routes'

const PreviewBigAdvertisment = () => {

    const [activeAd, setActiveAd] = useState(false);

    const [blockWidth, setBlockWidth] = useState(0);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageBlockRef = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (imageBlockRef.current) {
        const rect = imageBlockRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setBlockWidth(rect.width / Math.min(photos.length, 5));
        const index = Math.floor(x / blockWidth);
        setCurrentImageIndex(index);
      }
    };
      
  return (
    <Link 
        onMouseEnter={() => setActiveAd(true)} 
        onMouseLeave={() => setActiveAd(false)} 
        to={ROUTES.ADVERTISMENT} 
        className={styles.container}
    >
        <div
            className={styles.image_block}
            ref={imageBlockRef}
            onMouseMove={handleMouseMove}
        >
            {(currentImageIndex + 1 === photos.length || (currentImageIndex + 1 === 5 && photos.length > 5)) &&
                <>
                    <div className={styles.overlay}></div>
                    <div className={styles.last_photo_text}>
                        <span>Ещё</span>
                        <span>
                            {photos.length - (currentImageIndex + 1)} фото
                        </span>
                    </div>
                </>
            }
            {activeAd && 
                <div className={styles.thumbnails}>
                    {photos.slice(0, 5).map((photo, index) => (
                    <div
                        key={index}
                        style={{ width: `${blockWidth}px` }}
                        className={`${styles.thumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                    />
                    ))}
                </div>
            }
            <img src={photos[currentImageIndex]} alt="item" />
        </div>
        <div className={styles.data_block}>
            <div className={styles.name_block}>
                <p className={styles.name_ad}>{ad.Name}</p>
                <img className={styles.heart_icon} src="./images/Advertisment/heart.svg" alt="heart" />
            </div>
            <p className={styles.price}>{ad.Price} ₽</p>
            <p className={styles.condition_ad}>{ad.Condition}</p>
            <div className={styles.description}>{ad.Description}</div>
            <span className={styles.date}>{ad.Date}</span>
        </div>
        <div className={styles.info_block}>
            <p className={styles.user_name}>{user.FullName}</p>
            <div className={styles.user_rating_block}>
                <span className={styles.user_rating_number}>{user.Rating}</span>
                <span className={styles.user_count_feedback}>126 отзывов</span>
            </div>
            <Link
                to={ROUTES.MESSENGER}
                className={styles.link_chat}
            >
                <button className={styles.link_chat_name}>Написать</button>
            </Link>
        </div>
    </Link>
  )
}

export default PreviewBigAdvertisment
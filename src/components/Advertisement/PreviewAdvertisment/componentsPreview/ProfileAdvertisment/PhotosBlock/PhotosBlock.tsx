import React, { useRef, useState } from 'react'

import { photos } from '../../../../../../modules/data';

import styles from './photos.module.css'

const PhotosBlock: React.FC<{active: boolean;}> = ({ active }) => {

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
        {active && 
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
        <img src={photos[currentImageIndex]} alt='loading...' />
    </div>
  )
}

export default PhotosBlock
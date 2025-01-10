import React, { useState } from 'react';
import stylesProfile from './photoProfile.module.css';
import stylesStandart from './photoStandart.module.css';
import { FindAllAnnouncementsQuery, useGetPhotosByAnnouncementIdQuery } from '../../../../../graphql/generated/output';

interface PreviewSmallAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
  useStylesProfile: boolean
}

const PhotosBlock = ({ input, useStylesProfile }: PreviewSmallAdvertismentProps) => {
  const styles = useStylesProfile ? stylesProfile : stylesStandart;

  const { data } = useGetPhotosByAnnouncementIdQuery({ 
    variables: { 
      id: input.id 
    } 
  }); 

  const photos = data?.getPhotosByAnnouncementId || [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState([0, 1, 2, 3]);
  const [isHovered, setIsHovered] = useState(false);

  const quantitySlides = Math.min(10, photos.length);

  const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const index = Math.floor((x / rect.width) * quantitySlides);

    if (index >= 0 && index < quantitySlides) {
      setCurrentImageIndex(index);
      updateVisibleThumbnails(index);
    }
  };

  const updateVisibleThumbnails = (index: number) => {
    const end = Math.min(quantitySlides - 1, index + 1); 
    const start = Math.max(0, end - 3); 
    
    setVisibleThumbnails(
      Array.from({ length: Math.min(4, photos.length) }, (_, i) => start + i)
    );
  };
    

  return (
    <div
      className={styles.image_block}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setIsHovered(false); setCurrentImageIndex(0); }}
      onMouseEnter={() => setIsHovered(true)}
    >
      {currentImageIndex + 1 !== photos.length 
            && currentImageIndex + 1 === quantitySlides
            && photos.length > quantitySlides
            &&
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
      {isHovered && photos.length > 1 && (
        <div className={styles.thumbnails}>
          {visibleThumbnails.slice(0, Math.min(10, photos.length)).map((index, i) => (
            <div
              key={index}
              className={`${styles.thumbnail} ${index === currentImageIndex && styles.active}`}
              style={{ transform: `translateX(${i * 5}px)` }}
            ></div>
          ))}
        </div>
      )}
      <img src={photos[currentImageIndex]} alt="Фото" />
    </div>
  );
};

export default PhotosBlock;
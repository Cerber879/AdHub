import { useEffect, useRef, useState, useMemo } from 'react';
import styles from './advertisementdata.module.css'
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../../../../utils/routes';
import { useFindCharacteristicsQuery, useFindParentCategoriesQuery, useFindUserQuery, useGetAnnouncementCharacteristicsQuery, useGetAnnouncementQuery, useGetPhotosByAnnouncementIdQuery } from '../../../../graphql/generated/output';
import { parseAnnouncementCondition, parseAnnouncementStatus } from '../../../../utils/parse-types-ad';

const AdvertisementData = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageDivRef = useRef<HTMLDivElement>(null);

  const { adId } = useParams();

  const { data: imagesData } = useGetPhotosByAnnouncementIdQuery({ variables: { id: adId || ''} }); 
  const images = useMemo(() => imagesData?.getPhotosByAnnouncementId || [], [imagesData]);



  const {data : announcementCharacteristicsData } = useGetAnnouncementCharacteristicsQuery({ variables: { id: adId || '' } });
  const announcementCharacteristics = useMemo(() => announcementCharacteristicsData?.getAnnouncementCharacteristics || [], [announcementCharacteristicsData]);

  const { data: advertismentData } = useGetAnnouncementQuery({ variables: { id: adId || '' } });
  const advertisment = advertismentData?.getAnnouncementById;

  const { data: categoriesData } = useFindParentCategoriesQuery({ variables: { id: advertisment?.categoryId || '' } });
  const categories = categoriesData?.findParentCategories;
  console.log(categories, "123")
  var categoryIdd:string = "";
  if (categories && categories.length > 0) {
    categoryIdd = categories[1]
  }
  const { data : characteristicsData } = useFindCharacteristicsQuery({ variables: { id: categoryIdd || '' } });
  const characteristics = useMemo(() => characteristicsData?.findCharacteristics || [], [characteristicsData]);
  console.log(announcementCharacteristics)
  console.log(characteristics)
  const { data: userData } = useFindUserQuery({ variables: { id: advertisment?.userId || '' } });
  const user = userData?.findUser;

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images?.length) % images?.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images?.length);
  };

  useEffect(() => {
    if (images && images[currentImage] && imageDivRef.current) {
      imageDivRef.current.style.setProperty('--background-image', `url('${images[currentImage]}')`);
    }
  }, [currentImage, images]);
  console.log(user)
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.complex_list}>
          <Link to={ROUTES.HOME} className={styles.link}>Главная</Link>
          { categories?.slice(0, categories.length - 1).map((category) => (
            <li key={category} className={styles.complex_list_item}>
              <Link className={styles.link} to={`/${category}/${categoryIdd}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.main_block}>
        <div className={styles.main_image_description}>
          <div className={styles.header}>
            <h2 className={styles.title}>{advertisment?.name}</h2>
          </div>
          <div className={styles.image_div} ref={imageDivRef}>
            <img
              className={styles.image_block}
              src={images[currentImage]}
              alt="img"
            />
            <div className={styles.switch_buttons} >
              <button className={styles.prev_button} onClick={handlePrevImage}>
                &lt; {/* Стрелка влево */}
              </button>
              <button className={styles.next_button} onClick={handleNextImage}>
                &gt; {/* Стрелка вправо */}
              </button>
            </div>
          </div>

          <div className={styles.thumbnails}>
            {images?.map((img, index) => (
              <img
                key={index}
                className={`${styles.thumbnail} ${currentImage === index ? styles.active : styles.passive}`}
                src={img}
                alt={`thumbnail ${index}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>

          <div>
            <h2>Описание</h2>
            <p className={styles.description}>{advertisment?.description}</p>
          </div>

          <div className={styles.characteristics}>
            <h2>Характеристики</h2>
            
            <dl className={styles.characteristics_list}>
              
              <div className={styles.characteristic_item}>
                <dt>Состояние:</dt>
                <dd>{parseAnnouncementCondition(advertisment?.condition)}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Дата размещения:</dt>
                <dd>{new Date(advertisment?.placementDate).toLocaleDateString()}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Статус:</dt>
                <dd>{parseAnnouncementStatus(advertisment?.status)}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Цена:</dt>
                <dd>{advertisment?.price} ₽</dd>
              </div>
              {announcementCharacteristics?.map((item, index) => {
    
                const characteristic = characteristics.find(c => c.id === item.characteristicId);

                
                return (
                  <div className={styles.characteristic_item} key={index}>
                    <dt>{characteristic ? characteristic.name : 'Unknown'}:</dt> {/* Если не найдено, выводим 'Unknown' */}
                    <dd>{item.value}</dd>
                  </div>
                );
              })}
            </dl>
          </div>

          
        </div>

        <div className={styles.info_block}>
          <div className={styles.header}>
            <p className={styles.price}>{advertisment?.price} ₽</p>
            <img className={styles.heart_icon} src="/images/Advertisment/heart.svg" alt="heart" /> 
          </div>
          <Link className={styles.user_info}
            to={ROUTES.USER + '/' + advertisment?.userId}
          >
            <span className={styles.user_name}>{user?.displayName}</span>
            <img
              className={styles.avatar}
              src={user?.avatar != null ? user.avatar : ''}
              alt="User Avatar"
            />
          </Link>

          <div className={styles.social_buttons}>
            <button className={styles.social}>Показать номер</button>
            <Link to={ROUTES.MESSENGER}>
              <button className={styles.social}>Написать</button>
            </Link>
          </div>
        </div>
        {/*отзывы*/}
      </div>
    </div>
  )
}

export default AdvertisementData
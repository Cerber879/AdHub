import React, { useEffect, useRef, useState, useMemo } from 'react';
import styles from './advertisementdata.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import { useAddFavouriteMutation, useCheckAnnouncementInFavouritesQuery, useCreateReviewMutation, useFindParentCategoriesQuery, useFindUserQuery, useGetAnnouncementCharacteristicsQuery, useGetAnnouncementQuery, useGetChatsQuery, useGetPhotosByAnnouncementIdQuery, useGetReviewsByAnnouncementQuery, useGetReviewsByUserQuery, useIsThereChatQuery, useRemoveFavouriteMutation } from '../../../graphql/generated/output';
import { parseAnnouncementCondition, parseAnnouncementStatus } from '../../../utils/parse-types-ad';
import Loader from '../../../utils/Loader/Loader';

const Advertisement = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageDivRef = useRef<HTMLDivElement>(null);

  const { adId } = useParams();
  const navigate = useNavigate();

  const { data: imagesData } = useGetPhotosByAnnouncementIdQuery({ variables: { id: adId || '' } }); 
  const images = useMemo(() => imagesData?.getPhotosByAnnouncementId || [], [imagesData]);

  const { data: announcementCharacteristicsData, loading: announcementCharacteristicsLoading } = useGetAnnouncementCharacteristicsQuery({ variables: { id: adId || '' } });
  const announcementCharacteristics = useMemo(() => announcementCharacteristicsData?.getAnnouncementCharacteristics || [], [announcementCharacteristicsData]);

  const { data: advertismentData } = useGetAnnouncementQuery({ variables: { id: adId || '' } });
  const advertisment = useMemo(() => advertismentData?.getAnnouncementById, [advertismentData])

  const { data: categoriesData } = useFindParentCategoriesQuery({ variables: { id: advertisment?.categoryId || '' } });
  const categories = categoriesData?.findParentCategories;

  const { data: userData } = useFindUserQuery({ variables: { id: advertisment?.userId || '' } });
  const user = userData?.findUser;

  const { data: reviewsData, refetch: refetchReviews } = useGetReviewsByAnnouncementQuery({ 
    variables: { announcementId: advertisment?.id || '' }
  })

  const [isHovered, setIsHovered] = useState(false);

  const { data, refetch } = useCheckAnnouncementInFavouritesQuery({
    variables: { adId: adId || '' },
    skip: !user,
    onCompleted: () => {
      refetch()
    }
  });

  const [check, setCheck] = useState(data?.checkAnnouncementInFavourites || false);

  useEffect(() => {
    if (data) {
      setCheck(data.checkAnnouncementInFavourites);
    }
  }, [data]);

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

  const handleFavourites = (id: string | undefined, event: React.MouseEvent) => {
    event.stopPropagation();
    if (id &&user && !addLoading && !removeLoading) {
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

  const { data: chatData } = useIsThereChatQuery({
    variables: {
      friendId: user?.id || ''
    }
  })

  const TransitionToChat = (userId: string, adId: string) => {
    const isThereChat = chatData?.isThereChat
    console.log(isThereChat)
    if (isThereChat) {
      navigate(`${ROUTES.MESSEGES}/${isThereChat}`); 
    } else if (isThereChat === null) {
      navigate(`${ROUTES.MESSENGER_TEMP}/${adId}/${userId}`); 
    } else {
      throw Error('Ошибка при проверке чата')
    }
  };

  const ratingRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<{message: string, show: boolean | null}>({
    message: '',
    show: null
  });
  const [createReview, { loading: createReviewLoading, error: createReviewError }] = useCreateReviewMutation({
    onCompleted: () => {
      refetchReviews()
      setError({ message: '', show: false });
    },
    onError: (error) => {
      setError({ message: error.message, show: true });
    }
  });

  const [reviewsMas, setReviewsMas] = useState(reviewsData?.getReviewsByAnnouncement || []);

  useEffect(() => {
    if (reviewsData) {
      setReviewsMas(reviewsData.getReviewsByAnnouncement || []);
    }
  }, [reviewsData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (ratingRef.current && contentRef.current && advertisment?.id && user?.id) {
      const rating = ratingRef.current.value;
      const content = contentRef.current.value;
  
      try {
        await createReview({
          variables: {
            data: {
              rating: parseInt(rating),
              content: content,
              announcementId: advertisment.id,
              userId: user.id,
            },
          },
        });

        if (ratingRef.current && contentRef.current) {
          ratingRef.current.value = "";
          contentRef.current.value = "";
        }
      } catch (error) {
        console.error("Ошибка при создании отзыва", error);
      }
    } else {
      console.error("Элементы формы не найдены.");
    }
  };
  

  const [showAllCharacteristics, setShowAllCharacteristics] = useState(false);

  let charLength = 2;
  if (announcementCharacteristics && "characteristics" in announcementCharacteristics){

    charLength = showAllCharacteristics ? announcementCharacteristics.characteristics.length : 2;
  }

  const [showAllReviews, setShowAllReviews] = useState(false);

  let visibleReviewsLength = 3;
  visibleReviewsLength = showAllReviews ? reviewsMas.length : 3;

  return (
    <div className={styles.container}>
      <div className={styles.complex_list}>
        <Link to={ROUTES.HOME} className={styles.link}>Главная</Link>
        <img className={styles.arrow_right} src="/images/additem/right_arrow.svg" alt="right" />
        {categories?.map((category) => (
          <div key={category.id} className={styles.complex_list_item}>
            <Link to={`/${category.name}/${category.id}`} className={styles.link}>{category.name}</Link>
            {category !== categories[categories.length - 1] && (
              <img className={styles.arrow_right} src="/images/additem/right_arrow.svg" alt="right" />
            )}
          </div>
        ))}
      </div>

      <div className={styles.main_block}>
        <div className={styles.main_image_description}>
          <div className={styles.header}>
            <h2 className={styles.title}>{advertisment?.name}</h2>
          </div>
          <div className={styles.image_div} ref={imageDivRef} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className={styles.image_block}
              src={images[currentImage]}
              alt="img"
            />
            { isHovered && images.length > 1 &&
            <div className={styles.switch_buttons} >
              <button className={styles.prev_button} onClick={handlePrevImage}>
                <img className={styles.arrow} src="/images/Advertisment/arrow_left.svg" alt="left" />
              </button>
              <button className={styles.next_button} onClick={handleNextImage}>
                <img className={styles.arrow} src="/images/Advertisment/arrow_right.svg" alt="right" />
              </button>
            </div>}
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
              <div className={styles.characteristics_wrapper}>
                {announcementCharacteristics && "characteristics" in announcementCharacteristics &&
                  announcementCharacteristics.characteristics.slice(0, charLength).map((characteristic, index) => (
                    <div key={index} className={styles.characteristic_group}>
                      <div className={styles.characteristics_group__item}>
                        <h3 className={styles.characteristics_group_title}>{characteristic.group}</h3>
                        {characteristic.data.map((item, subIndex) => (
                          <div key={subIndex} className={styles.characteristic_item}>
                            <dt>{item.characteristic}</dt>
                            <dd>{item.value === 'true' ? 'Да' : item.value === 'false' ? 'Нет' : item.value || '-'}</dd>
                            {item.unitSuffix && <span>{item.unitSuffix}</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                }
                { announcementCharacteristics && "characteristics" in announcementCharacteristics && announcementCharacteristics.characteristics.length > 2 && (
                  <button
                    className={styles.showMoreButton}
                    onClick={() => setShowAllCharacteristics(!showAllCharacteristics)}
                  >
                    {showAllCharacteristics ? "Скрыть" : "Показать ещё"}
                  </button>
                )}
              </div>
            </dl>
          </div>
        </div>

        <div className={styles.info_block}>
          <div className={styles.user_block}>
            <div className={styles.header}>
              <p className={styles.price}>{advertisment?.price} ₽</p>
              <img
                className={styles.heart_icon}
                onClick={(e) => handleFavourites(adId, e)}
                src={
                  check
                    ? '/images/Advertisment/heart_black_fill.svg'
                    : '/images/Advertisment/heart_black_out.svg'
                }
                alt="heart"
              />
            </div>
            <Link className={styles.user_info}
              to={ROUTES.USER + '/' + advertisment?.userId}
            >
              <span className={styles.user_name}>{user?.displayName}</span>
              <img
                className={styles.avatar}
                src={user?.avatar != null ? user.avatar : '/images/Profile/user.svg'}
                alt="User Avatar"
              />
            </Link>
            <div className={styles.social_buttons}>
              <button className={styles.social}>Показать способы связи</button>
              <button 
                className={styles.social}
                onClick={() => TransitionToChat(advertisment?.userId || '', advertisment?.id || '')}
              >
                Написать
              </button>
            </div>
          </div>
          <form id="reviewForm" className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="rating" className={styles.form__label}>Рейтинг:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              required
              ref={ratingRef}
              className={styles.form__input}
            />
            <label htmlFor="content" className={styles.form__label}>Отзыв:</label>
            <textarea
              id="content"
              name="content"
              minLength={5}
              maxLength={1000}
              required
              ref={contentRef}
              className={styles.form__textarea}
            />
            {error.show && <div style={{ color: 'red', marginBottom: '10px' }}>{error.message}</div>}
            {error.show === false && <div style={{ color: 'green', marginBottom: '10px' }}>Отзыв успешно отправлен!</div>}
            <button type="submit" className={styles.form__button}>Оставить отзыв</button>
          </form>
          <div>
            {reviewsMas.slice(0, visibleReviewsLength).map((review, index) => (
              <div key={index} className={styles.review}>
                <div className={styles.review__header}>
                  <span className={styles.review__username}>Оценка: {review.rating}</span>
                  <span className={styles.review__date}>{new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
                <p className={styles.review__content}>{review.content}</p>
              </div>
            ))}
            {reviewsMas.length > 3 && (
              <button
                className={styles.showMoreButton}
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews ? "Скрыть" : "Показать ещё"}
              </button>
            )}
          </div>
        </div>
        {/*отзывы*/}
        

      </div>
    </div>
  )
}

export default Advertisement
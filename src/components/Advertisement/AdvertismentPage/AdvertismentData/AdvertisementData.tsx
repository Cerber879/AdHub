import React from 'react'
import styles from './advertisementdata.module.css'
import { initialAdvertisement as ad } from '../../../../modules/data'
import {initialUser as user} from '../../../../modules/data'

const AdvertisementData = () => {
  return (
    <div className={styles.container}>
        <div >
          <ul className={styles.complex_list}>
            <li className={styles.complex_list_item}>
              <a className={styles.link}href="/">Электроника</a>
            </li>
            <li className={styles.complex_list_item}>
              <a className={styles.link} href="/">Телефоны</a>
            </li>
            <li className={styles.complex_list_item}>
              <a className={styles.link} href="/">Смартфоны</a>
            </li>
            <li className={styles.complex_list_item}>
              <a className={styles.link} href="/">iPhone</a>
            </li>
          </ul>
          
        </div>
        <div className={styles.flex_block}>
          <h2 className={styles.title}>{ad.Name}</h2>
          
        </div>
        <div className={styles.main_block}>
          <div className={styles.main_image_description}>
            <img className={styles.image_block} src={'https://avatars.mds.yandex.net/i?id=61db66a2245d8ffc75e4b746a73a26d2_l-5252229-images-thumbs&n=13'} alt="image"/>
            <div className={styles.characteristics}>
            <h2>Характеристики</h2>
            <dl className={styles.characteristics_list}>
              <div className={styles.characteristic_item}>
                <dt>Состояние:</dt>
                <dd>{ad.Condition}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Дата размещения:</dt>
                <dd>{ad.Date}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Статус:</dt>
                <dd>{ad.Status === 1 ? 'Активно' : 'Неактивно'}</dd>
              </div>
              <div className={styles.characteristic_item}>
                <dt>Цена:</dt>
                <dd>{ad.Price} ₽</dd>
              </div>
            </dl>
          </div>
            <div>
              <h2>Описание</h2>
              <p className={styles.description}>{ad.Description}</p>
            </div>
              
            
          </div>
          <div className={styles.info_block}>
            <div className={styles.price_heart}>
              <p className={styles.price}>{ad.Price} ₽</p>
              <img className={styles.heart_icon} src="./images/Advertisment/heart.svg" alt="heart"></img>
            </div>
            
            <div className={styles.user_info}>
              
              <h3>
                <a className={styles.user_name} href="/">{user.FullName}</a>
              </h3>
              <img
                className={styles.avatar}
                src="https://i.pravatar.cc/150?img=10"
                alt="User Avatar"
              />
            </div>
            
            <div className={styles.buttons}>
              <button className={styles.button}>Показать номер</button>
              <button className={styles.button}>Написать</button>
            </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default AdvertisementData
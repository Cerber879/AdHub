import React from 'react'
import styles from './advertisementdata.module.css'
import { initialAdvertisement as ad } from '../../../../modules/data'


const AdvertisementData = () => {
  return (
    <div className={styles.container}>
        <div className={styles.flex_block}>
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
          <p>{ad.Price} ₽</p>
          <img className={styles.heart_icon} src="./images/Advertisment/heart.svg" alt="heart"></img>
        </div>
        <h2>{ad.Name}</h2>
        <div>
          <img className={styles.image_block} src={'https://avatars.mds.yandex.net/i?id=61db66a2245d8ffc75e4b746a73a26d2_l-5252229-images-thumbs&n=13'} alt="image"/>
        </div>
    </div>
  )
}

export default AdvertisementData
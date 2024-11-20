import React from 'react'

import styles from './categories.module.css'

const ListCategories = () => {
  return (
    <div className={styles.categories}>
        <div className={styles.category}>
        <span>Транспорт</span>
        </div>
        <div className={styles.category}>
        <span>Недвижимость</span>
        </div>
        <div className={styles.category}>
        <span>Для дома и дачи</span>
        </div>
    </div>
  )
}

export default ListCategories
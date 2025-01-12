import React from 'react';
import styles from './catalogue.module.css';
import ListCategories from './CatalogueListCategories/ListCategories';
import DataCategory from './CatalogueDataCategory/DataCategory';

const CatalogueModal: React.FC = () => {
  return (
    <>
      {/* Фон, блокирующий взаимодействие с другими элементами */}
      <div className={styles.modal_overlay}></div>
      
      {/* Модальное окно */}
      <div className={styles.modal_content}>
        <ListCategories />
        <DataCategory />
      </div>
    </>
  );
};

export default CatalogueModal;

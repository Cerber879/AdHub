import React from 'react';
import styles from './catalogue.module.css';
import ListCategories from './CatalogueListCategories/ListCategories';
import DataCategory from './CatalogueDataCategory/DataCategory';
import { setCurrentCategory, setShowCatalogueModal } from '../../store/slices/categorySlice';
import { useDispatch } from 'react-redux';

const CatalogueModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleMouseClick = (id: string, name: string) => {
    dispatch(setCurrentCategory({ id, name }));
    dispatch(setShowCatalogueModal(false));
  };

  return (
    <>
      <div className={styles.modal_overlay}></div>
      <div className={styles.modal_content}>
        <ListCategories onCategoryClick={handleMouseClick} />
        <DataCategory onCategoryClick={handleMouseClick} />
      </div>
    </>
  );
};

export default CatalogueModal;

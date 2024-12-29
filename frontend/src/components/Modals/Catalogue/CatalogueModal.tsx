import React, {  } from 'react';

import styles from './catalogue.module.css'; 
import ListCategories from './CatalogueListCategories/ListCategories';
import DataCategory from './CatalogueDataCategory/DataCategory';

const CatalogueModal: React.FC = () => {

  return (
    <div className={styles.modal_content}>
      <ListCategories />
      <DataCategory />
    </div>
  );
};

export default CatalogueModal;

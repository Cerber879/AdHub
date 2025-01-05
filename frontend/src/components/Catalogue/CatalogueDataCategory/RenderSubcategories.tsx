import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './data.module.css';

const RenderSubcategories = (subCategories: any[]) => {
  return (
    <div className={styles.subcategoriesContainer}>
      {subCategories.map((subCategory) => (
        <div key={subCategory.id} className={styles.subcategory}>
          <Link to={`/${subCategory.name}/${subCategory.id}`} className={styles.subcategoryLink}>
            {subCategory.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RenderSubcategories;

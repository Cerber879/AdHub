import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './data.module.css';

const RenderSubcategories = (subCategories: any[], onCategoryClick: (id: string, name: string) => void) => {
  return (
    <div className={styles.subcategoriesContainer}>
      {subCategories.map((subCategory) => (
        <div key={subCategory.id} className={styles.subcategory}>
          <Link 
            to={`/${subCategory.name}/${subCategory.id}`} 
            className={styles.subcategoryLink}
            onClick={() => onCategoryClick(subCategory.id, subCategory.name)} 
          >
            {subCategory.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RenderSubcategories;

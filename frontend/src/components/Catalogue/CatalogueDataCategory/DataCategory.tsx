import React from 'react';
import { useSelector } from 'react-redux';
import styles from './data.module.css';
import { Link } from 'react-router-dom';
import { useFindPrewiewSubcategoriesQuery } from '../../../graphql/generated/output';
import RenderSubcategories from './RenderSubcategories';
import { RootState } from '../../../store/store';

const DataCategory = () => {
  const currentIdCategory = useSelector((state: RootState) => state.category.currentIdCategory);
  const currentNameCategory = useSelector((state: RootState) => state.category.currentNameCategory);

  const { data } = useFindPrewiewSubcategoriesQuery({
    variables: { id: currentIdCategory },
    skip: !currentIdCategory,
  });

  const subCategories = data?.findPrewiewSubcategories || [];

  return (
    <div className={styles.container}>
      <span className={styles.name}>{currentNameCategory}</span>
      <div className={styles.subcategories}>
        {subCategories.map((subCategory) => (
          <div key={subCategory.id} className={styles.category}>
            <Link to={`/${subCategory.name}/${subCategory.id}`} className={styles.subcategoryLink}>{subCategory.name}</Link>
            {subCategory.subcategories && subCategory.subcategories.length > 0 && (
              <div className={styles.subcategory}>
                {RenderSubcategories(subCategory.subcategories)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCategory;

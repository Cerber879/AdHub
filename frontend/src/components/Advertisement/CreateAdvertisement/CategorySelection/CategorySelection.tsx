import { useState, useMemo, useEffect } from 'react';
import { CategoryModel, useGetMainCategoriesQuery, useGetSubcategoriesQuery } from '../../../../graphql/generated/output';
import styles from './selection.module.css';
import RenderSubcategories from '../../../Catalogue/CatalogueDataCategory/RenderSubcategories';

interface SubCategoriesInteface {
  subcategories: CategoryModel[]
  level: number
}

const CategorySelection = ({ onCategorySelect }: { onCategorySelect: (categoryId: string | null) => void }) => {
  const { data } = useGetMainCategoriesQuery();
  const categories = useMemo(() => data?.getMainCategories || [], [data]);

  const [currentCategory, setCurrentCategory] = useState({
    id: '',
    level: 0
  });

  const [subCategories, setSubCategories] = useState<SubCategoriesInteface[]>([]);

  const { data: dataSubcategories, loading: subcategoriesLoading } = useGetSubcategoriesQuery({
    variables: { id: currentCategory.id ?? '' },
    skip: currentCategory.id === '',
  });

  const handleCategoryClick = (id: string, level: number) => {
    setCurrentCategory({ id, level });
  };

  useEffect(() => {
    if (currentCategory.id.length > 0 && !subcategoriesLoading) {
      const subcategories = dataSubcategories?.getSubcategories || [];

      if(subcategories.length !== 0) {
        setSubCategories((prev) => {
          const level = currentCategory.level;
          const updated = prev.filter((item) => item.level < level);
          updated.push({ subcategories, level });
          return updated;
        });
      } else {
        onCategorySelect(currentCategory.id)
      }
    }
  }, [currentCategory, dataSubcategories, subcategoriesLoading]);
  
  const renderCategories = (categoriesList: CategoryModel[], level: number) => {
    return (
      <div className={styles.categoryColumn} style={{ left: `${level * 200}px` }}>
        {categoriesList.map((category) => (
          <button
            key={category.id}
            className={styles.categoryButton}
            onClick={() => handleCategoryClick(category.id, level)}
          >
            <span className={styles.categoryName}>{category.name}</span>
            <img className={styles.arrow} src="/images/additem/right_arrow.svg" alt="arrow" />
          </button>
        ))}
      </div>
    );
  };

  const renderSubcategories = (subcategories: SubCategoriesInteface[]) => {
    return (
      subcategories.map((subcategory, index) => (
        renderCategories(subcategory.subcategories, index + 1)
      ))
    )
  }

  return (
    <div className={styles.categorySelection}>
      <span className={styles.title}>Создание объявления</span>
      <div className={styles.categoryContainer}>
        {renderCategories(categories, 0)}
        {renderSubcategories(subCategories)}
      </div>
    </div>
  );
};

export default CategorySelection;

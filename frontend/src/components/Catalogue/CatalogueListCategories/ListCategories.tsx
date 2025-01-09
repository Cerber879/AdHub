import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory, setShowCatalogueModal } from '../../../store/slices/categorySlice';
import styles from './categories.module.css';

import { useGetMainCategoriesQuery } from '../../../graphql/generated/output';
import { Link } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

const ListCategories = () => {
  const dispatch = useDispatch();
  const { data } = useGetMainCategoriesQuery();
  
  const categories = useMemo(() => data?.getMainCategories || [], [data]);
  
  const currentIdCategory = useSelector((state: any) => state.category.currentIdCategory);

  useEffect(() => {
    if (categories.length > 0) {
      dispatch(setCurrentCategory({ id: categories[0].id, name: categories[0].name }));
    }
  }, [categories, dispatch]);

  const handleMouseClick = (id: string, name: string) => {
    dispatch(setCurrentCategory({ id, name }))
    dispatch(setShowCatalogueModal(false))
  };

  const handleMouseEnter = (id: string, name: string) => {
    if(id !== currentIdCategory) {
      dispatch(setCurrentCategory({ id, name }))
    }
  };

  return (
    <div className={styles.categories}>
      {categories?.map((category) => (
        <Link 
          to={`/${category.name}/${category.id}`} 
          key={category.id} 
          className={category.id === currentIdCategory 
            ? `${styles.category} ${styles.category_active}`
            : styles.category
          }
          onClick={() => handleMouseClick(category.id, category.name)}
          onMouseEnter={() => handleMouseEnter(category.id, category.name)}
        >
          <div>
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListCategories;

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory, setShowCatalogueModal } from '../../../store/slices/categorySlice';
import styles from './categories.module.css';

import { useGetMainCategoriesQuery } from '../../../graphql/generated/output';
import { Link } from 'react-router-dom';

const ListCategories = () => {
  const dispatch = useDispatch();
  const { data } = useGetMainCategoriesQuery();
  const categories = data?.getMainCategories;

  const currentIdCategory = useSelector((state: any) => state.category.currentIdCategory);
  if (!currentIdCategory && categories) {
    dispatch(setCurrentCategory({ id: categories[0].id, name: categories[0].name }));
  }

  const handleMouseEnter = (id: string, name: string) => {
    dispatch(setCurrentCategory({ id, name }));
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
          onClick={() => dispatch(setShowCatalogueModal(false))}
          onMouseEnter={() => handleMouseEnter(category.id, category.name)} 
          >
          <div
            key={category.id}
          >
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListCategories;

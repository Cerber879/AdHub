import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './navigation.module.css';
import CatalogueModal from '../Catalogue/CatalogueModal';

import { useDispatch, useSelector } from 'react-redux';
import { setShowCatalogueModal } from '../../store/slices/categorySlice';
const AdvertisementTop: React.FC = () => {
  
  const dispatch = useDispatch();
  
  const showCatalogueModal = useSelector((state: any) => state.category.showCatalogueModal);

  const handleClick = () => {
    if (showCatalogueModal){
      dispatch(setShowCatalogueModal(false))
    } else {
      dispatch(setShowCatalogueModal(true))
    }
  }

  return (
    <div className={styles.container}>
      <button
       onClick={handleClick}
       className={styles.button_catalogue}>
        { showCatalogueModal && 
          <img className={styles.icon} src="/images/catalogue/cross.svg" alt="cross" />
        }
        { !showCatalogueModal && 
          <img className={styles.icon} src="/images/catalogue/form.svg" alt="form" />
        }
        <span>Каталог</span>
      </button>
      <SearchBar/>

      {showCatalogueModal && <CatalogueModal />}
    </div>
    
  );
};

export default AdvertisementTop;

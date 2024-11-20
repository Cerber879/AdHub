import React, { useState } from 'react';
import SearchBar from '../../../SearchBar/SearchBar';
import styles from './advertismenttop.module.css';
import CatalogueModal from '../../../Modals/Catalogue/CatalogueModal';
const AdvertisementTop: React.FC = () => {
  
  const [showCatalogueModal, setCatalogueModal] = useState(false);

  const handleClick = () => {
    if (showCatalogueModal){
      setCatalogueModal(false)
    } else {
      setCatalogueModal(true)
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

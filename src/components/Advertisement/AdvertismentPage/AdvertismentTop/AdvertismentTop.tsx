import React, { useState } from 'react';
import SearchBar from '../../../SearchBar/SearchBar';
import styles from './advertismenttop.module.css';
const AdvertisementTop: React.FC = () => {
  
  const [showCatalogueModal, setCatalogueModal] = useState(false);

  const CloseCatalogueModal = () => {
    setCatalogueModal(false)
  }

  return (
    <div className={styles.container}>
      <button className={styles.button_catalogue}>
        { showCatalogueModal && 
          <img src="" alt="crest" />
        }
        { !showCatalogueModal && 
          <img src="" alt="" />
        }
        <span>Каталог</span>
      </button>
      <SearchBar/>
    </div>
    
  );
};

export default AdvertisementTop;

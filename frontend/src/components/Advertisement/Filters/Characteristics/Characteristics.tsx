import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './characteristics.module.css';
import { setFilters } from '../../../../store/slices/filtersSearchSlice';
import { RootState } from '../../../../store/store';

const Characteristics: React.FC = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state: RootState) => state.filtersSearch);

  const [activeCondition, setActiveCondition] = useState(filters.condition || ''); 

  const handleConditionChange = (condition: string | null) => {
    setActiveCondition(condition || ''); 
    dispatch(setFilters({ ...filters, condition }));
  };

  const handleMinPriceChange = (minPrice: number | null) => {
    dispatch(setFilters({ ...filters, minPrice }));
  };

  const handleMaxPriceChange = (maxPrice: number | null) => {
    dispatch(setFilters({ ...filters, maxPrice }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.block_filters}>
        <span className={styles.title_block}>Цена</span>
        <div className={styles.condition_block}>
          <input
            type="number"
            placeholder="от"
            className={styles.price_input}
            onChange={(e) => handleMinPriceChange(Number(e.target.value) || null)}
          />
          <input
            type="number"
            placeholder="до"
            className={styles.price_input}
            onChange={(e) => handleMaxPriceChange(Number(e.target.value) || null)}
          />
        </div>
      </div>
      <div className={styles.block_filters} >
        <span className={styles.title_block}>Состояние</span>
        <div className={styles.condition_block}>
          {conditionOptions.map((option) => (
            <button
              key={option.value}
              className={`${styles.conditionButton} ${activeCondition === option.value ? styles.active : ''}`}
              onClick={() => handleConditionChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characteristics;

const conditionOptions = [
  { value: 'all', label: 'Все' },
  { value: 'new', label: 'Новое' },
  { value: 'used', label: 'Б/у' },
];
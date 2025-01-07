import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../store/slices/filtersSearchSlice';
import styles from './filters.module.css';

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state: any) => state.filtersSearch);

  const [sort, setSort] = useState(filters.sort || 'default'); 

  const handleDisplayTypeChange = (type: string) => {
    dispatch(setFilters({ ...filters, displayType: type }));
  };

  const handleSortChange = (sort: string) => {
    setSort(sort); // Локальное обновление сортировки
    dispatch(setFilters({ ...filters, sort }));
  };

  return (
    <div className={styles.container}>
      <button className={styles.view} onClick={() => handleDisplayTypeChange('big')}>
        <img className={styles.view_icon}  src="/images/Advertisment/big_ad.svg" alt="big"></img>
      </button>
      <button className={styles.view} onClick={() => handleDisplayTypeChange('small')}>
        <img className={styles.view_icon} src="/images/Advertisment/small_ads.svg" alt="small"></img>
      </button>

      <div className={styles.sort_block}>
        <img className={styles.sort_icon} src="/images/Advertisment/sort.svg" alt="sort" />
        <select
          value={sort}
          onChange={(e) => handleSortChange(e.target.value)}
          className={styles.select}
        >
          {sortOptions.map((option) => (
            <option className={styles.option} key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;

const sortOptions = [
  { label: 'Сортировка', value: 'default' },
  { label: 'По возрастанию цены', value: 'price_asc' },
  { label: 'По убыванию цены', value: 'price_desc' },
  { label: 'По дате', value: 'date' },
  { label: 'По названию (А-Я)', value: 'name_asc' },
  { label: 'По названию (Я-А)', value: 'name_desc' },
];
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../store/slices/filtersSearchSlice';
import styles from './filters.module.css';
import { RootState } from '../../../store/store';

const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state: RootState) => state.filtersSearch);
  const emptyAnouncements = useSelector((state: RootState) => state.category.emptyAnouncements);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Сортировка');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDisplayTypeChange = (type: string) => {
    dispatch(setFilters({ ...filters, displayType: type }));
  };

  const handleSortChange = (value: string, label: string) => {
    setSelectedLabel(label);
    dispatch(setFilters({ ...filters, sort: value }));
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return emptyAnouncements ? <div></div> : (
    <div className={styles.container}>
      <button className={styles.view} onClick={() => handleDisplayTypeChange('big')}>
        <img className={styles.view_icon} src="/images/Advertisment/big_ad.svg" alt="big"></img>
      </button>
      <button className={styles.view} onClick={() => handleDisplayTypeChange('small')}>
        <img className={styles.view_icon} src="/images/Advertisment/small_ads.svg" alt="small"></img>
      </button>

      <div className={styles.sort_block} ref={dropdownRef}>
        <img className={styles.sort_icon} src="/images/Advertisment/sort.svg" alt="sort" />
        <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
          {selectedLabel === sortOptions[0].label ? 'Сортировка' : selectedLabel}
        </div>
        {isOpen && (
          <ul className={styles.dropdown}>
            {sortOptions.map((option) => (
              <li
                key={option.value}
                className={`${option.value === filters.sort ? styles.option_active : styles.option}`}
                onClick={() => handleSortChange(option.value, option.label)}
              >
                {option.label}
                {option.value === filters.sort && 
                    <img
                      src="/images/Advertisment/tick.svg" alt="tick" 
                      className={styles.tick_icon}
                    />
                }
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filters;

const sortOptions = [
  { label: 'По умолчанию', value: 'default' },
  { label: 'По возрастанию цены', value: 'price_asc' },
  { label: 'По убыванию цены', value: 'price_desc' },
  { label: 'По дате', value: 'date' },
  { label: 'По названию (А-Я)', value: 'name_asc' },
  { label: 'По названию (Я-А)', value: 'name_desc' },
];

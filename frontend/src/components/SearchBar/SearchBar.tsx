import React from 'react';
import styles from './searchbar.module.css';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/slices/filtersSearchSlice';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    dispatch(setSearchValue(input));
    console.log(input);
  }

  return (
    <form className={styles.search_form} onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInput(e.target.value)}
        className={styles.search_input}
        type="text"
        placeholder="Искать здесь..."
      />
      <button className={styles.search_button} type="submit">
        <img
          className={styles.search_icon}
          src="/images/ImagesHomePage/search.svg"
          alt="Search"
        />
      </button>
    </form>
  );
};

export default SearchBar;

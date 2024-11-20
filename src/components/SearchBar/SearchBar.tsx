import React from 'react';
import styles from './searchbar.module.css';

const SearchBar = () => {
  return (
    <form className={styles.search_form}>
      <input
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

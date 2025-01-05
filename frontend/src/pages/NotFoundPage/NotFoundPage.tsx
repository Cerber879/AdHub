import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Страница не найдена</h1>
      <p className={styles.text}>Извините, страница, которую вы ищете, не существует.</p>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={handleBack}>Назад</button>
        <button className={styles.button} onClick={handleGoHome}>На главную</button>
      </div>
      <img 
        src="/images/NotFound/404.gif" 
        alt="Not Found" 
        className={styles.image}
      />
    </div>
  );
};

export default NotFound;

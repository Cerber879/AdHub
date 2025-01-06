import React from 'react';
import styles from './skeleton.module.css';

const BigSkeleton: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.skeleton} ${styles.image_block}`} />

      <div className={styles.data_block}>
        <div className={`${styles.skeleton} ${styles.title}`} />
        <div className={`${styles.skeleton} ${styles.description}`} />
      </div>

      <div className={styles.user_block}>
        <div className={`${styles.skeleton} ${styles.avatar}`} />
        <div className={`${styles.skeleton} ${styles.username}`} />
      </div>
    </div>
  );
};

export default BigSkeleton;

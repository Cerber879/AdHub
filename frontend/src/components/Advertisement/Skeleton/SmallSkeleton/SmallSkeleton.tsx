import React from 'react';
import styles from './skeleton.module.css';

const SmallSkeleton: React.FC = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonText}></div>
      <div className={styles.skeletonPrice}></div>
    </div>
  );
};

export default SmallSkeleton;

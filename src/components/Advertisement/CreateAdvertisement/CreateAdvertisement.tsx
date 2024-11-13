import React, { useState } from 'react';
import { createAdvertisement } from '../../../services/api';
import styles from './createAdvertisement.module.css'
const CreateAdvertisement: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleCreateAdvertisement = async () => {
    try {
      const advertisement = { name, description, price, categoryId };
      await createAdvertisement(advertisement);
      alert('Advertisement created successfully');
    } catch (error) {
      console.error('Failed to create advertisement', error);
    }
  };

  return (
    <div className={styles.item}>
      <h2>Create Advertisement</h2>
      <label className="text-field__label" for="login">Логин</label>
      <input
        className={styles.item__name}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className={styles.item__description}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className={styles.item__price}
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className={styles.item__category}
        type="text"
        placeholder="Category ID"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />
      <button 
        className={styles.item__button_create}
        onClick={handleCreateAdvertisement}>Create</button>
    </div>
  );
};

export default CreateAdvertisement;

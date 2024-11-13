import React, { useState } from 'react';
import { createAdvertisement } from '../../../services/api';

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
    <div>
      <h2>Create Advertisement</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category ID"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      />
      <button onClick={handleCreateAdvertisement}>Create</button>
    </div>
  );
};

export default CreateAdvertisement;

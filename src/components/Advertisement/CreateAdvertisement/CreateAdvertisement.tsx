import React, { useRef, useState } from 'react';
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


  // это машина жесткая
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dt = new DataTransfer();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filesList = event.target.files;
    if (filesList) {
      dt.items.clear();
      for (let i = 0; i < filesList.length; i++) {
        const file = filesList.item(i);
        if (file) {
          dt.items.add(file);
        }
      }
      setFiles(Array.from(dt.files));
    }
  };

  const removeFilesItem = (name: string) => {
    const newFiles = files.filter(file => file.name !== name);
    setFiles(newFiles);
    dt.items.clear();
    newFiles.forEach(file => dt.items.add(file));
    if (inputRef.current) {
      inputRef.current.files = dt.files;
    }
  };

  return (
    <div className={styles.item}>
      <h2>Создать объявление</h2>
      <div>
        <label className="text-field__label" htmlFor="name">Товар</label>
        <input
          id="item__name"
          className={styles.item__name}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
        <div className={styles.input__file_row}>
		      <label className={styles.input__file}>
		   	    <input 
            type="file" 
            name="file[]" 
            multiple accept="image/*"
            onChange={handleFileChange}
            ref={inputRef}
            />		
		   	    <span>Выберите файл</span>
 		      </label>
		      <div className={styles.input__file_list}>
            {files.map(file => (
            <div key={file.name} className={styles.input__file_list_item}>
            <img className={styles.input__file_list_item_img} src={URL.createObjectURL(file)} alt={file.name} />
            <span className={styles.input__file_list_name}>{file.name}</span>
            <a href="###" onClick={() => removeFilesItem(file.name)} className={styles.input__file_list_remove}>x</a>
            </div> ))} 
	        </div>
        </div>
      <div>
        <label className="text-field__label" htmlFor="item__description">Описание</label>
        <textarea
          id="item__description"
          className={styles.item__description}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.item__price_category}>
        <div>
          <label className="text-field__label" htmlFor="item__price">Цена</label>
          <input
            id="item__price"
            className={styles.item__price}
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

        </div>
        <div>
          <label className="text-field__label" htmlFor="item__category">Категория</label>
          <input
            id="item__category"
            className={styles.item__category}
            type="text"
            placeholder="Category ID"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          />
        </div>
      </div>
      <button 
        className={styles.item__button_create}
        onClick={handleCreateAdvertisement}>Создать</button>
    </div>
  );
};

export default CreateAdvertisement;

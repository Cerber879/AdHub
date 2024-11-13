import React, { useState } from 'react';
import { register } from '../../../services/api';
import styles from '../modals.module.css'; 

const RegisterModal: React.FC<{ onClose: () => void, onOpenLogin: () => void }> = ({ onClose, onOpenLogin }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await register(loginInput, password, name, type);
      onClose();
    } catch (error) {
      setError('Registration failed');
    }
  };

  const swapToLogin = () => {
    onClose();
    onOpenLogin();
  }

  const isValid = name && type && loginInput && password.length >= 8;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <button
          className={styles.close_button}
          onClick={onClose}
        >
          <img className={styles.close_button_icon} src="/images/modal/cross.svg" alt="Icon" width={10}/>
        </button>
        <div className={styles.header_name}>
         <img src="/favicons.png" alt="Icon" width={50}/>
         <h2>Войти в AdHub</h2>
        </div>
        {error && <p className={styles.error_message}>{error}</p>}
        <div className={styles.block_input}>
          <span className={styles.name_input}>Имя</span>
          <input
            type="text"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            className={error ? styles.input_error : ''}
          />
        </div>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setError('');
          }}
          className={error ? styles.input_error : ''}
        >
          <option value="">Выберите тип профиля</option>
          <option value="organization">Организация</option>
          <option value="individual">Часное лицо</option>
        </select>
        <div className={styles.block_input}>
          <span className={styles.name_input}>Логин</span>
          <input
            type="text"
            placeholder="Введите почту или телефон"
            value={loginInput}
            onChange={(e) => {
              setLoginInput(e.target.value);
              setError('');
            }}
            className={error ? styles.input_error : ''}
          />
        </div>
        <div className={styles.block_input}>
          <span className={styles.name_input}>Пароль</span>
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            className={error ? styles.input_error : ''}
          />
        </div>
        <button onClick={handleRegister} disabled={!isValid} className={`${styles.button_handle} ${!isValid ? styles.button_disabled : ''}`}>
          <span>Зарегистрироваться</span>
        </button>
        <button onClick={swapToLogin} className={styles.button_handle_swap}>
          <span>Есть учетная запись? Войти</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;

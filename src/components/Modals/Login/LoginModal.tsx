import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlise';
import { login } from '../../../services/api';
import { User } from '../../../modules/types';
import styles from '../modals.module.css'; 

const LoginModal: React.FC<{ onClose: () => void, onOpenRegister: () => void }> = ({ onClose, onOpenRegister }) => {
  const [loginInput, setLoginInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const user: User = await login(loginInput, password);
      dispatch(setUser(user));
      onClose();
    } catch (error) {
      setError('Invalid login or password');
    }
  };

  const swapToRegister = () => {
    onClose();
    onOpenRegister();
  }

  const isValid = loginInput && password;

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
        <button onClick={handleLogin} disabled={!isValid} className={`${!isValid ? styles.button_disabled : ''} ${styles.button_handle}`}>
          <span>Войти</span>
        </button>
        <button onClick={swapToRegister} className={styles.button_handle_swap}>
          <span>У вас нет учетной записи? Зарегистрируйтесь!</span>
        </button>
      </div>
    </div>
  );
};

export default LoginModal;

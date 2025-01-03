import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlise';
import { User } from '../../../modules/types';
import styles from '../modals.module.css'; 
import { validateEmail, validatePhoneNumber } from '../modals';

const LoginModal: React.FC<{ onClose: () => void, onOpenRegister: () => void }> = ({ onClose, onOpenRegister }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginDirty, setLoginDirty] = useState(false);
  //const [passwordDirty, setPasswordDirty] = useState(false);

  const [loginError, setLoginError] = useState('');
  //const [passwordError, setPasswordError] = useState('');

  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!loginError){

    } else {
      setLoginDirty(true)
    }
  };

  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDirty(false);
    const value = e.target.value;
    setLogin(value);

    if (value.includes('@')) {
      if (!validateEmail(value)) {
        setLoginError('Некорректная эл. почта');
      } else {
        setLoginError('');
      }
    } else if (/[a-zA-Zа-яА-Я]/.test(value)) {
      if (!validatePhoneNumber(value)) {
        setLoginError('Неправильный телефон');
      } else {
        setLoginError('');
      }
    } else if (value.length !== 0) {
      setLoginError('Укажите мобильный телефон или почту');
    }
  };

  const passwordHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    const value = e.target.value
    setPassword(value);
  }

  const swapToRegister = () => {
    onClose();
    onOpenRegister();
  }

  useEffect(() => {
    if(login === '' || password === ''){
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [login, password])

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
        <div className={styles.block_input}>
          <span className={styles.name_input}>Логин</span>
          <input
            type="login"
            placeholder="Введите электронную почту или телефон"
            value={login}
            onChange={(e) => {loginHandler(e)}}
            className={loginDirty ? styles.input_error : ''}
          />
          {loginDirty && <span className={styles.error_message}>{loginError}</span>}
        </div>
        <div className={styles.block_input}>
          <span className={styles.name_input}>Пароль</span>
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => {passwordHandler(e)}}
          />
        </div>
        <button onClick={handleLogin} disabled={!formValid} className={!formValid ? styles.button_disabled : styles.button_handle}>
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

import React, { useEffect, useState } from 'react';
import { register } from '../../../services/api';
import styles from '../modals.module.css'; 
import { validateEmail, validatePhoneNumber } from '../modals';

const RegisterModal: React.FC<{ onClose: () => void, onOpenLogin: () => void }> = ({ onClose, onOpenLogin }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [typeDirty, setTypeDirty] = useState(false);
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState('');
  const [typeError, setTypeError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [passwordError, setPasswordError] = useState('Пароль должен содержать не менее 8 символов.');

  const [formValid, setFormValid] = useState(false);

  const handleRegister = async () => {
    try {
      await register(login, password, name, type);
      onClose();
    } catch (error) {
      //setError('Registration failed');
      console.clear();
      console.log(error);
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameDirty(true)
    const value = e.target.value;
    setName(value);
    if (value.length < 4 || value.length > 25) {
      setNameError('*Имя должно содержать от 4 до 25 символов.');
    } else if (value.length === 0) {
      setNameError('Укажите своё имя или название организации.')
    } else {
      setNameError('')
    }
  };

  const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeDirty(true)
    const value = e.target.value;
    setType(value);
    console.log(value)
    if (value === "") {
      setTypeError('Обязательное поле выбора.');
    } else {
      setTypeError('')
    }
  };

  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDirty(true)
    const value = e.target.value;
    setLogin(value);

    if (value.includes('@')) {
      if (!validateEmail(value)) {
        setLoginError('Некорректная почта.');
      } else {
        setLoginError('');
      }
    } else if (/^[+0-9]+$/.test(value)) {
      if (!validatePhoneNumber(value)) {
        setLoginError('Неправильный телефон.');
      } else {
        setLoginError('');
      }
    } else {
      setLoginError('Укажите мобильный телефон или эл. почту.');
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordDirty(true)
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError('Пароль должен содержать не менее 8 символов.')
    } else {
      setPasswordError('')
    }
  };

  const swapToLogin = () => {
    onClose();
    onOpenLogin();
  }

  useEffect(() => {
    if(login === '' || password === '' || name === '' || type === '' ||
      loginError || passwordError || nameError || typeError
    ){
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [login, loginError, name, nameError, password, passwordError, type, typeError])

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
         <h2>Присоединяйтесь к AdHub</h2>
        </div>
        <div className={styles.block_input}>
          <span className={styles.name_input}>Имя</span>
          <input
            name='name'
            type="name"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(e) => {nameHandler(e)}}
            className={nameDirty && nameError ? styles.input_error : ''}
          />
          {nameDirty && nameError && <span className={styles.error_message}>{nameError}</span>}
        </div>
        <div className={styles.block_input}>
          <select
            name='type'
            typeof="type"
            value={type}
            onChange={(e) => {typeHandler(e)}}
            className={typeDirty && typeError ? styles.input_error : ''}
          >
            <option value="">Выберите тип профиля</option>
            <option value="organization">Организация</option>
            <option value="individual">Часное лицо</option>
          </select>
          {typeDirty && typeError && <span className={styles.error_message}>{typeError}</span>}
        </div>

        <div className={styles.block_input}>
          <span className={styles.name_input}>Логин</span>
          <input
            name='login'
            type="login"
            placeholder="Введите эл. почту или телефон"
            value={login}
            onChange={(e) => {loginHandler(e)}}
            className={loginDirty && loginError ? styles.input_error : ''}
          />
          {loginDirty && loginError && <span className={styles.error_message}>{loginError}</span>}
        </div>
        <div className={styles.block_input}>
          <span className={styles.name_input}>Пароль</span>
          <input
            onBlur={() => setPasswordDirty(true)}
            name='password'
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => {passwordHandler(e)}}
            className={passwordDirty && passwordError ? styles.input_error : ''}
          />
          {passwordDirty && passwordError && <span className={styles.error_message}>{passwordError}</span>}
        </div>
        <button onClick={handleRegister} disabled={!formValid} className={!formValid ? styles.button_disabled : styles.button_handle}>
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

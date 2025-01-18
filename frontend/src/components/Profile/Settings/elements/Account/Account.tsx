import React, { useEffect, useState } from 'react';
import styles from './account.module.css';
import { useCurrent } from '../../../../../hooks/useCurrent';
import { useChangeEmailMutation, useChangePasswordMutation, useChangePhoneNumberMutation, useRemoveProfileMutation } from '../../../../../graphql/generated/output';
import { exit } from '../../../../../store/slices/userSlise';
import { ROUTES } from '../../../../../utils/routes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePhoneNumber } from '../../../../../utils/auth-validate';
import Loader from '../../../../../utils/Loader/Loader';
import { set } from 'react-hook-form';

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, refetch, isLoadingProfile } = useCurrent();

  const [changeEmail, { loading: loadingChangeEmail }] = useChangeEmailMutation({ 
    onCompleted: () => {
      refetch();
      setSuccessfully((prev) => ({ ...prev, email: 'Почта успешно изменена' }));
    },
    onError: (error) => {
      setSuccessfully((prev) => ({ ...prev, email: '' }));
      setErrors((prev) => ({ ...prev, email: error.message }));
    }
  });

  const [changePhone, { loading: loadingChangePhone }] = useChangePhoneNumberMutation({ 
    onCompleted: () => {
      setSuccessfully((prev) => ({ ...prev, phone: 'Номер телефона успешно изменен' }));
      refetch();
    },
    onError: (error) => {
      setSuccessfully((prev) => ({ ...prev, phone: '' }));
      setErrors((prev) => ({ ...prev, phone: error.message }));
    }
  });

  const [changePassword, { loading: loadingChangePassword }] = useChangePasswordMutation({ 
    onCompleted: () => {
      setSuccessfully((prev) => ({ ...prev, password: 'Пароль успешно изменен' }));
      refetch();
    },
    onError: (error) => {
      setSuccessfully((prev) => ({ ...prev, password: '' }));
      setErrors((prev) => ({ ...prev, password: error.message }));
    }
  });

  const [remove] = useRemoveProfileMutation({ 
    onCompleted: () => {
      refetch();
      dispatch(exit());
      navigate(ROUTES.HOME);
    }
  })

  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phoneNumber || '');

  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const [errors, setErrors] = useState<{ email?: string; password?: string; phone?: string }>({});
  const [successfully, setSuccessfully] = useState<{ email?: string; password?: string; phone?: string }>({});

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleEmailChange = async () => {
    if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: 'Некорректный адрес электронной почты' }));
      return;
    }
    try {
      await changeEmail({ variables: { data: { email } } });
    } catch (error) {
      console.error('Error updating email:', error);
    }
  };

  const handlePhoneChange = async () => {
    if (!validatePhoneNumber(phone)) {
      setErrors((prev) => ({ ...prev, phone: 'Некорректный номер телефона' }));
      return;
    }
    try {
      await changePhone({ variables: { data: { phoneNumber: phone } } });
    } catch (error) {
      console.error('Error updating email:', error);
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword.length < 8) {
      setErrors((prev) => ({ ...prev, password: 'Пароль должен содержать не менее 8 символов' }));
      return;
    }
    try {
      await changePassword({ variables: { data: { oldPassword, newPassword } } });
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  const handleDeactivation = async () => {
    try {
      const response = await remove();
      console.log('Name updated:', response);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  useEffect(() => {
    if (user) {
      setEmail(user?.email || '');
      setPhone(user?.phoneNumber || '');
    }
  }, [user]);

  return isLoadingProfile ? <Loader /> : (
    <div className={styles.container}>
      <span className={styles.name}>Аккаунт</span>
      <span className={styles.description}>Управляйте настройками вашего аккаунта</span>

      <div className={styles.block}>
        <span className={styles.block_name}>Адрес электронной почты</span>
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        {successfully.email && <span className={styles.successfully}>{successfully.email}</span>}
        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Почта</span>
          <input 
            onChange={(event) => {setEmail(event.target.value); setErrors((prev) => ({ ...prev, email: '' })); setSuccessfully((prev) => ({ ...prev, email: '' }))}} 
            value={email} 
            type="text" 
            placeholder={email ? '' : 'У вас нет адреса электронной почты'}
            className={styles.avatar_update_input}
          />
          <span className={styles.block_section_description}>{email ? 'Введите ваш новый адрес электронной почты' : 'Вы можете привязать адрес электронной почты'}</span>
        </div>

        <button disabled={loadingChangeEmail || email === user?.email} onClick={handleEmailChange} className={styles.save_button}>{email ? 'Сохранить' : 'Создать'}</button>
      </div> 

      <div className={styles.block}>
        <span className={styles.block_name}>Номер телефона</span>

        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        {successfully.phone && <span className={styles.successfully}>{successfully.phone}</span>}

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Номер</span>
          <input 
            onChange={(event) => {setPhone(event.target.value); setErrors((prev) => ({ ...prev, phone: '' })); setSuccessfully((prev) => ({ ...prev, phone: '' }))}} 
            value={phone} 
            placeholder={phone ? '' : 'У вас нет номера телефона'}
            type="text" 
            className={styles.avatar_update_input}
          />
          <span className={styles.block_section_description}>{phone ? 'Введите ваш новый номер телефона' : 'Вы можете привязать номер телефона'}</span>
        </div>

        <button disabled={loadingChangePhone || phone === user?.phoneNumber} onClick={handlePhoneChange} className={styles.save_button}>{phone ? 'Сохранить' : 'Создать'}</button>
      </div>   

      <div className={styles.block}>
        <span className={styles.block_name}>Настройки профиля</span>  

        {errors.password && <span className={styles.error}>{errors.password}</span>}
        {successfully.password && <span className={styles.successfully}>{successfully.password}</span>}

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Старый пароль</span>
          <input 
            onChange={(event) => {setOldPassword(event.target.value); setErrors((prev) => ({ ...prev, password: '' })); setSuccessfully((prev) => ({ ...prev, password: '' }))}} 
            value={oldPassword} 
            type={showPassword ? 'text' : 'password'} 
            className={styles.avatar_update_input}
          />
          <span className={styles.block_section_description}>Введите свой старый пароль, чтобы подтвердить вашу личность перед изменением пароля. Это необходимо для обеспечения безопасноти вашей учетной записи</span>
        </div>

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Новый пароль</span>
          <input 
            onChange={(event) => setNewPassword(event.target.value)} 
            value={newPassword} 
            type={showPassword ? 'text' : 'password'} 
            className={styles.avatar_update_input}
          />
          <span className={styles.block_section_description}>Ваш новый пароль должен содержать не менее 8 символов. Рекумендуется использовать также специальные символы для повышения безопасности</span>
        </div>

        <div className={styles.button_block}>
          <button onClick={togglePasswordVisibility} className={styles.eye_button}>
            {showPassword ? 'Скрыть' : 'Показать'} пароль
          </button>
          <button disabled={loadingChangePassword} onClick={handlePasswordChange} className={styles.save_button}>Сохранить изменения</button>
        </div>
      </div>

      <span className={styles.name}>Деактивация</span>
      <span className={styles.description}>Если вы хотите удалить свою учетную запись, нажмите на кнопку ниже</span>
      <div className={styles.deactive_block}>
        <div className={styles.deactive_descripton}>
          <span className={styles.block_name}>Деактивация аккаунта</span>
          <span className={styles.block_section_description}>После деактивации аккаунт будет полностью удален, вы не сможете восстановить доступ к нему</span>
        </div>
        <button onClick={handleDeactivation} className={styles.save_button}>Деактивировать</button>
      </div>
    </div>
  )
}

export default Account;

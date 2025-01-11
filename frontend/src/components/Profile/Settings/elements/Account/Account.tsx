import React, { useEffect, useState } from 'react'

import styles from './account.module.css'
import { useCurrent } from '../../../../../hooks/useCurrent'
import { useChangeEmailMutation, useChangePasswordMutation, useChangePhoneNumberMutation, useChangeProfileInfoMutation, useRemoveProfileMutation } from '../../../../../graphql/generated/output'
import { exit } from '../../../../../store/slices/userSlise'
import { ROUTES } from '../../../../../utils/routes'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, refetch, isLoadingProfile } = useCurrent()

  const [changeEmail] = useChangeEmailMutation({
    onCompleted() {
      refetch()
    }
  })

  const [changePhone] = useChangePhoneNumberMutation({
    onCompleted() {
      refetch()
    }
  })
  
  const [changePassword] = useChangePasswordMutation({
    onCompleted() {
      refetch()
    }
  })

  const [remove] = useRemoveProfileMutation({
    onCompleted() {
      refetch()
      dispatch(exit());
      navigate(ROUTES.HOME);  
    }
  })

  const [email, setEmail] = useState(user?.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleEmailChange = async () => {
    try {
      const response = await changeEmail({ 
        variables: { 
          data: { 
            email: email
          }
        } 
      });
      console.log('Name updated:', response);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  const handlePasswordChange = async () => {
    try {
      const response = await changePassword({ 
        variables: { 
          data: { 
            oldPassword: oldPassword,
            newPassword: newPassword
          }
        } 
      });
      console.log('Name updated:', response);
    } catch (error) {
      console.error('Error updating name:', error);
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
    }
  }, [user]);

  return isLoadingProfile ? <div className={styles.spinner}></div> : (
    <div className={styles.container}>
      <span className={styles.name}>Аккаунт</span>
      <span className={styles.description}>Управляйте настройками вашего аккаунта</span>

      <div className={styles.block}>
        <span className={styles.block_name}>Адрес электронной почты</span>

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Почта</span>
          <input 
            onChange={(event) => setEmail(event.target.value)} 
            value={email} 
            type="text" 
            className={styles.avatar_update_input}
          />
          <span className={styles.block_section_description}>Введите ваш новый адрес электронной почты</span>
        </div>

        <button onClick={handleEmailChange} className={styles.save_button}>Сохранить</button>
      </div>

      <div className={styles.block}>
        <span className={styles.block_name}>Настройки профиля</span>

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Старый пароль</span>
          <input 
            onChange={(event) => setOldPassword(event.target.value)} 
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
          <button onClick={handlePasswordChange} className={styles.save_button}>Сохранить изменения</button>
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

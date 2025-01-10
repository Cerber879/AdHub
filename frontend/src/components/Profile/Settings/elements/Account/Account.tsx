import React, { useState } from 'react'

import styles from './account.module.css'

const Account = () => {
  // Состояния для старого и нового пароля, старой почты
  const [oldEmail, setOldEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  // Обработчики событий для сохранения изменений
  const handleEmailChange = () => {
    // Логика для обновления почты
    console.log('Email saved:', oldEmail);
  };

  const handlePasswordChange = () => {
    // Логика для обновления пароля
    console.log('Password saved:', oldPassword, newPassword);
  };

  const handleDeactivation = () => {
    // Логика для деактивации аккаунта
    console.log('Account deactivated');
  };

  return (
    <div className={styles.container}>
      <span className={styles.name}>Аккаунт</span>
      <span className={styles.description}>Управляйте настройками вашего аккаунта</span>

      <div className={styles.block}>
        <span className={styles.block_name}>Адрес электронной почты</span>

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Почта</span>
          <input 
            onChange={(event) => setOldEmail(event.target.value)} 
            value={oldEmail} 
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
            type="text" 
            className={styles.avatar_update_input}
          />
          <span className={styles.block_section_description}>Введите свой старый пароль, чтобы подтвердить вашу личность перед изменением пароля. Это необходимо для обеспечения безопасноти вашей учетной записи</span>
        </div>

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Новый пароль</span>
          <input 
            onChange={(event) => setNewPassword(event.target.value)} 
            value={newPassword} 
            type="text" 
            className={styles.avatar_update_input}
          />
          <span className={styles.block_section_description}>Ваш новый пароль должен содержать не менее 8 символов. Рекумендуется использовать также специальные символы для повышения безопасности</span>
        </div>

        <button onClick={handlePasswordChange} className={styles.save_button}>Сохранить изменения</button>
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

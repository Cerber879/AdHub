import React, { useState } from 'react'

import styles from './settings.module.css'

import Account from './elements/Account/Account';
import Profile from './elements/Profile/Profile';
import Sessions from './elements/Sessions/Sessions';
import { useFindProfileQuery } from '../../../graphql/generated/output';

const ProfileListSettings = () => {

  const { data } = useFindProfileQuery();
  const user = data?.findProfile;

  const [activeTab, setActiveTab] = useState('profile');
  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  }

  return (
    <div className={styles.container}>
      <span className={styles.name}>Настройки</span>
      <span className={styles.description}>Здесь вы можете управлять вашими настройками</span>
      <div className={styles.bar_block}>
        <button 
          onClick={() => handleTabChange('profile')}
          className={`${activeTab === 'profile' ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Профиль</span>
        </button>
        <button 
          onClick={() => handleTabChange('account')}
          className={`${activeTab === 'account' ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Аккаунт</span>
        </button>
        <button 
          onClick={() => handleTabChange('sessions')}
          className={`${activeTab === 'sessions' ? styles.activeButton : styles.passiveButton} ${styles.bar_button}`}>
          <span>Сессии</span>
        </button>
      </div>
        
      {activeTab === 'profile' && user && <Profile input={user} />}
      {activeTab === 'account' && <Account />}
      {activeTab === 'sessions' && <Sessions />}
    </div>
  )
}

export default ProfileListSettings;

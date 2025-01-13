import React, { useState } from 'react';
import styles from './info.module.css';

interface Social {
  name: string;
  link: string;
  description?: string;
}

interface UserInfoProps {
  description?: string;
  socials?: Social[];
}

const UserInfo: React.FC<UserInfoProps> = ({ description = 'Нет описания', socials = [] }) => {
  const [infoTab, setInfoTab] = useState<'description' | 'socials'>('description');

  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoTabs}>
        <button
          className={infoTab === 'description' ? styles.activeTab : styles.passiveTab}
          onClick={() => setInfoTab('description')}
        >
          Информация
        </button>
        <button
          className={infoTab === 'socials' ? styles.activeTab : styles.passiveTab}
          onClick={() => setInfoTab('socials')}
        >
          Соц. сети
        </button>
      </div>
      <div className={styles.infoContent}>
        {infoTab === 'description' ? (
          description.trim().length > 0 ? (
            <p>{description}</p>
          ) : (
            <p>Нет описания</p>
          )
        ) : (
          <div className={styles.socialsList}>
            {socials.length > 0 ? (
              socials.map(({ name, link, description }, index) => (
                <div key={name + index} className={styles.socialItem}>
                  {description && <p>{`${description}:`}</p>}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ссылка на ${name}`}
                  >
                    {name}
                  </a>
                </div>
              ))
            ) : (
              <p>Нет социальных сетей</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;

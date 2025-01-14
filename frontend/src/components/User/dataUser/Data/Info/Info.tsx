import React, { useState } from 'react';
import styles from './info.module.css';
import { useFindUserInfoQuery } from '../../../../../graphql/generated/output';
import Loader from '../../../../../utils/Loader/Loader';

const UserInfo: React.FC<{ id: string }> = ({ id }) => {
  const [infoTab, setInfoTab] = useState<'description' | 'socials'>('description');

  const { data, loading } = useFindUserInfoQuery({
    variables: { 
      id: id || '' 
    },
  });

  const userInfo = data?.findUserInfo

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
      {loading ? <Loader /> : (
        <div className={styles.infoContent}>
          {infoTab === 'description' ? (
            userInfo?.bio && userInfo?.bio.trim().length > 0 ? (
              <p>{userInfo?.bio}</p>
            ) : (
              <p>Нет описания</p>
            )
          ) : infoTab === 'socials' ? (
            <div className={styles.socialsList}>
              {userInfo?.socialLinks && userInfo?.socialLinks.length > 0 ? (
                userInfo?.socialLinks.map(({ title, url, description }, index) => (
                  <div key={index} className={styles.socialItem}>
                    <span className={styles.social_description}>{`${description}:`}</span>
                    <a
                      href={url}
                      className={styles.social_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ссылка на ${title}`}
                    >
                      <span className={styles.social_link_title}>
                        {title}
                      </span>
                    </a>
                  </div>
                ))
              ) : (
                <p>Нет социальных сетей</p>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default UserInfo;

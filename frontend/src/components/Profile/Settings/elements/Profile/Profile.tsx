import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

import styles from './profile.module.css';

import { useChangeProfileAvatarMutation, useChangeProfileInfoMutation, useRemoveProfileAvatarMutation } from '../../../../../graphql/generated/output';
import SocialLinks from './SocialLinks/SocialLinks';
import { useCurrent } from '../../../../../hooks/useCurrent';
import { ApolloError } from '@apollo/client';

const Profile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { user, refetch, isLoadingProfile } = useCurrent();

  const [changeInfo] = useChangeProfileInfoMutation({
    onCompleted() {
      refetch();
    },
  });

  const [update, { loading }] = useChangeProfileAvatarMutation({
    onCompleted() {
      refetch();
    },
    onError(error) { 
      console.log(error)
    }
  });

  const [remove] = useRemoveProfileAvatarMutation({
    onCompleted() {
      refetch();
    },
  });

  const [name, setName] = useState(user?.displayName || '');
  const [bio, setBio] = useState(user?.bio || '');

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setBio(user.bio || '');
    }
  }, [user]);

  const handleProfileInfoChange = async () => {
    try {
      const response = await changeInfo({
        variables: {
          data: {
            displayName: name || '',
            bio: bio || '',
          },
        },
      });
      console.log('Name updated:', response);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const { data, errors } = await update({
          variables: { avatar: file },
        });
  
        if (errors) {
          console.error('GraphQL Errors:', errors);
          return;
        }
  
        console.log('File uploaded successfully', data);
      } catch (error) {
        if (error instanceof ApolloError) {
          if (error.networkError) {
            console.error('Network error:', error.networkError);
          } else if (error.graphQLErrors) {
            console.error('GraphQL errors:', error.graphQLErrors);
          } else {
            console.error('Unknown ApolloError:', error);
          }
        } else {
          console.error('Unexpected error:', error);
        }
      }
    }
  };

  const handleDeleteAvatar = async () => {
    remove();
  };

  return isLoadingProfile ? (
    <div className={styles.spinner}></div>
  ) : (
    <div className={styles.container}>
      <span className={styles.name}>Профиль</span>
      <span className={styles.description}>
        Настройте ваш профиль, обновите аватар, измените информацию о себе, чтобы
        сделать вашу страницу более информированной для других пользователей
      </span>
      <div className={styles.block}>
        <span className={styles.block_name}>Изображение профиля</span>
        <div className={styles.avatar}>
          <img
            src={user?.avatar || '../../../../images/Profile/user.svg'}
            alt="Аватар"
            className={styles.avatar_img}
          />
          <div className={styles.avatar_update}>
            <div className={styles.avatar_update_block}>
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <button
                onClick={() => inputRef.current?.click()}
                className={styles.avatar_update_button}
                disabled={loading}
              >
                Загрузить изображение
              </button>
              {user?.avatar !== null && (
                <div className={styles.icon} onClick={handleDeleteAvatar}>
                  <img src="/images/Profile/trash.svg" alt="trash" />
                </div>
              )}
            </div>
            <span className={styles.block_section_description}>
              Поддерживаемые форматы: jpg, png, jpeg, webp и gif. Макс. размер: 10 Мб
            </span>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <span className={styles.block_name}>Настройки профиля</span>

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>Имя пользователя</span>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            className={styles.avatar_update_input}
          />
          <span className={styles.block_section_description}>
            Под этим именем вас будут видеть другие пользователи
          </span>
        </div>

        <div className={styles.block_section}>
          <span className={styles.block_section_name}>О себе</span>
          <textarea
            onChange={(event) => setBio(event.target.value)}
            value={bio}
            className={styles.bio}
          />
          <span className={styles.block_section_description}>
            Информация о себе должна содержать не более 300 символов
          </span>
        </div>

        <button onClick={handleProfileInfoChange} className={styles.save_button}>
          Сохранить изменения
        </button>
      </div>

      <SocialLinks />
    </div>
  );
};

export default Profile;

import React, { useState } from 'react'

import styles from './profile.module.css'

import { FindProfileQuery, useChangeProfileAvatarMutation, useChangeDisplayNameMutation } from '../../../../../graphql/generated/output';
import SocialLinks from './SocialLinks/SocialLinks';

interface ProfileProps {
    input: FindProfileQuery['findProfile']
}

interface SocialLink {
    name: string;
    url: string;
}

const Profile = ({ input }: ProfileProps) => {

  const [changeDisplayName] = useChangeDisplayNameMutation()

  const [changeProfileAvatar] =
  useChangeProfileAvatarMutation({
      onError() {
        console.log()
      }
  })

  const [name, setName] = useState(input.displayName);
  const [bio, setBio] = useState(input.bio);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(input.avatar || null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleNameChange = async () => {
    try {
      const response = await changeDisplayName({ variables: { data: { displayName: name } } });
      console.log('Name updated:', response);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      setAvatarFile(file);
    }
  };

  const handleSaveAvatar = async () => {
    if (avatarFile) {
      try {
        const response = await changeProfileAvatar({
          variables: {
            avatar: avatarFile, 
          },
        });
        console.log('Avatar uploaded:', response);
      } catch (error) {
        console.error('Error uploading avatar:', error);
      }
    } else {
      console.error('No avatar file selected');
    }
  };

  const handleDeleteAvatar = async () => {
    setAvatarPreview(input?.avatar !== undefined ? input?.avatar : '');
    setAvatarFile(null);
  };

  const triggerFileInput = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event: Event) => handleAvatarChange(event as unknown as React.ChangeEvent<HTMLInputElement>);
    fileInput.click();
  };

  const [socialName, setSocialName] = useState<string>('');
  const [socialUrl, setSocialUrl] = useState<string>('');
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]); // указываем тип массива
  
  const handleAddSocial = () => {
      // Валидация URL
      const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,}(\/[^\s]*)?$/;
      if (!urlPattern.test(socialUrl)) {
          alert('Введите правильный URL!');
          return;
      }
  
      if (!socialName || !socialUrl) {
          alert('Заполните все поля!');
          return;
      }
  
      const newLink: SocialLink = { name: socialName, url: socialUrl }; // типизация объекта
      setSocialLinks([...socialLinks, newLink]);
  
      // Очистка полей
      setSocialName('');
      setSocialUrl('');
  };
  

  return (
    <div className={styles.container}>
        <span className={styles.name}>Профиль</span>
        <span className={styles.description}>Настройте ваш профиль, обновите аватар, измените информаицию о себе, чтобы сделать вашу страницу более информированной для других пользователей</span>
        <div className={styles.block}>
            <span className={styles.block_name}>Изображение профиля</span>
            <div className={styles.avatar}>
                <img src={avatarPreview || ''} alt="Аватар" className={styles.avatar_img} />
                <div className={styles.avatar_update}>
                    <div className={styles.avatar_update_block}>
                        <button onClick={triggerFileInput} className={styles.avatar_update_button}>Загрузить изображение</button>
                        { input?.avatar !== avatarPreview &&
                            <>
                                <div className={styles.icon} onClick={handleSaveAvatar}><img src="/images/Profile/check.svg" alt="check" /></div>
                                <div className={styles.icon} onClick={handleDeleteAvatar}><img src="/images/Profile/trash.svg" alt="trash" /></div>
                            </>
                        }  
                    </div>
                    <span className={styles.block_section_description}>Поддерживаемые форматы: jpg, png, jpeg, webp и gif. Макс. размер: 10 Мб</span>
                </div>
            </div>
        </div>

        <div className={styles.block}>
            <span className={styles.block_name}>Настройки профиля</span>

            <div className={styles.block_section}>
                <span className={styles.block_section_name}>Имя пользователя</span>
                <input onChange={(event) => {setName(event.target.value)}} value={name} type="text" className={styles.avatar_update_input}/>
                <span className={styles.block_section_description}>Под этим именем вас будут видеть другие пользователи</span>
            </div>

            <div className={styles.block_section}>
                <span className={styles.block_section_name}>О себе</span>
                <textarea onChange={(event) => {setBio(event.target.value)}} className={styles.bio}/>
                <span className={styles.block_section_description}>Информация о себе должна содержать не более 300 символов</span>
            </div>

            <button onClick={handleNameChange} className={styles.save_button}>Сохранить изменения</button>
        </div>

        <SocialLinks />
    </div>
  )
}

export default Profile

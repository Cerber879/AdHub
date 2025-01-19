import { useState } from 'react';
import styles from './header.module.css'
import LoginModal from '../Auth/Login/LoginModal';
import RegisterModal from '../Auth/Register/RegisterModal';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useCurrent } from '../../hooks/useCurrent';

export function Header() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const { user } = useCurrent()
  console.log(user)
    
  const handleRegister = () => {
    setShowRegisterModal(true)
    setShowLoginModal(false)
  }

  const handleLogin = () => {
    setShowRegisterModal(false)
    setShowLoginModal(true)
  }

  return(
    <div className={styles.setBar}>
      <div className={styles.flex_block}>
        <Link 
          to={ROUTES.HOME}
          className={`${styles.button_link} ${styles.logo}`}
        >
          <img className={styles.logo_icon} src="/favicons.png" alt="Icon" />
          <span className={styles.logo_name}>ADHUB</span>
        </Link>

        <Link 
          to={ROUTES.ABOUT}  
          className={styles.button_link}>
          <span>О нас</span>
        </Link>

        <Link 
          to={ROUTES.CATALOG}
          className={styles.button_link}>
          <span>Каталог</span>
        </Link>
      </div>
      <div className={styles.flex_block}>

        {!user &&
          <button 
            className={`${styles.button_link} ${styles.auth}`}
            onClick={() => setShowLoginModal(true)}>
                  Вход и Регистрация
          </button>
        }

        {user &&
          <Link 
            to={ROUTES.PROFILE}
            className={styles.button_link}>
            <span>Мои Объявления</span>
          </Link>
        }

        <Link 
          {...user 
            ? { to: ROUTES.MESSENGER } 
            : { onClick: () => setShowLoginModal(true),
              to: ROUTES.HOME
            }}
          className={styles.button_link}>
          <img src="/images/ImagesTopPanel/message.svg" alt="Icon" width="16px" height="16px" />
        </Link>

        <Link 
          {...user 
            ? { to: ROUTES.FAVOURITES } 
            : { onClick: () => setShowLoginModal(true),
              to: ROUTES.HOME
            }}
          className={styles.button_link}>
          <img src="/images/ImagesTopPanel/favorite.svg" alt="Icon" width="16px" height="16px" />
        </Link>

        <Link 
          {...user 
            ? { to: ROUTES.PROFILE } 
            : { onClick: () => setShowLoginModal(true),
              to: ROUTES.HOME
            }}
          className={styles.button_link}>
          <img src="/images/ImagesTopPanel/profile.svg" alt="Icon" width="16px" height="16px" />
        </Link>

        <Link
          {...user 
            ? { to: ROUTES.ADDITEM } 
            : { onClick: () => setShowLoginModal(true),
              to: ROUTES.HOME
            }}
        >
          <button className={`${styles.button_link} ${styles.button_add_advertisment}`}>
            <span>Создать Объявление</span>
          </button>
        </Link>
      </div>

      {showLoginModal && <LoginModal onClose={() => {setShowLoginModal(false)}} onOpenRegister={handleRegister} />}
      {showRegisterModal && <RegisterModal onClose={() => {setShowRegisterModal(false)}} onOpenLogin={handleLogin} />}
    </div>
  )
}
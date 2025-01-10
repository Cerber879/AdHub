import { useState } from 'react';
import styles from './header.module.css'
import LoginModal from '../Auth/Login/LoginModal';
import RegisterModal from '../Auth/Register/RegisterModal';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useSelector } from 'react-redux';
import { useFindProfileQuery } from '../../graphql/generated/output';

export function Header() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated)
    
  const { data } = useFindProfileQuery();
  const _user = data?.findProfile;

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

        {!isAuthenticated &&
                    <button 
                      className={`${styles.button_link} ${styles.auth}`}
                      onClick={() => setShowLoginModal(true)}>
                            Вход и Регистрация
                    </button>
        }

        {isAuthenticated &&
                    <Link 
                      to={ROUTES.PROFILE}
                      className={styles.button_link}>
                      <span>Мои Объявления</span>
                    </Link>
        }
                
        <Link
          {...isAuthenticated 
            ? { to: ROUTES.ADDITEM } 
            : { onClick: () => setShowLoginModal(true),
              to: ROUTES.HOME
            }}
        >
          <button className={`${styles.button_link} ${styles.button_add_advertisment}`}>
            <span>Создать Объявление</span>
          </button>
        </Link>

        <Link 
          {...isAuthenticated 
            ? { to: ROUTES.MESSENGER } 
            : { onClick: () => setShowLoginModal(true),
              to: ROUTES.HOME
            }}
          className={styles.button_link}>
          <img src="/images/ImagesTopPanel/message.svg" alt="Icon" width="16px" height="16px" />
        </Link>

        <Link 
          {...isAuthenticated 
            ? { to: ROUTES.FAVOURITES } 
            : { onClick: () => setShowLoginModal(true),
              to: ROUTES.HOME
            }}
          className={styles.button_link}>
          <img src="/images/ImagesTopPanel/favorite.svg" alt="Icon" width="16px" height="16px" />
        </Link>

        <Link 
          {...isAuthenticated 
            ? { to: ROUTES.PROFILE } 
            : { onClick: () => setShowLoginModal(true),
              to: ROUTES.HOME
            }}
          className={styles.button_link}>
          <img src="/images/ImagesTopPanel/profile.svg" alt="Icon" width="16px" height="16px" />
        </Link>
      </div>

      {showLoginModal && <LoginModal onClose={() => {setShowLoginModal(false)}} onOpenRegister={handleRegister} />}
      {showRegisterModal && <RegisterModal onClose={() => {setShowRegisterModal(false)}} onOpenLogin={handleLogin} />}
    </div>
  )
}
import { useState } from 'react';
import styles from './header.module.css'
import LoginModal from '../Modals/Login/LoginModal';
import RegisterModal from '../Modals/Register/RegisterModal';

export function Header() {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

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
                <a 
                href="http://localhost:3000/"
                className={`${styles.button_link} ${styles.logo}`}>
                <img className={styles.logo_icon} src="/favicons.png" alt="Icon" />
                <span className={styles.logo_name}>ADHUB</span>
                </a>

                <a 
                href="http://localhost:3000/about"  
                className={styles.button_link}>
                <span>О нас</span>
                </a>

                <a 
                href="http://localhost:3000/catalog"
                className={styles.button_link}>
                <span>Каталог</span>
                </a>
            </div>
            <div className={styles.flex_block}>

                <button 
                className={styles.button_link}
                onClick={() => setShowLoginModal(true)}>
                    Вход и Регистрация
                </button>
                <a 
                href="http://localhost:3000/ads"
                className={styles.button_link}>
                <span>Мои Объявления</span>
                </a>
        
                <a 
                href="http://localhost:3000/create-ad"
                className={`${styles.button_link} ${styles.button_add_advertisment}`}>
                <span>Создать Объявление</span>
                </a>

                <a 
                href="http://localhost:3000/messages"
                className={styles.button_link}>
                <img src="/images/ImagesTopPanel/message.svg" alt="Icon" width="16px" height="16px" />
                </a>

                <a 
                href="http://localhost:3000/favorite"
                className={styles.button_link}>
                <img src="/images/ImagesTopPanel/favorite.svg" alt="Icon" width="16px" height="16px" />
                </a>

                <a 
                href="http://localhost:3000/profile"
                className={styles.button_link}>
                <img src="/images/ImagesTopPanel/profile.svg" alt="Icon" width="16px" height="16px" />
                </a>
            </div>
            {showLoginModal && <LoginModal onClose={() => {setShowLoginModal(false)}} onOpenRegister={handleRegister} />}
            {showRegisterModal && <RegisterModal onClose={() => {setShowRegisterModal(false)}} onOpenLogin={handleLogin} />}
        </div>
    )
}
import React from 'react';
import styles from './about.module.css'; 
import { SessionModel } from '../../../../../../graphql/generated/output';
import MapComponent from '../MapComponent/MapComponent';

interface AboutModalProps {
  input: SessionModel
  onClose: () => void
}

const AboutModal: React.FC<AboutModalProps> = ({ input, onClose }) => {
  // Деструктурируем все данные сессии
  const { createdAt, metadata } = input;
  const { ip, location, device } = metadata;
  const { city, country, longitude, latidute } = location;
  const { browser, os } = device;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <button
          className={styles.close_button}
          onClick={onClose}
        >
          <img className={styles.close_button_icon} src="/images/modal/cross.svg" alt="Icon" width={10}/>
        </button>
        <span className={styles.block_name}>Информация о сессии</span>

        <div className={styles.session_info}>
          <span className={styles.block_section_name}><strong>Браузер и ОС:</strong> {browser}, {os}</span>
          <span className={styles.block_section_name}><strong>Местоположение:</strong> {country}, {city}</span>
          <span className={styles.block_section_name}><strong>IP-Адрес:</strong> {ip}</span>
          <span className={styles.block_section_name}><strong>Координаты:</strong> {latidute}, {longitude}</span>
          <span className={styles.block_section_name}><strong>Дата создания:</strong> {new Date(createdAt).toLocaleString()}</span>
        </div>

        <MapComponent lat={input.metadata.location.latidute} lng={input.metadata.location.longitude} zoom={10} />
      </div>
    </div>
  );
};

export default AboutModal;

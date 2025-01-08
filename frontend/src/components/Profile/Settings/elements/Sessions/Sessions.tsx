import React, { useState } from 'react'

import styles from './sessions.module.css'
import { useFindCurrentSessionQuery, useFindSessionByUserQuery, useRemoveSessionMutation } from '../../../../../graphql/generated/output'
import AboutModal from './AboutModel/About'

const Sessions = () => {
    
    const { data: currentData } = useFindCurrentSessionQuery()
    const currenSession = currentData?.findCurrentSession
    
    const { data: othersData } = useFindSessionByUserQuery()
    const otherSessions = othersData?.findSessionsByUser

    const [remove] = useRemoveSessionMutation()

    const RemoveSession = (id: string) => {
        remove({ variables: { id: id }})
    }

    const getBrowserIconUrl = (browserName: string | undefined): string => {
        if (browserName && browserIcons[browserName as keyof typeof browserIcons]) {
          return browserIcons[browserName as keyof typeof browserIcons];
        }
        return '';  
      };
    
    const browserIconUrl = getBrowserIconUrl(currenSession?.metadata.device.browser);


    const [showAboutModal, setShowAboutModal] = useState(false);
    const [sessionInfo, setSessionInfo] = useState<any>();

    const HandleOpenAbout = (session: any) => {
        if (session) {
            const sessionWithUserId = { ...session, userId: session.userId || 'defaultUserId' };
            setSessionInfo(sessionWithUserId);
        }
        setShowAboutModal(true);
    };

    const HandleCloseAbout = () => {
        setShowAboutModal(false)
    }
    

  return (
    <div className={styles.container}>
        <span className={styles.name}>Сессии</span>
        <span className={styles.description}>Сессии - это устройства, которые вы используете или которые использовали для входа в вашу учетную запись AdHub. Здесь показаны активные сессии на данный моомент.</span>

        <span className={styles.name}>Теккущая сессия</span>
        <div className={styles.block}>
            <div className={styles.session_data}>
                <img src={browserIconUrl === '' ? defaultIcon : browserIconUrl} alt="Аватар" className={styles.browser_icon} />
                <div className={styles.data}>
                    <span className={styles.block_section_name}>{`${currenSession?.metadata.device.browser}, ${currenSession?.metadata.device.os}`}</span>
                    <span className={styles.block_section_description}>{`${currenSession?.metadata.location.country}, ${currenSession?.metadata.location.city}`}</span>
                </div>
            </div>
            <button onClick={() => {HandleOpenAbout(currenSession)}} className={styles.info_button}>Подробнее</button>
        </div>

        <span className={styles.name}>Активные сессии</span>
        {otherSessions?.length === 0 && <span className={styles.not_sessions}>Активных сессий не найдено</span>}
        {otherSessions?.map((session) => {
            return (
                <div className={styles.block} key={session.id}>
                    <div className={styles.session_data}>
                        <img src={getBrowserIconUrl(session?.metadata.device.browser) === '' ? defaultIcon : getBrowserIconUrl(session?.metadata.device.browser)} alt="Аватар" className={styles.browser_icon} />
                        <div className={styles.data}>
                            <span className={styles.block_section_name}>{`${session.metadata.device.browser}, ${session.metadata.device.os}`}</span>
                            <span className={styles.block_section_description}>{`${session.metadata.location.country}, ${session.metadata.location.city}`}</span>
                        </div>
                    </div>
                    <div className={styles.block_info}>
                        <button onClick={() => {RemoveSession(session.id)}} className={styles.delete_button}>Удалить</button>
                        <button onClick={() => {HandleOpenAbout(session)}} className={styles.info_button}>Подробнее</button>
                    </div>
                </div>
            );
        })}

        {showAboutModal && <AboutModal input={sessionInfo} onClose={HandleCloseAbout}/>}
    </div>
  )
}

export default Sessions


const browserIcons: {
    'Yandex Browser': string;
    'Chrome': string;
    'Firefox': string;
    'Safari': string;
    'Microsoft Edge': string;
    'Opera': string;
  } = {
    'Yandex Browser': 'https://avatars.mds.yandex.net/get-entity_search/1640463/905430227/S114x114FitScale_2x',
    'Chrome': 'https://avatars.mds.yandex.net/i?id=8c2f8400a7d475dfe81040eaa8666971e66e84af-5086874-images-thumbs&n=13',
    'Firefox': 'https://avatars.mds.yandex.net/get-entity_search/5579913/551864597/S88x88FitScale_2x',
    'Safari': 'https://avatars.mds.yandex.net/get-entity_search/793860/294411422/S114x114FitScale_2x',
    'Microsoft Edge': 'https://avatars.mds.yandex.net/get-entity_search/2376568/422987207/S88x88FitScale_2x',
    'Opera': 'https://avatars.mds.yandex.net/get-entity_search/1729550/551847566/S88x88FitScale_2x'
  };
  
const defaultIcon = '/images/Profile/chrome.svg';
  
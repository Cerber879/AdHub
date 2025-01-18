import React from 'react'

import styles from './actions.module.css'

import { AnnouncementStatus, FindAllAnnouncementsQuery } from '../../../../../../graphql/generated/output'

interface PreviewProfileAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
}

const ActionsAdvertisment = ({ input }: PreviewProfileAdvertismentProps) => {
  return (
    <div className={styles.data_block}>
      {input.status === AnnouncementStatus.Active
       ? <button>Снять с публикации</button> 
       : <button>Опубликовать</button>
      }
      <button>Редактировать</button>
      <button>Удалить</button>
    </div>
  )
}

export default ActionsAdvertisment
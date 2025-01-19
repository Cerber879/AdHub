import React from 'react'

import styles from './actions.module.css'

import { AnnouncementStatus, FindAllAnnouncementsQuery, useChangeStatusAnnouncementMutation, useDeleteAnnouncementMutation } from '../../../../../../graphql/generated/output'

interface PreviewProfileAdvertismentProps {
  input: FindAllAnnouncementsQuery['findAllAnnouncements'][number] 
  refetch: any;
  stopPropagation: (event: React.MouseEvent) => void
}

const ActionsAdvertisment = ({ input, refetch, stopPropagation }: PreviewProfileAdvertismentProps) => {

  const [changeStatus, { loading: loadingChangeStatus }] = useChangeStatusAnnouncementMutation({
    onCompleted: () => {
      refetch()
    }
  })

  const [deleteAnnouncement, { loading: loadingDelete }] = useDeleteAnnouncementMutation({
    onCompleted: () => {
      refetch()
    }
  })

  const handleChangeStatus = async (event: React.MouseEvent, status: string) => {
    stopPropagation(event);
    try {
      const response = await changeStatus({
        variables: {
          id: input.id,
          status: status
        },
      });
      console.log('Name updated:', response);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  const handleDeleteAnnouncement = async () => {
    try {
      const response = await deleteAnnouncement({
        variables: {
          id: input.id,
        },
      });
      console.log('Name updated:', response);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };
  
  return (
    <div className={styles.data_block}>
      {input.status === AnnouncementStatus.Active
        ? <button disabled={loadingChangeStatus} onClick={(e) => handleChangeStatus(e, AnnouncementStatus.Inactive)}>Снять с публикации</button> 
        : <button disabled={loadingChangeStatus} onClick={(e) => handleChangeStatus(e, AnnouncementStatus.Active)}>Опубликовать</button>
      }
      <button>Редактировать</button>
      <button disabled={loadingDelete} onClick={handleDeleteAnnouncement}>Удалить</button>
    </div>
  )
}

export default ActionsAdvertisment

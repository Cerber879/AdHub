import { useEffect, useMemo, useState } from 'react';
import { closestCorners, DndContext } from '@dnd-kit/core';
import styles from './socialLinks.module.css';
import { useCreateSocialLinkMutation, useFindSocialLinksQuery, useRemoveSocialLinkMutation, useReorderSocialLinksMutation, useUpdateSocialLinkMutation } from '../../../../../../graphql/generated/output';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type SocialLink = {
  id: string;
  title: string;
  url: string;
  position: number;
};

const SocialLinks = () => {

  const { data: socialLinksData, refetch, loading: socialLinksLoading } = useFindSocialLinksQuery();

	const [create] = useCreateSocialLinkMutation({
		onCompleted() {
			refetch()
		}
	})

  const [reorder] = useReorderSocialLinksMutation({
    onCompleted() {
      refetch()
    }
  })

  const [links, setLinks] = useState<SocialLink[]>(socialLinksData?.findSocialLinks || []);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    setLinks(socialLinksData?.findSocialLinks || []);
  }, [socialLinksData]);

  function handleCreateSocialLink() {
    if (!name || !url || !isValidUrl(url)) return;
		create({ variables: { data: { title: name, url: url } } })
    setName('');
    setUrl('');
	}

  const isValidUrl = (url: string) => {
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    return regex.test(url);
  }

  const getLinksPos = (id: string) => {
    return links.findIndex(link => link.id === id)
  }

  const handleDragEnd = (event: { over: any; active: any; }) => {
    const { over, active } = event;

    if (active.id === over.id) {
      return
    }

    setLinks((prevLinks: SocialLink[]) => {
      const originalPos = getLinksPos(active.id);
      const targetPos = getLinksPos(over.id);
  
      const updatedLinks = arrayMove(prevLinks, originalPos, targetPos);
      
      const data = updatedLinks.map((link: SocialLink, index: number) => ({
        id: link.id,
        position: index,
      }));
  
      reorder({ variables: { list: data } });
  
      return updatedLinks;  
    });
  }

  return (
    <div className={styles.block}>
      <span className={styles.block_name}>Изменить ссылки на соцсети</span>

      <div className={styles.block_section}>
        <span className={styles.block_section_name}>Название</span>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          className={styles.avatar_update_input}
        />
        <span className={styles.block_section_description}>Текст ссылки</span>
      </div>

      <div className={styles.block_section}>
        <span className={styles.block_section_name}>URL ссылки</span>
        <input
          onChange={(event) => setUrl(event.target.value)}
          value={url}
          type="text"
          className={styles.avatar_update_input}
        />
        <span className={styles.block_section_description}>Куда ведет эта ссылка? Введите полный адрес, например: https://google.com</span>
      </div>

      <button onClick={handleCreateSocialLink} className={styles.save_button}>
        Добавить ссылку
      </button>


      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className={styles.linksContainer}>
          {links.length === 0 && <span className={styles.no_links}>Ссылок нет</span>}
          <SortableContext items={links} strategy={verticalListSortingStrategy} >
            {socialLinksLoading ? <div className={styles.spinner}></div> 
            : links.map((link) => (
              <LinkItem
                key={link.id}
                link={link}
                refetch={refetch}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>

  );
};

type LinkItemProps = {
  link: SocialLink;
  refetch: () => void;
};

const LinkItem = ({ link, refetch }: LinkItemProps) => {

  const [update] = useUpdateSocialLinkMutation({
		onCompleted() {
			refetch()
		}
	})

	const [remove] = useRemoveSocialLinkMutation({
		onCompleted() {
			refetch()
		}
	})

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: link.id
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const [isEditing, setIsEditing] = useState(false);
  const [newUrl, setNewUrl] = useState(link.url);
  const [newName, setNewName] = useState(link.title);

  const hasChanges = newUrl !== link.url || newName !== link.title;

  const handleSave = () => {
    update({ variables: { id: link.id, data: { title: newName, url: newUrl } } });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewName(link.title);
    setNewUrl(link.url);
    setIsEditing(false);
  };

  const handleDelete = () => {
    remove({ variables: { id: link.id } });
  };

  return (
    <div
      ref={setNodeRef}
      className={styles.linkItem}
      style={style}
    >
      <div className={styles.link}>
        <div className={styles.target} {...attributes} {...listeners}>
          <img className={styles.targetIcon} src="/images/Profile/drag.svg" alt="target" />
        </div>
        <div className={styles.linkContent}>
          {isEditing ? (
            <div className={styles.editContainer}>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className={styles.editInput}
                placeholder="Название"
              />
              <input
                type="url"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                className={styles.editInput}
                placeholder="Ссылка"
              />
            </div>
          ) : (
            <div className={styles.linkInfo}>
              <span className={styles.linkName}>{link.title}</span>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkUrl}>
                {link.url}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className={styles.edit} style={isEditing ? { justifyContent: "space-between" } : { justifyContent: "end" }}>
        {isEditing && (
          <div className={styles.editButtons}>
            <button onClick={handleCancel} className={styles.cancelButton}>
                Отмена
            </button>
            <button onClick={handleSave} disabled={!hasChanges} className={`${styles.saveButton} ${!hasChanges ? styles.saveButtonDisabled : ''}`}>
                Сохранить
            </button>
          </div>
        )}
        <div className={styles.linkActions}>
          {!isEditing && 
            <button onClick={() => setIsEditing(true)} className={styles.edit_button}>
              <img src="/images/Profile/pencil.svg" alt="edit" />
            </button>
          }
          <button onClick={handleDelete} className={styles.edit_button}>
            <img src="/images/Profile/trash_2.svg" alt="trash_2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;

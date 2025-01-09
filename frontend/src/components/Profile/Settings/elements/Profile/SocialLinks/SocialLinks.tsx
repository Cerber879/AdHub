import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './socialLinks.module.css';

type SocialLink = {
  id: string;
  name: string;
  url: string;
};

const SocialLinks = () => {
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleAddLink = () => {
    if (!name || !url || !isValidUrl(url)) return;

    const newLink = {
      id: Date.now().toString(),
      name,
      url,
    };

    setLinks((prevLinks) => [...prevLinks, newLink]);
    setName('');
    setUrl('');
  };

  const isValidUrl = (url: string) => {
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    return regex.test(url);
  };

  const updateLink = (id: string, updatedLink: SocialLink) => {
    setLinks(links.map(link => (link.id === id ? updatedLink : link)));
  };

  const deleteLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const moveLink = (draggedId: string, targetId: string) => {
    const draggedIndex = links.findIndex((link) => link.id === draggedId);
    const targetIndex = links.findIndex((link) => link.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newLinks = [...links];
    const [draggedLink] = newLinks.splice(draggedIndex, 1);
    newLinks.splice(targetIndex, 0, draggedLink);

    setLinks(newLinks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
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

        <button onClick={handleAddLink} className={styles.save_button}>
        Добавить ссылку
        </button>

        <div className={styles.linksContainer}>
          {links.length === 0 && <span className={styles.no_links}>Ссылок нет</span>}
          {links.map((link, index) => (
            <LinkItem
              key={link.id}
              link={link}
              index={index}
              moveLink={moveLink}
              updateLink={updateLink}
              deleteLink={deleteLink}
            />
          ))}
        </div>
      </div>
    </DndProvider>

  );
};

type LinkItemProps = {
  link: SocialLink;
  index: number;
  moveLink: (draggedId: string, targetId: string) => void;
  updateLink: (id: string, updatedLink: SocialLink) => void;
  deleteLink: (id: string) => void;
};

const LinkItem = ({ link, index, moveLink, updateLink, deleteLink }: LinkItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newUrl, setNewUrl] = useState(link.url);
  const [newName, setNewName] = useState(link.name);

  const hasChanges = newUrl !== link.url || newName !== link.name;

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'link',
    item: { id: link.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'link',
    hover: (item: { id: string; index: number }) => {
      if (item.index !== index) {
        moveLink(item.id, link.id);
        item.index = index;
      }
    },
  });

  const handleSave = () => {
    updateLink(link.id, { ...link, name: newName, url: newUrl });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewName(link.name);
    setNewUrl(link.url);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteLink(link.id);
  };

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`${styles.linkItem} ${isDragging ? styles.dragging : ''}`}
    >
      <div className={styles.link}>
        <div className={styles.target}>
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
              <span className={styles.linkName}>{link.name}</span>
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
          {!isEditing && <button onClick={() => setIsEditing(true)} className={styles.edit_button}><img src="/images/Profile/pencil.svg" alt="edit" /></button>}
          <button onClick={handleDelete} className={styles.edit_button}><img src="/images/Profile/trash_2.svg" alt="trash_2" /></button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;

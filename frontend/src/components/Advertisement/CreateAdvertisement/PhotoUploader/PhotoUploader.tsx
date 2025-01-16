import React from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';

import { CSS } from "@dnd-kit/utilities";
import styles from "./photoUploader.module.css";

const PhotoUploader = ({ photos, onChange }: { photos: any[]; onChange: (photos: any[]) => void }) => {
  const handleAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      onChange([...photos, ...files]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    onChange(updatedPhotos);
  };

  const handleDragEnd = ({ active, over }: { active: any; over: any }) => {
    if (!over || active.id === over.id) return;
  
    const oldIndex = parseInt(active.id.split('-')[1], 10);
    const newIndex = parseInt(over.id.split('-')[1], 10);
  
    requestAnimationFrame(() => {
      const updatedPhotos = arrayMove(photos, oldIndex, newIndex);
      onChange(updatedPhotos);
    });
  };

  return (
    <div className={styles.photoUploader}>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext
          items={["add-photo", ...photos.map((_, i) => `photo-${i}`)]}
          strategy={rectSortingStrategy}
        >
          <div className={styles.photoGrid}>
            {photos.map((photo, index) => (
              <SortablePhoto
                key={`photo-${index}`}
                id={`photo-${index}`}
                photo={photo}
                onRemove={() => handleRemovePhoto(index)}
              />
            ))}
            <div className={`${styles.photoItem} ${styles.addPhotoItem}`}>
              <label className={styles.addPhotoLabel}>
                <input
                  type="file"
                  multiple
                  onChange={handleAddPhoto}
                  className={styles.addPhotoInput}
                />
                <span className={styles.addPhotoText}>+</span>
              </label>
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default PhotoUploader;

const SortablePhoto = ({ id, photo, onRemove }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className={styles.photoItem}>
      <img src={URL.createObjectURL(photo)} {...attributes} {...listeners} alt="Uploaded preview" className={styles.photoPreview} />
      <button type="button" onClick={onRemove} className={styles.photoRemoveButton}>
        <img className={styles.photoRemoveIcon} src="/images/additem/cross_1.svg" alt="cross" />
      </button>
    </div>
  );
};


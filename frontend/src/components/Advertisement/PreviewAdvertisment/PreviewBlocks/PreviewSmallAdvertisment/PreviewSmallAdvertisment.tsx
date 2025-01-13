import React from 'react'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../../utils/routes'

import styles from './preview.module.css'
import PhotosBlock from '../../componentsPreview/PhotosBlock/PhotosBlock'
import DataAdvertisment from '../../componentsPreview/SmallAdvertisment/DataAdvertisment/DataAdvertisment'

import { AnnouncementModel } from '../../../../../graphql/generated/output'

interface PreviewSmallAdvertismentProps {
  input: AnnouncementModel
}

const PreviewSmallAdvertisment: React.FC<PreviewSmallAdvertismentProps> = ({ input }) => {
  const handlePreventLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <Link
      to={ROUTES.ITEMS + '/' + input.name + '/' + input.id}
      className={styles.container}
    >
      <PhotosBlock useStylesProfile={false} input={input} />
      <div>
        <DataAdvertisment input={input} stopPropagation={handlePreventLinkClick} />
      </div>
      <div className={styles.gradient}></div>
    </Link>
  );
};

export default PreviewSmallAdvertisment;

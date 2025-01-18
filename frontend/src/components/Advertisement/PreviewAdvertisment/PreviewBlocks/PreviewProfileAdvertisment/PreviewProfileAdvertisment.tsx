import React from 'react';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../../utils/routes';

import styles from './preview.module.css';
import PhotosBlock from '../../componentsPreview/PhotosBlock/PhotosBlock';
import DataAdvertisment from '../../componentsPreview/ProfileAdvertisment/DataAdvertisment/DataAdvertisment';

import { AnnouncementModel } from '../../../../../graphql/generated/output';
import ActionsAdvertisment from '../../componentsPreview/ProfileAdvertisment/ActionsAdvertisment/ActionsAdvertisment';

interface PreviewSmallAdvertismentProps {
  input: AnnouncementModel;
}

const PreviewProfileAdvertisment: React.FC<PreviewSmallAdvertismentProps> = ({ input }) => { 
  return (
    <Link     
      to={ROUTES.ITEMS + '/' + input.name + '/' + input.id} 
      className={styles.container}
    >
      <PhotosBlock useStylesProfile={true} input={input} />
      <DataAdvertisment input={input} />
      <div className={styles.actions}>
        <ActionsAdvertisment input={input} />
      </div>
    </Link>
  );
};

export default PreviewProfileAdvertisment;

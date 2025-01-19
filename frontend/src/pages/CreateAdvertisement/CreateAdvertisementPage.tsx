import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

import CategorySelection from "../../components/Advertisement/CreateAdvertisement/CategorySelection/CategorySelection";
import CreateAdForm from "../../components/Advertisement/CreateAdvertisement/CreateAdForm/CreateAdForm";

import styles from "./advertisment.module.css";

import {
  useGetPhotosByAnnouncementIdQuery,
  useGetAnnouncementCharacteristicsQuery,
  useGetAnnouncementQuery,
} from "../../graphql/generated/output";

const AdCreationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const location = useLocation();

  const editMatch = location.pathname.match(/edit\/(\w+)/);
  const adId = editMatch ? editMatch[1] : null;

  const { data: imagesData } = useGetPhotosByAnnouncementIdQuery({ variables: { id: adId || '' }, skip: !adId });
  const images = useMemo(() => imagesData?.getPhotosByAnnouncementId || [], [imagesData]);

  const { data: announcementCharacteristicsData } = useGetAnnouncementCharacteristicsQuery({ variables: { id: adId || '' }, skip: !adId });
  const announcementCharacteristics = useMemo(() => announcementCharacteristicsData?.getAnnouncementCharacteristics || [], [announcementCharacteristicsData]);

  const { data: advertismentData } = useGetAnnouncementQuery({ variables: { id: adId || '' }, skip: !adId });
  const advertisment = useMemo(() => advertismentData?.getAnnouncementById, [advertismentData]);

  return (
    <div className={styles.adCreationPage}>
      {!selectedCategory && !adId ? (
        <CategorySelection onCategorySelect={setSelectedCategory} />
      ) : (
        <CreateAdForm
          selectedCategory={selectedCategory ? selectedCategory : ''}
          onBackToCategory={() => setSelectedCategory(null)}
          advertismentData={advertisment}
          characteristicsDatas={announcementCharacteristics}
          imagesData={images}
        />
      )}
    </div>
  );
};

export default AdCreationPage;

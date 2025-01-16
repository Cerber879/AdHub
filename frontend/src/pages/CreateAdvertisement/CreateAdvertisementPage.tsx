import { useState } from "react";

import CategorySelection from "../../components/Advertisement/CreateAdvertisement/CategorySelection/CategorySelection";
import CreateAdForm from "../../components/Advertisement/CreateAdvertisement/CreateAdForm/CreateAdForm";

import styles from "./advertisment.module.css";

const AdCreationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className={styles.adCreationPage}>
      {!selectedCategory ? (
        <CategorySelection onCategorySelect={setSelectedCategory} />
      ) : (
        <CreateAdForm
          selectedCategory={selectedCategory}
          onBackToCategory={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
};

export default AdCreationPage;

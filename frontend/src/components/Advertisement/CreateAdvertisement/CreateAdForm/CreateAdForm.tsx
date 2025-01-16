import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./form.module.css";
import PhotoUploader from "../PhotoUploader/PhotoUploader";
import {
  useCreateAnnouncementMutation,
  useFindParentCategoriesQuery,
  useGetCharacteristicsQuery,
} from "../../../../graphql/generated/output";
import CharacteristicsForm from "../CharacteristicsForm/CharacteristicsForm";
import { CreateAdFormData, createAdSchema } from "../../../../schemas/advertisment/create-ad.schema";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../utils/routes";

const CreateAdForm = ({
  selectedCategory,
  onBackToCategory,
}: {
  selectedCategory: string;
  onBackToCategory: () => void;
}) => {
  const navigate = useNavigate();

  const { data: categoriesData } = useFindParentCategoriesQuery({
    variables: { id: selectedCategory || "" },
  });
  const categories = categoriesData?.findParentCategories;

  const { data: characteristicsData } = useGetCharacteristicsQuery({
    variables: { id: selectedCategory || "" },
  });
  const characteristics = characteristicsData?.getCharacteristics;

  const [createAnnouncement, { loading, error: createAnnouncementError }] = useCreateAnnouncementMutation({
    onCompleted: () => {
      navigate(ROUTES.PROFILE);
    },
    onError: (error) => {
      setError(error.message);
      console.log(error);
      console.log(createAnnouncementError)
    },
  });

  const [error, setError] = React.useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateAdFormData>({
    resolver: zodResolver(createAdSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      condition: undefined,
      photos: [],
      characteristics: {},
    },
  });

  const onSubmit = (data: CreateAdFormData) => {
    console.log("Форма отправлена", data);
    console.log("isValid:", isValid);
    console.log('errors:', errors)
    if (isValid) { 
      createAnnouncement({
        variables: {
          data: {
            name: data.title,
            price: data.price,
            description: data.description || "",
            condition: data.condition,
            status: "active",
            categoryId: selectedCategory,
            photos: data.photos ? data.photos : [],
            charactiristics: data.characteristics ? data.characteristics : {},
          },
        },
      });
    }
  };

  return (
    <div className={styles.container}>
      <button type="button" className={styles.backButton} onClick={onBackToCategory}>
        <img width={20} height={20} src="/images/additem/back.svg" alt="back" />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.adForm}>
        <div className={styles.formHeader}>
          <span className={styles.formTitle}>Новое объявление</span>
          <div className={styles.complex_list}>
            {categories?.map((category) => (
              <div key={category.id} className={styles.complex_list_item}>
                <span className={styles.link}>{category.name}</span>
                {category.id !== selectedCategory && (
                  <img className={styles.arrow} src="/images/additem/right_arrow.svg" alt="right" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <span className={styles.labelText}>Название объявления:</span>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="Введите название"
                className={styles.formInput}
                {...field}
              />
            )}
          />
          {errors.title && <span className={styles.errorText}>{errors.title.message}</span>}
        </div>

        <CharacteristicsForm
          errors={errors}
          characteristics={characteristics || []}
          control={control}
        />

        <div className={styles.formGroup}>
          <span className={styles.labelText}>Цена ₽:</span>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Введите цену"
                className={styles.formInput}
                {...field}
              />
            )}
          />
          {errors.price && <span className={styles.errorText}>{errors.price.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <span className={styles.labelText}>Описание:</span>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <textarea
                placeholder="Введите описание"
                className={styles.formTextarea}
                {...field}
              />
            )}
          />
          {errors.description && (
            <span className={styles.errorText}>{errors.description.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <span className={styles.labelText}>Состояние:</span>
          <Controller
            name="condition"
            control={control}
            render={({ field }) => (
              <select className={styles.formSelect} {...field}>
                <option value="">Выберите состояние</option>
                <option value="new">Новое</option>
                <option value="used">Б/у</option>
                <option value="refurbished">Восстановленное</option>
              </select>
            )}
          />
          {errors.condition && <span className={styles.errorText}>{errors.condition.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <span className={styles.labelText}>Фотографии:</span>
          <Controller
            name="photos"
            control={control}
            render={({ field }) => (
              <PhotoUploader photos={field.value || []}
              onChange={field.onChange} />
            )}
          />
          {errors.photos && <span className={styles.errorText}>{errors.photos.message}</span>}
        </div>

        {error && <span className={styles.errorText}>{error}</span>}
        <button type="submit" className={styles.submitButton}>
          Создать объявление
        </button>
      </form>
    </div>
  );
};

export default CreateAdForm;

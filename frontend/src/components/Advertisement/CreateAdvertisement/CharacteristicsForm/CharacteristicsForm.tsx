import React, { FC } from "react";
import { Controller, Control } from "react-hook-form";
import { CharacteristicsResponse } from "../../../../graphql/generated/output";

import styles from "./form.module.css";

interface CharacteristicsFormProps {
  characteristics: CharacteristicsResponse[];
  control: Control<any>;
  errors: any;
}

const CharacteristicsForm: FC<CharacteristicsFormProps> = ({ errors, characteristics, control }) => {
  return (
    <div className={styles.formContainer}>
      {characteristics && characteristics.length > 0 && (
        <div className={styles.label_title}>
          <span className={styles.labelText}>Характеристики</span>
          <span className={styles.labelText_description}>
            Заполнение характеристик не обязательно, но может помочь сделать ваше объявление более
            привлекательным для покупателей, предоставив им дополнительную информацию о товаре.
          </span>
        </div>
      )}
      {characteristics?.map((characteristic, index) => (
        <div key={index} className={styles.formGroup}>
          <span className={styles.formGroupName}>{characteristic.group}</span>
          {characteristic.data.map((item, itemIndex) => (
            <div
              className={item.type === "boolean" ? styles.labelGroupCheckbox : styles.labelGroup}
              key={itemIndex}
            >
              <span className={styles.labelCharacteristics}>
                {`${item.name}${item.unitSuffix ? " " + item.unitSuffix : ""}:`}
              </span>
              <Controller
                name={`characteristics.${item.id}`}
                control={control}
                render={({ field }) => {
                  switch (item.type) {
                    case "string":
                      return (
                        <input
                          type="text"
                          placeholder={`Введите ${item.name}`}
                          className={styles.formInput}
                          {...field}
                        />
                      );
                    case "number":
                      return (
                        <input
                          type="number"
                          placeholder={`Введите ${item.name}`}
                          className={styles.formInput}
                          {...field}
                        />
                      );
                    case "boolean":
                      return (
                        <input
                          type="checkbox"
                          className={styles.formCheckbox}
                          checked={field.value === "true"}
                          onChange={(e) =>
                            field.onChange(e.target.checked ? "true" : "false")
                          }
                        />
                      );
                    default:
                      return <></>;
                  }
                }}
              />
              {errors.characteristics && errors.characteristics[item.id] && (
                <span className={styles.errorText}>
                  {errors.characteristics[item.id].message}
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CharacteristicsForm;

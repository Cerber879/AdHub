import React, { FC, useState } from "react";
import { Controller, Control, ControllerRenderProps } from "react-hook-form";
import { CharacteristicsResponse } from "../../../../graphql/generated/output";
import styles from "./form.module.css";

interface CharacteristicsFormProps {
  characteristics: CharacteristicsResponse[];
  control: Control<any>;
  errors: any;
}

const CharacteristicsForm: FC<CharacteristicsFormProps> = ({ errors, characteristics, control }) => {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [showAllGroups, setShowAllGroups] = useState(false);

  const handleGroupToggle = (e: React.MouseEvent, groupName: string) => {
    e.preventDefault();  
    const updatedGroups = new Set(expandedGroups);
    if (updatedGroups.has(groupName)) {
      updatedGroups.delete(groupName);
    } else {
      updatedGroups.add(groupName);
    }
    setExpandedGroups(updatedGroups);
  };

  const handleShowAllToggle = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setShowAllGroups(!showAllGroups);
  };

  const handleAddBooleanCharacteristic = (field: ControllerRenderProps<any, `characteristics.${string}`>, e: React.MouseEvent) => {
    e.preventDefault();
    if (field.value !== undefined) {
      field.onChange(undefined);
    } else {
      field.onChange(false);
    }
  };

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
      {characteristics?.slice(0, showAllGroups ? characteristics.length : 3).map((characteristic, index) => (
        <div key={index} className={styles.formGroup}>
          <div
            className={styles.formGroupName}
            onClick={(e) => handleGroupToggle(e, characteristic.group)}
            style={{ cursor: "pointer" }}
          >
            <span>{characteristic.group}</span>
            <img className={styles.arrow_group} src={expandedGroups.has(characteristic.group) ?"/images/additem/down_arrow.svg" : "/images/additem/right_arrow.svg"} alt="arrow_group" />
          </div>
          {expandedGroups.has(characteristic.group) &&
            characteristic.data.map((item, itemIndex) => (
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
                          <div className={styles.booleanToggle}>
                            <input
                              type="checkbox"
                              className={styles.formCheckbox}
                              checked={field.value === "true"}
                              disabled={field.value === undefined}
                              onChange={(e) => {
                                field.onChange(e.target.checked ? "true" : "false");
                              }}
                            />
                            <button
                              className={styles.booleanToggleBtn}
                              style={field.value !== undefined ? { color: 'red' } : { color: 'green' }}
                              onClick={(e) => handleAddBooleanCharacteristic(field, e)}
                            >
                              {field.value !== undefined ? "Удалить из списка" : "Добавить в список"}
                            </button>
                          </div>
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
      <button
        className={styles.toggleButton}
        onClick={(e) => handleShowAllToggle(e)}
      >
        {showAllGroups ? "Скрыть дополнительные группы" : "Показать все группы"}
      </button>
    </div>
  );
};

export default CharacteristicsForm;

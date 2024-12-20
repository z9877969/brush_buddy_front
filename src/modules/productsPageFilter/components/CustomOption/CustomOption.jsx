import { useEffect, useId } from 'react';
import clsx from 'clsx';
import s from './CustomOption.module.scss';
import { sprite } from 'shared/icons';

const CustomOption = ({
  data,
  isSelected,
  selectOptionDecorator,
  filterType,
  disabled,
}) => {
  const selectOption = selectOptionDecorator(filterType);

  const id = useId();

  useEffect(() => {
    disabled && isSelected && selectOption(data);
  }, [disabled, isSelected, selectOption, data]);

  return (
    <label
      htmlFor={id}
      className={clsx(s.checkboxLabel, disabled && s.disabled)}
    >
      <input
        type="checkbox"
        id={id}
        className={clsx(s.check_input, s.adult)}
        checked={isSelected}
        onChange={() => {
          selectOption(data);
        }}
        disabled={disabled}
      />
      <span className={s.check_box}>
        {isSelected && (
          <svg className={s.checkIcon}>
            <use href={sprite + `#icon-checkmark1`}></use>
          </svg>
        )}
      </span>
      {data.label}
    </label>
  );
};

export default CustomOption;

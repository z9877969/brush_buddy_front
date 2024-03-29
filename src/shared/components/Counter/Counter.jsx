import clsx from 'clsx';
import s from './Counter.module.scss';
import { sprite } from 'shared/icons';
import { useState } from 'react';

const Counter = ({
  classWrapper,
  classBtn,
  classTable,
  classSvg,
  value,
  disabledDecr,
  disabledIncrem,
  changeCount,
}) => {
  const [count, setCount] = useState(value);

  const handleDecrement = () => {
    if (count > 1 && !disabledDecr) {
      const newCount = count - 1;
      setCount(newCount);
      changeCount(newCount);
    }
  };

  const handleIncrement = () => {
    if (!disabledIncrem) {
      const newCount = count + 1;
      setCount(newCount);
      changeCount(newCount);
    }
  };

  return (
    <div className={clsx(s.counterWrapper, classWrapper && classWrapper)}>
      <button
        type="button"
        disabled={count <= 1 || disabledDecr}
        className={clsx(s.btn, classBtn && classBtn)}
        onClick={handleDecrement}
      >
        <svg className={clsx(s.svg, classSvg && classSvg)}>
          <use href={sprite + '#icon-minus'}></use>
        </svg>
      </button>
      <span className={clsx(s.table, classTable && classTable)}>{count}</span>
      <button
        type="button"
        disabled={disabledIncrem}
        className={clsx(s.btn, classBtn && classBtn)}
        onClick={handleIncrement}
      >
        <svg className={clsx(s.svg, classSvg && classSvg)}>
          <use href={sprite + '#icon-plus'}></use>
        </svg>
      </button>
    </div>
  );
};

export default Counter;

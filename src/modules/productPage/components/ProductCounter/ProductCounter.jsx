import s from './ProductCounter.module.scss';
import { sprite } from 'shared/icons';

const ProductCounter = ({ setCount, count, disabledPrev, disabledNext }) => {
  return (
    <div className={s.wrapper}>
      <button
        className={s.btn}
        disabled={disabledPrev}
        type="button"
        onClick={() => {
          setCount((p) => p - 1);
        }}
      >
        <svg width="16" height="16">
          <use href={sprite + '#icon-minus'}></use>
        </svg>
      </button>
      <span className={s.quantityText}>{count}</span>
      <button
        className={s.btn}
        type="button"
        disabled={disabledNext}
        onClick={() => {
          return setCount((p) => p + 1);
        }}
      >
        <svg width="16" height="16">
          <use href={sprite + '#icon-plus'}></use>
        </svg>
      </button>
    </div>
  );
};

export default ProductCounter;

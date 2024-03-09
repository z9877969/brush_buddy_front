import clsx from 'clsx';
import s from './Counter.module.scss';

const Counter = ({ classWrapper, classBtn, classTable }) => {
  return (
    <div className={clsx(s.counterWrapper, classWrapper && classWrapper)}>
      <button className={clsx(s.btn, classBtn && classBtn)}>+</button>
      <span className={clsx(s.table, classTable && classTable)}>1</span>
      <button className={clsx(s.btn, classBtn && classBtn)}>-</button>
    </div>
  );
};

export default Counter;

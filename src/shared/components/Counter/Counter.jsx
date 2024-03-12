import clsx from 'clsx';
import s from './Counter.module.scss';
import { sprite } from 'shared/icons';

const Counter = ({ classWrapper, classBtn, classTable, classSvg }) => {
  return (
    <div className={clsx(s.counterWrapper, classWrapper && classWrapper)}>
      <button className={clsx(s.btn, classBtn && classBtn)}><svg className={clsx(s.svg, classSvg && classSvg)}>
      <use href={sprite + '#icon-minus'}></use></svg></button>
      <span className={clsx(s.table, classTable && classTable)}>1</span>
      <button className={clsx(s.btn, classBtn && classBtn)}><svg className={clsx(s.svg, classSvg && classSvg)}>
      <use href={sprite + '#icon-plus'}></use></svg></button>
    </div>
  );
};

export default Counter;

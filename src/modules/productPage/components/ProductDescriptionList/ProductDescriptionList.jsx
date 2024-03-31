import clsx from 'clsx';
import s from './ProductDescriptionList.module.scss';

const ProductDescriptionList = ({ title, items, mb }) => {
  return (
    <div className={clsx(s.wrapper, mb && s.mb)}>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.list}>
        {items?.map((el) => (
          <li key={el} className={s.item}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDescriptionList;

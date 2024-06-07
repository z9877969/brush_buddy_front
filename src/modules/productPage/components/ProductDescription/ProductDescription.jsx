import clsx from 'clsx';
import ProductDescriptionList from '../ProductDescriptionList/ProductDescriptionList';
import s from './ProductDescription.module.scss';

const ProductDescription = ({ description }) => {
  return (
    <div className={s.descrWrapper}>
      <p className={s.description}>Опис</p>
      {typeof description === 'string' ? (
        <p className={s.info}>{description}</p>
      ) : (
        description?.map(({ title, items, paragraph }, i, arr) =>
          paragraph ? (
            <p className={clsx(s.info, i < arr.length - 1 && s.mb)} key={i}>
              {paragraph}
            </p>
          ) : (
            <ProductDescriptionList
              key={i}
              title={title}
              items={items}
              mb={i < arr.length - 1}
            />
          )
        )
      )}
    </div>
  );
};

export default ProductDescription;

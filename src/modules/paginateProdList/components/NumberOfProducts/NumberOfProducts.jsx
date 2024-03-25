import s from './NumberOfProducts.module.scss';

const NumberOfProducts = ({ productsLength }) => {
  return (
    <p className={s.foundProducts}>
      Знайдено <span className={s.numberColor}>{productsLength}</span> товарів
    </p>
  );
};

export default NumberOfProducts;

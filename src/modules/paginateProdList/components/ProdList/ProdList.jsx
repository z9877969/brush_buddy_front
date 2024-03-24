import { ProductCardItem } from 'shared/components';
import s from './ProdList.module.scss';
const ProdList = ({ products }) => {
  return (
    <ul className={s.prodList}>
      {products.map((item, index) => (
        <ProductCardItem {...item} key={index} />
      ))}
    </ul>
  );
};

export default ProdList;

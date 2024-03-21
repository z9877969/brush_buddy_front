import { ProductCardItem } from 'shared/components';
import s from './ProdList.module.scss';
const ProdList = ({ products }) => {
  return (
    <ul className={s.prodList}>
      {products.map((item) => (
        <ProductCardItem {...item} key={item.title} />
      ))}
    </ul>
  );
};

export default ProdList;

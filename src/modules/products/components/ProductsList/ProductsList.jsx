import { ProductCardItem } from 'shared/components';
import s from './ProductsList.module.scss';

const ProductsList = ({ products }) => {
  const elements = products.map((product) => (
    <ProductCardItem {...product} key={product.id} />
  ));
  return <ul className={s.prodList}>{elements}</ul>;
};

export default ProductsList;

import { ProductCardItem } from 'shared/components';
import s from './ProductsList.module.scss';

const ProductsList = ({ products }) => {
  const elements = products.map((product) => (
    <ProductCardItem
      id={product.id}
      name={product.name}
      price={product.price}
      old_price={product.old_price}
      category={product.category}
      age_range={product.age_range}
      status={product.status}
      image={product.image}
      total_quantity={product.total_quantity}
      key={product.id}
    />
  ));
  return <ul className={s.prodList}>{elements}</ul>;
};

export default ProductsList;

import ProductsListItem from '../ProductsListItem/ProductsListItem';
import s from './ProdList.module.scss';

const ProductsList = ({ products }) => {
  return (
    <ul className={s.prodList}>
      {products.map((product) => (
        <ProductsListItem key={product._id} {...product} />
      ))}
    </ul>
  );
};

export default ProductsList;

import { ProductsListItem } from 'shared/components';
import s from './ProductsList.module.scss';

/* product -> 
  title,
  images,
  markers, // [{varId, marker}]
  price,
  salePrice,
  watermark,
  quantity,
  prodId,
  userType,
  activeVar = {},

*/

const ProductsList = ({ products }) => {
  return (
    <ul className={s.prodList}>
      {products.map((product) => {
        return <ProductsListItem key={product._id} {...product} />;
      })}
    </ul>
  );
};

export default ProductsList;

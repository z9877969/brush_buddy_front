import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { ProductCard } from 'modules/productPage';
import { firebaseApi as fbApi } from 'services';
import { ROUTES } from 'shared/constants';

const ProductCardPage = () => {
  // const location = useLocation();

  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    setIsLoading(true);
    fbApi
      .getProductById(productId)
      .then((product) => setProduct(product))
      // eslint-disable-next-line
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, [productId]);

  const locations = !product ? (
    <Navigate to={ROUTES.NOT_FOUND} />
  ) : (
    <ProductCard product={product} />
  );
  return isLoading ? <h1>Loading...</h1> : locations;
};

export default ProductCardPage;

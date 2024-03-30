import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from 'modules/productPage';
import { firebaseApi as fbApi } from 'services';
import { ROUTES } from 'shared/constants';
import { Loader } from 'shared/components';

const ProductCardPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fbApi
      .getProductById(productId)
      .then((product) => {
        product ? setProduct(product) : navigate(ROUTES.NOT_FOUND);
      })
      .catch(() => navigate(ROUTES.NOT_FOUND))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, [productId]);

  return isLoading ? <Loader /> : <ProductCard product={product} />;
};

export default ProductCardPage;

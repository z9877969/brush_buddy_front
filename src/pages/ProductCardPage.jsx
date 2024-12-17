import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductCard } from 'modules/productPage';
import { Loader } from 'shared/components';
import { scrollToTop } from 'helpers/scrollToTop';
import { brushbuddyApi as bbApi } from 'services';
import { ROUTES } from 'shared/constants';

const ProductCardPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    bbApi
      .getProductByIdApi(productId)
      .then((product) => {
        product && product.variants.length > 0
          ? setProduct(product)
          : navigate(ROUTES.NOT_FOUND);
      })
      .catch(() => navigate(ROUTES.NOT_FOUND))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, [productId]);

  useEffect(() => {
    product && scrollToTop();
  }, [product]);

  return isLoading ? <Loader /> : <ProductCard product={product} />;
};

export default ProductCardPage;

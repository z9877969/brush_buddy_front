import ProductCard from 'modules/productPage/components/ProductCard';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';

const ProductCardPage = () => {
  const location = useLocation();
  const locations =
    location.pathname === '/products/undefined' ? (
      <Navigate to={ROUTES.NOT_FOUND} />
    ) : (
      <ProductCard />
    );
  return locations;
};

export default ProductCardPage;

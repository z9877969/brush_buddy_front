import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Cart, RecomendationProducts } from 'modules/cart';
import { selectProd, selectSubmitForm } from '@redux/cart/selectorsCart';
import { ROUTES } from 'shared/constants';

const CartPage = () => {
  const navigate = useNavigate();
  const products = useSelector(selectProd);
  const isSubmit = useSelector(selectSubmitForm);

  useEffect(() => {
    if (isSubmit) {
      navigate(ROUTES.THANK, { replace: true });
    }
  }, [isSubmit, navigate]);

  return products.length > 0 ? (
    <>
      <Cart />
      <RecomendationProducts />
    </>
  ) : (
    <Navigate to={ROUTES.CART_EMPTY} replace={true} />
  );
};

export default CartPage;

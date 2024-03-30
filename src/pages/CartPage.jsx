import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      return;
    } else if (!products.length) {
      navigate(ROUTES.CART_EMPTY, { replace: true });
    }
  }, [isSubmit, navigate, products]);

  return (
    products.length > 0 && (
      <>
        <Cart />
        <RecomendationProducts />
      </>
    )
  );
};

export default CartPage;

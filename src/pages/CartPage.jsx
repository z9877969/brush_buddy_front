import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Cart,
  // RecomendationProducts
} from 'modules/cart';
import { selectProd, selectSubmitForm } from '@redux/cart/selectorsCart';
import { PAYMENT_METHOD, ROUTES } from 'shared/constants';

const CartPage = () => {
  const navigate = useNavigate();
  const products = useSelector(selectProd);
  const isSubmit = useSelector(selectSubmitForm);
  const orderResult = useSelector((state) => state.cart.orderResult);

  useEffect(() => {
    if (orderResult) {
      if (orderResult.payment === PAYMENT_METHOD.CARD) {
        window.location = orderResult.paymentUrl;
      }
      if (orderResult.payment === PAYMENT_METHOD.CASH) {
        navigate(ROUTES.THANK + '/' + orderResult.orderNum, { replace: true });
      }
    } else if (!products.length) {
      navigate(ROUTES.CART_EMPTY, { replace: true });
    }
  }, [isSubmit, navigate, products, orderResult]);

  return (
    products.length > 0 && (
      <>
        <Cart />
        {/* <RecomendationProducts /> */}
      </>
    )
  );
};

export default CartPage;

import { Cart } from 'modules/cart';
import { selectProd, selectSubmitForm } from '@redux/cart/selectorsCart';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '@redux/cart/cartSlice';

const CartPage = () => {
  const products = useSelector(selectProd);
  const isSubmit = useSelector(selectSubmitForm);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      navigate('/cart-empty', { replace: true });
    }
    if (isSubmit) {
      navigate('/thank', { replace: true });
    }
  }, [products, navigate, isSubmit]);
  if (location.pathname === '/thank') {
    dispatch(submitForm(false));
  }

  return <>{products.length > 0 && <Cart />}</>;
};

export default CartPage;

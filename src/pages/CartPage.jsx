import { Cart } from 'modules/cart';
import { selectProd, selectSubmitForm } from '@redux/cart/selectorsCart';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const products = useSelector(selectProd);
  const isSubmit = useSelector(selectSubmitForm);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      navigate('/cart-empty', { replace: true });
    }
    if (isSubmit) {
      navigate('/thank', { replace: true });
    }
  }, [products, navigate, isSubmit]);

  return <>{products.length > 0 && <Cart />}</>;
};

export default CartPage;

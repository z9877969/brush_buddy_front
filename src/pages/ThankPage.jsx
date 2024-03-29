import { submitForm } from '@redux/cart/cartSlice';
import { selectOrderNum } from '@redux/order/orderSelectors';
import { resetOrderNum } from '@redux/order/orderSlice';
import { OrderFinished } from 'modules/orderFinished';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ThankPage = () => {
  const dispatch = useDispatch();
  const orderNum = useSelector(selectOrderNum);
  const location = useLocation();
  if (location.pathname === '/thank') {
    dispatch(submitForm(false));
  }

  useEffect(() => {
    return () => {
      dispatch(resetOrderNum());
    };
  }, [dispatch]);
  return <OrderFinished orderNum={orderNum} />;
};

export default ThankPage;

import { resetOrderResult, submitForm } from '@redux/cart/cartSlice';
import { selectOrderNum } from '@redux/order/orderSelectors';
import { resetOrderNum } from '@redux/order/orderSlice';
import { OrderFinished } from 'modules/orderFinished';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ThankPage = () => {
  const dispatch = useDispatch();
  const orderNumState = useSelector(selectOrderNum);
  const { orderNum } = useParams();

  useEffect(() => {
    dispatch(submitForm(false));
    return () => {
      dispatch(resetOrderNum());
      dispatch(resetOrderResult());
    };
  }, [dispatch]);
  return <OrderFinished orderNum={orderNum || orderNumState} />;
};

export default ThankPage;

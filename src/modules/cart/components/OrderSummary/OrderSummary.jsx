import { Button } from 'shared/components';
import s from './OrderSummary.module.scss';
import {
  selectDiscount,
  selectProd,
  selectTotalPrice,
} from '@redux/cart/selectorsCart';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrderData } from '@redux/cart/operationsCart';
import CartLoader from '../CartLoader/CartLoader';
import { isLoading, selectDiscountValue } from '@redux/cart/selectorsCart';

const OrederSummary = () => {
  const priceDisc = useSelector(selectDiscount); // sum discount
  const discountValue = useSelector(selectDiscountValue); //value discount
  const products = useSelector(selectProd);
  const totalPriceWithoutDisc = useSelector(selectTotalPrice);
  const totalPriceMinusDics = totalPriceWithoutDisc - priceDisc;
  const fixTotalprice = totalPriceMinusDics.toFixed(2);
  const isLoad = useSelector(isLoading);
  const dispatch = useDispatch();
  return (
    <section className={s.boxSummary}>
      <div className={s.boxSum}>
        <div>
          <p className={s.tittle}>Сума замовлення</p>
          <p className={s.price}>{totalPriceWithoutDisc} грн</p>
        </div>
        <div>
          <p className={s.tittleDisc}>Ваша знижка</p>
          <p className={s.priceDisc}>{priceDisc} грн</p>
        </div>
        <div>
          <p className={s.tittle}>Вартість доставки</p>
          <p className={s.lastP}>за тарифами перевізника</p>
        </div>
      </div>
      <div className={s.total}>
        <p>Загальна сума</p>
        <p>{fixTotalprice} грн</p>
      </div>
      {isLoad ? (
        <CartLoader />
      ) : (
        <>
          <Button
            type="submit"
            title={'Оформити замовлення'}
            className={s.btn}
            onClick={() =>
              dispatch(
                sendOrderData({
                  products,
                  discount: discountValue,
                  totalPrice: totalPriceWithoutDisc,
                  saleTotal: fixTotalprice,
                })
              )
            }
          />
          <p className={s.accept}>
            * Натискаючи на кнопку, я погоджуюсь з умовами обробки персональних
            даних
          </p>
        </>
      )}
    </section>
  );
};
export default OrederSummary;

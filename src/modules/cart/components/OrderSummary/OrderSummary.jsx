import { Button } from 'shared/components';
import s from './OrderSummary.module.scss';
import { selectDiscount, selectTotalPrice } from '@redux/cart/selectorsCart';
import { useSelector } from 'react-redux';
import CartLoader from '../CartLoader/CartLoader';
import { isLoading } from '@redux/cart/selectorsCart';
import { useMemo } from 'react';

const OrederSummary = () => {
  const isLoad = useSelector(isLoading);
  const priceDisc = useSelector(selectDiscount); // sum discount
  const totalPriceWithoutDisc = useSelector(selectTotalPrice);

  const fixTotalprice = useMemo(() => {
    const totalPriceMinusDics = totalPriceWithoutDisc - priceDisc;
    return totalPriceMinusDics.toFixed(2);
  }, [priceDisc, totalPriceWithoutDisc]);

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

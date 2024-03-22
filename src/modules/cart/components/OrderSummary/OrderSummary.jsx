import { Button } from 'shared/components';
import s from './OrderSummary.module.scss';
import { selectDiscount, selectTotalPrice } from '@redux/cart/selectorsCart';
import { useSelector } from 'react-redux';

const OrederSummary = () => {
  const priceDisc = useSelector(selectDiscount);
  const totalPriceWithoutDisc = useSelector(selectTotalPrice);
  const totalPrice = totalPriceWithoutDisc - priceDisc;
  const fixTotalprice = totalPrice.toFixed(2);
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
      <Button type="submit" title={'Оформити замовлення'} className={s.btn} />
      <p className={s.accept}>
        * Натискаючи на кнопку, я погоджуюсь з умовами обробки персональних
        даних
      </p>
    </section>
  );
};
export default OrederSummary;

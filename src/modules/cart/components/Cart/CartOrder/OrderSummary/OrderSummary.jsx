import { Button } from 'shared/components';
import s from './OrderSummary.module.scss';

const OrederSummary = () => {
  return (
    <section className={s.boxSummary}>
      <div className={s.boxSum}>
        <div>
          <p className={s.tittle}>Сума замовлення</p>
          <p className={s.price}>235 грн</p>
        </div>
        <div>
          <p className={s.tittleDisc}>Ваша знижка</p>
          <p className={s.priceDisc}>78.25 грн</p>
        </div>
        <div>
          <p className={s.tittle}>Вартість доставки</p>
          <p className={s.lastP}>за тарифами перевізника</p>
        </div>
      </div>
      <div className={s.total}>
        <p>Загальна сума</p>
        <p>254 грн</p>
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

import { useDeliveryForm } from 'context/DeliveryFormProvider';
import s from './CartPaymentMethods.module.scss';

const CartPaymentMethods = () => {
  const formik = useDeliveryForm();

  const { handleChange, values } = formik;

  return (
    <div>
      <h4 className={s.cartPaymentsTitle}>Спосіб оплати</h4>
      <form action="" className={s.listPayments}>
        <div>
          <input
            type="radio"
            name="payment"
            value="card"
            id="online"
            checked={values.payment === 'card'}
            onChange={handleChange}
          />
          <label htmlFor="online">
            <span className={s.listPaymentsOnline}></span>
            <span className={s.listPaymentsTitleText}>
              Карткою Visa/MasterCard
            </span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="payment"
            id="receipt"
            value="cash"
            checked={values.payment === 'cash'}
            onChange={handleChange}
          />
          <label htmlFor="receipt">
            <span className={s.listPaymentsTitleText}>
              Оплата при отриманні
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default CartPaymentMethods;

import { useDeliveryForm } from 'context/DeliveryFormProvider';
import s from './CartPaymentMethods.module.scss';
import clsx from 'clsx';
import { sprite } from 'shared/icons';
import { PAYMENT_METHOD } from 'shared/constants';

const CartPaymentMethods = () => {
  const formik = useDeliveryForm();

  const { handleChange, values } = formik;

  return (
    <div>
      <h4 className={s.cartPaymentsTitle}>Спосіб оплати</h4>
      <div className={s.listPayments}>
        <div>
          <input
            className={clsx(s.cartPaymentsInput)}
            type="radio"
            name="payment"
            value={PAYMENT_METHOD.CARD}
            id="online"
            checked={values.payment === PAYMENT_METHOD.CARD}
            onChange={handleChange}
          />
          <label htmlFor="online" className={s.cartPaymentsLabel}>
            <span className={s.listPaymentsOnline}>
              <svg className={s.cartFormSVG}>
                <use href={sprite + `#icon-radio-true`}></use>
              </svg>
            </span>
            <span className={s.listPaymentsTitleText}>
              Карткою Visa/MasterCard
            </span>
          </label>
        </div>
        <div>
          <input
            className={s.cartPaymentsInput}
            type="radio"
            name="payment"
            id="receipt"
            value={PAYMENT_METHOD.CASH}
            checked={values.payment === PAYMENT_METHOD.CASH}
            onChange={handleChange}
          />
          <label htmlFor="receipt" className={s.cartPaymentsLabel}>
            <span className={s.listPaymentsOnline}>
              <svg className={s.cartFormSVG}>
                <use href={sprite + `#icon-radio-true`}></use>
              </svg>
            </span>
            <span className={s.listPaymentsTitleText}>
              Оплата при отриманні
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CartPaymentMethods;

import { Button } from 'shared/components';
import OrderPromoCodeUsed from '../OrderPromoCodeUsed/OrderPromoCodeUsed';
import s from './OrderPromoCode.module.scss';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notUsedPromoCode } from '@redux/cart/cartSlice';
import { selectTotalPrice } from '@redux/cart/selectorsCart';
import { checkPromoCode } from '@redux/cart/operationsCart';
const OrderPromoCode = ({ priceDisc }) => {
  const [isPromoUsed, setIsPromoUsed] = useState(false);
  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      promoCode: '',
    },
    validate: (values) => {
      const errors = {};
      if (values.promoCode.length === 0) {
        errors.promoCode = "Промокод є обов'язковим";
      }
      return errors;
    },
  });

  const handleClickDeactivePromo = () => {
    setIsPromoUsed(false);
    dispatch(notUsedPromoCode());
  };

  return (
    <section className={s.sectionPromo}>
      <div className={s.form}>
        <div>
          <input
            className={s.input}
            type="text"
            name="promoCode"
            placeholder="Промокод"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.promoCode}
          />
        </div>
        <Button
          title={'Застосувати'}
          className={s.btn}
          type="button"
          onClick={() => {
            setIsPromoUsed(true);
            dispatch(checkPromoCode({ values: formik.values, total }));
          }}
          disabled={!formik.isValid || formik.values.promoCode.trim() === ''}
        ></Button>
      </div>
      {isPromoUsed && (
        <OrderPromoCodeUsed
          priceDisc={priceDisc}
          onClick={handleClickDeactivePromo}
        />
      )}
    </section>
  );
};

export default OrderPromoCode;

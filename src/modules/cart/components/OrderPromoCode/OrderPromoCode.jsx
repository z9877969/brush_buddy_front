import { Button } from 'shared/components';
import OrderPromoCodeUsed from '../OrderPromoCodeUsed/OrderPromoCodeUsed';
import s from './OrderPromoCode.module.scss';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usedPromoCode, notUsedPromoCode } from '@redux/cart/cartSlice';
import { selectTotalPrice } from '@redux/cart/selectorsCart';

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
    onSubmit: (values) => {
      setIsPromoUsed(true);
      dispatch(usedPromoCode({ values, total }));
      return values;
      //console.log('Введений промокод:', values.promoCode);
    },
  });

  const handleClickDeactivePromo = () => {
    setIsPromoUsed(false);
    dispatch(notUsedPromoCode());
  };

  return (
    <section className={s.sectionPromo}>
      <form className={s.form} onSubmit={formik.handleSubmit}>
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
          type="submit"
          disabled={!formik.isValid || formik.values.promoCode.trim() === ''}
        ></Button>
      </form>
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

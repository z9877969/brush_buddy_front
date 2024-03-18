import { Button } from 'shared/components';
import OrderPromoCodeUsed from './OrderPromoCodeUsed';
import s from './OrderPromoCode.module.scss';
import { useFormik } from 'formik';
import { useState } from 'react';

const OrderPromoCode = () => {
  const [isPromoUsed, setIsPromoUsed] = useState(false);

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
      return values;
      //console.log('Введений промокод:', values.promoCode);
    },
  });

  const handleClickDeactivePromo = () => {
    setIsPromoUsed(false);
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
      {isPromoUsed && <OrderPromoCodeUsed onClick={handleClickDeactivePromo} />}
    </section>
  );
};

export default OrderPromoCode;

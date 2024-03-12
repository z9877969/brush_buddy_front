import { Button } from 'shared/components';
import s from './OrderPromoCode.module.scss';
import { useFormik } from 'formik';

const OrderPromoCode = () => {
    const formik = useFormik({
        initialValues: {
            promoCode: ''
        },
        validate: values => {
            const errors = {};
            if (!values.promoCode) {
                errors.promoCode = 'Промокод є обов\'язковим';
            }
            return errors;
        },
        // onSubmit: values => {
        //     //console.log('Введений промокод:', values.promoCode);
        // }
    });

    return (
        <section>
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
                    {formik.touched.promoCode && formik.errors.promoCode && <div className="error">{formik.errors.promoCode}</div>}
                </div>
                <Button title={"Застосувати"} className={s.btn} type="submit" disabled={!formik.isValid}></Button>
            </form>
        </section>
    );
};

export default OrderPromoCode;




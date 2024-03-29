import { sendOrderData } from '@redux/cart/operationsCart';
import {
  selectDiscount,
  selectDiscountValue,
  selectProd,
  selectPromocode,
  selectTotalPrice,
} from '@redux/cart/selectorsCart';
import { useFormik } from 'formik';
import { deliveryFormSchema } from 'modules/cart';
import { createContext, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DeliveryFormContext = createContext();

export const useDeliveryForm = () => useContext(DeliveryFormContext);

const DeliveryFormProvider = ({ children }) => {
  const dispatch = useDispatch();

  const priceDisc = useSelector(selectDiscount); // sum discount
  const discountValue = useSelector(selectDiscountValue); //value discount
  const promocode = useSelector(selectPromocode);
  const products = useSelector(selectProd);
  const totalPriceWithoutDisc = useSelector(selectTotalPrice);
  const totalPriceMinusDics = totalPriceWithoutDisc - priceDisc;
  const fixTotalprice = totalPriceMinusDics.toFixed(2);
  const [deliveryLS] = useState(() =>
    JSON.parse(localStorage.getItem('delivery'))
  );

  const formik = useFormik({
    initialValues: deliveryLS
      ? {
          name: deliveryLS.name,
          email: deliveryLS.email,
          phone: deliveryLS.phone,
          city: deliveryLS.city,
          department: deliveryLS.department,
          comments: '',
          payment: 'card',
        }
      : {
          name: '',
          email: '',
          phone: '+380',
          city: '',
          department: '',
          comments: '',
          payment: 'card',
        },
    validationSchema: deliveryFormSchema,
    onSubmit: (values) => {
      const { name, email, phone, city, department, comments } = values;

      const delivery = {
        name,
        email,
        phone,
        comments,
        city,
        postOffice: department.label,
      };
      dispatch(
        sendOrderData({
          products,
          delivery,
          promocode,
          discount: discountValue,
          totalPrice: totalPriceWithoutDisc,
          saleTotal: fixTotalprice,
        })
      );
    },
  });

  return (
    <DeliveryFormContext.Provider value={formik}>
      <form onSubmit={formik.handleSubmit}>{children}</form>
    </DeliveryFormContext.Provider>
  );
};

export default DeliveryFormProvider;

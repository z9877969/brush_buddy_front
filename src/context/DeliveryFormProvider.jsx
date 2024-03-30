import { sendOrderData } from '@redux/cart/operationsCart';
import {
  selectDiscount,
  selectDiscountPersentage,
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

  const discountSum = useSelector(selectDiscount); // sum discount
  const discountPercentage = useSelector(selectDiscountPersentage); //value discount
  const promocode = useSelector(selectPromocode);
  const products = useSelector(selectProd);
  const totalPrice = useSelector(selectTotalPrice);
  const discountedTotal = totalPrice - discountSum;
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
      const { name, email, phone, city, department, comments, payment } =
        values;

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
          discount: discountPercentage,
          totalPrice,
          saleTotal: discountedTotal,
          payment,
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

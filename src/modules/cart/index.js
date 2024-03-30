import { lazy } from 'react';

export { default as Cart } from './components/Cart/Cart';
export { totalPrice, totalPriceDiscount } from './helpers/cartListProductsFunc';
export { deliveryFormSchema } from './data/deliveryFormSchema';
export const RecomendationProducts = lazy(
  () => import('./components/RecomendationProducts/RecomendationProducts')
);

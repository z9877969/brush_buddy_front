import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedCartReducer } from './cart/cartSlice';
import productsReducer from './products/productsSlice';
import blogsReducer from './blogs/blogsSlice';
import { novaPoshtaReducer } from './novaPoshta/novaPoshtaSlice';
import { orderReducer } from './order/orderSlice';
import loaderReducer from './loader/loaderSlice';
import headerReducer from './header/headerSlice';

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    products: productsReducer,
    novaPoshta: novaPoshtaReducer,
    order: orderReducer,
    blogs: blogsReducer,
    isLoading: loaderReducer,
    header: headerReducer,
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);

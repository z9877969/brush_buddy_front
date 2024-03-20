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
import { novaPoshtaReducer } from './novaPoshta/novaPoshtaSlice';

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    novaPoshta: novaPoshtaReducer,
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);

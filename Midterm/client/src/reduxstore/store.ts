import { configureStore } from '@reduxjs/toolkit'
import informationSlice from './informationSlice';

export const store = configureStore({
  reducer: {
    information: informationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
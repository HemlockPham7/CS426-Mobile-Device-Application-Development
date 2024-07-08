import { configureStore } from '@reduxjs/toolkit'
import informationSlice from './informationSlice';
import flightSlice from './flightSlice';
import ticketSlice from './ticketSlice';
import flightListSlice from './flightListSlice';

export const store = configureStore({
  reducer: {
    information: informationSlice,
    flight: flightSlice,
    ticket: ticketSlice,
    flightList: flightListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
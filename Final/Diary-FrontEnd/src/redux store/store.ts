import { configureStore } from "@reduxjs/toolkit";

import settingSlice from "./settingSlice";
import informationSlice from "./informationSlice";
import diarySlice from "./diarySlice";
import createDiarySlice from "./createDiarySlice";
import temporarySlice from "./temporarySlice";

export const store = configureStore({
  reducer: {
    setting: settingSlice,
    information: informationSlice,
    diaries: diarySlice,
    createDiary: createDiarySlice,
    temporaryVariable: temporarySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

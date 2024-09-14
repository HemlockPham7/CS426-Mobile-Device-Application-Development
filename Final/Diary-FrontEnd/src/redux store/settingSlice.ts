import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

async function saveColorLocal(data: number) {
  await SecureStore.setItemAsync("color", data.toString());
}
async function saveFirstDayCalendarLocal(data: number) {
  await SecureStore.setItemAsync("firstDayCalendar", data.toString());
}
async function saveMapStyle(data: string) {
  await SecureStore.setItemAsync("mapStyle", data);
}
async function saveIsRainy(data: number) {
  await SecureStore.setItemAsync("isRainy", data.toString());
}
async function saveTimeReminder(hour: number, minute: number) {
  await SecureStore.setItemAsync("hourReminder", hour.toString());
  await SecureStore.setItemAsync("minuteReminder", minute.toString());
}
async function saveIsReminder(data: number) {
  await SecureStore.setItemAsync("isReminder", data.toString());
}

interface SettingState {
  idColor: number;
  firstDayCalendar: number;
  mapStyle: string;
  isRainy: number;
  idMusic: number;
  hourReminder: number;
  minuteReminder: number;
  isReminder: number;
}
const initialState: SettingState = {
  idColor: 3,
  firstDayCalendar: 1,
  mapStyle: "dark",
  isRainy: 1,
  idMusic: 0,
  hourReminder: 20,
  minuteReminder: 0,
  isReminder: 0,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<any>) => {
      state.idColor = action.payload.id;
      saveColorLocal(state.idColor);
    },

    changeFirstDayCalendar: (state, action: PayloadAction<any>) => {
      state.firstDayCalendar = action.payload.id;
      saveFirstDayCalendarLocal(state.firstDayCalendar);
    },

    changeMapStyle: (state) => {
      if (state.mapStyle === "dark") {
        state.mapStyle = "light";
      } else {
        state.mapStyle = "dark";
      }
      saveMapStyle(state.mapStyle);
    },

    initMapStyle: (state, action: PayloadAction<string>) => {
      state.mapStyle = action.payload;
    },

    changeIsRainy: (state, action: PayloadAction<any>) => {
      state.isRainy = action.payload.isRainy;
      saveIsRainy(state.isRainy);
    },

    changeIdMusic: (state, action: PayloadAction<number>) => {
      state.idMusic = action.payload;
    },

    changeHourReminder: (state, action: PayloadAction<number>) => {
      state.hourReminder = action.payload;
      saveTimeReminder(state.hourReminder, state.minuteReminder);
    },

    changeMinuteReminder: (state, action: PayloadAction<number>) => {
      state.minuteReminder = action.payload;
      saveTimeReminder(state.hourReminder, state.minuteReminder);
    },

    changeIsReminder: (state, action: PayloadAction<number>) => {
      state.isReminder = action.payload;
      saveIsReminder(state.isReminder);
    },
  },
});

export const {
  changeColor,
  changeFirstDayCalendar,
  changeMapStyle,
  changeIsRainy,
  changeIdMusic,
  changeHourReminder,
  changeMinuteReminder,
  changeIsReminder,
  initMapStyle,
} = settingSlice.actions;
export default settingSlice.reducer;

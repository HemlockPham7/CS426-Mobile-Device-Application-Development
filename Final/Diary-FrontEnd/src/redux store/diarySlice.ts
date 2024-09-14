import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralDiary } from "../ClassObject/DiaryClass";

export interface DiaryState {
  diaries: GeneralDiary[];
}
const initialState: DiaryState = {
  diaries: [],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    initialDiaries: (state, action: PayloadAction<GeneralDiary[]>) => {
      state.diaries = action.payload;
      // 
    },
    deleteDiary: (state, action: PayloadAction<string>) => {
      state.diaries = state.diaries.filter(
        (diary) => diary.id !== action.payload
      );
    },
    addDiary: (state, action: PayloadAction<GeneralDiary>) => {
      state.diaries.push(action.payload);
      state.diaries.sort((a, b) => a.timestamp - b.timestamp);
    },
  },
});

export const { initialDiaries, deleteDiary, addDiary } = diarySlice.actions;
export default diarySlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailDirary } from "../ClassObject/DiaryClass";

const today = new Date();

export interface DiaryState {
  day: number;
  month: number;
  year: number;
  title: string;
  diary: string;
  hashTag: string[];
  imagesTemporary: string[];
  emoji: number;
  recordings: string[];
  locations: {
    latitude: number;
    longitude: number;
    readableAddress: string;
    title: string;
  }[];
  bookmark: boolean;
}
const initialState: DiaryState = {
  day: today.getDate(),
  month: today.getMonth() + 1,
  year: today.getFullYear(),
  title: "",
  diary: "",
  hashTag: ["memory"],
  imagesTemporary: [],
  emoji: 4,
  recordings: [],
  locations: [],
  bookmark: false,
};

const createDiarySlice = createSlice({
  name: "createDiary",
  initialState,
  reducers: {
    initCreateDiary: (state, action: PayloadAction<DetailDirary>) => {
      state.day = action.payload.timestamp.toDate().getDate();
      state.month = action.payload.timestamp.toDate().getMonth() + 1;
      state.year = action.payload.timestamp.toDate().getFullYear();
      state.title = action.payload.title;
      state.diary = action.payload.diary;
      state.hashTag = action.payload.hashTag;
      state.imagesTemporary = action.payload.urlImage;
      state.emoji = action.payload.emoji;
      state.recordings = action.payload.recordings;
      state.locations = [];
      state.locations = action.payload.locations as any;
      state.bookmark = action.payload.bookmark;
    },

    changeDate: (state, action: PayloadAction<any>) => {
      state.day = action.payload.day;
      state.month = action.payload.month;
      state.year = action.payload.year;
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    changeDiary: (state, action: PayloadAction<string>) => {
      state.diary = action.payload;
    },
    addHashtag: (state, action: PayloadAction<string>) => {
      state.hashTag = [...state.hashTag, action.payload];
    },
    removeHashtag: (state, action: PayloadAction<string>) => {
      state.hashTag = state.hashTag.filter(
        (_hashTag) => _hashTag !== action.payload
      );
    },
    addImage: (state, action: PayloadAction<string>) => {
      state.imagesTemporary = [action.payload, ...state.imagesTemporary];
      console.log(state.imagesTemporary.length);
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.imagesTemporary = state.imagesTemporary.filter(
        (image) => image !== action.payload
      );
      console.log(state.imagesTemporary.length);
    },
    changeEmoji: (state, action: PayloadAction<number>) => {
      state.emoji = action.payload;
    },
    addRecording: (state, action: PayloadAction<string>) => {
      state.recordings = [action.payload, ...state.recordings];
      console.log(state.recordings.length);
    },
    removeRecording: (state, action: PayloadAction<string>) => {
      state.recordings = state.recordings.filter(
        (image) => image !== action.payload
      );
      console.log(state.recordings.length);
    },
    clearRecording: (state) => {
      state.recordings = [];
    },
    addLocation: (state, action: PayloadAction<any>) => {
      state.locations = [action.payload, ...state.locations];
      console.log(state.locations.length);
    },
    removeLocation: (state, action: PayloadAction<any>) => {
      state.locations = state.locations.filter(
        (location) => location.readableAddress != action.payload
      );
    },
    updateTitleLocation: (state, action: PayloadAction<any>) => {
      state.locations = state.locations.map((location) => {
        if (location.readableAddress == action.payload.readableAddress) {
          return {
            ...location,
            title: action.payload.title,
          };
        }
        return location;
      });
    },
    changeBookmark: (state) => {
      state.bookmark = !state.bookmark;
    },
    createNewDiary: (state) => {
      state.day = today.getDate();
      state.month = today.getMonth() + 1;
      state.year = today.getFullYear();
      state.title = "";
      state.diary = "";
      state.hashTag = ["happy"];
      state.imagesTemporary = [];
      state.emoji = 3;
      state.recordings = [];
      state.locations = [];
      state.bookmark = false;
    },
  },
});

export const {
  initCreateDiary,
  changeDate,
  changeTitle,
  changeDiary,
  changeEmoji,
  addHashtag,
  addImage,
  removeImage,
  removeHashtag,
  addRecording,
  removeRecording,
  clearRecording,
  addLocation,
  removeLocation,
  updateTitleLocation,
  changeBookmark,
  createNewDiary,
} = createDiarySlice.actions;
export default createDiarySlice.reducer;

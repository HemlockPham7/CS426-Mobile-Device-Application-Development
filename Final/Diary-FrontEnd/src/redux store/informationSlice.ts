import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InformationState {
  uid: string;
  urlImage: "";
  email: string;
  name: string;
  introduction: string;
}
const initialState: InformationState = {
  uid: "",
  urlImage: "",
  email: "",
  name: "",
  introduction: "",
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    updateUid: (state, action: PayloadAction<any>) => {
      state.uid = action.payload.uid;
      console.log("Update new uid: " + state.uid);
    },
    updateImage: (state, action: PayloadAction<any>) => {
      state.urlImage = action.payload.urlImage;
      console.log("Update new urlImage: " + state.urlImage);
    },
    updateEmail: (state, action: PayloadAction<any>) => {
      state.email = action.payload.email;
      console.log("Update new email: " + state.email);
    },
    updateName: (state, action: PayloadAction<any>) => {
      state.name = action.payload.name;
      console.log("Update new name: " + state.name);
    },
    updateIntroduction: (state, action: PayloadAction<any>) => {
      state.introduction = action.payload.introduction;
      console.log("Update new introduction: " + state.introduction);
    },

    clearInformation: (state) => {
      state.uid = "";
      state.urlImage = "";
      state.email = "";
      state.name = "";
      state.introduction = "";
      console.log("Clear information");
    },
  },
});

export const {
  updateEmail,
  updateName,
  updateIntroduction,
  updateUid,
  updateImage,
  clearInformation,
} = informationSlice.actions;
export default informationSlice.reducer;

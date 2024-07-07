import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InformationState {
  uid: string;
  urlImage: "";
  email: string;
  firstName: string;
  lastName: string;
  introduction: string;
}

const initialState: InformationState = {
  uid: "",
  urlImage: "",
  email: "",
  firstName: "",
  lastName: "",
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
    updateFirstName: (state, action: PayloadAction<any>) => {
      state.firstName = action.payload.firstName;
      console.log("Update new first name: " + state.firstName);
    },
    updateLastName: (state, action: PayloadAction<any>) => {
      state.lastName = action.payload.lastName;
      console.log("Update new last name: " + state.lastName);
    },
    updateIntroduction: (state, action: PayloadAction<any>) => {
      state.introduction = action.payload.introduction;
      console.log("Update new introduction: " + state.introduction);
    },

    clearInformation: (state) => {
      state.uid = "";
      state.urlImage = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.introduction = "";
      console.log("Clear information");
    },
  },
});

export const {
  updateEmail,
  updateFirstName,
  updateLastName,
  updateIntroduction,
  updateUid,
  updateImage,
  clearInformation,
} = informationSlice.actions;
export default informationSlice.reducer;
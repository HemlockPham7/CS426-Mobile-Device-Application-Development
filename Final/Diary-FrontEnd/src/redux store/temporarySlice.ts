import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TemporaryState {
  currentLocation: {
    latitude: number;
    longitude: number;
    readableAddress: string;
  };
}
const initialState: TemporaryState = {
  currentLocation: {
    latitude: 0,
    longitude: 0,
    readableAddress: "",
  },
};

const temporarySlice = createSlice({
  name: "temporaryVariable",
  initialState,
  reducers: {
    addCurrentLocation: (state, action: PayloadAction<any>) => {
      state.currentLocation = action.payload;
    },
  },
});

export const { addCurrentLocation } = temporarySlice.actions;
export default temporarySlice.reducer;

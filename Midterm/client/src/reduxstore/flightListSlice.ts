import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralFlight } from "../ClassObject/flightClass";

export interface FlightListState {
  flightList: GeneralFlight[];
}

const initialState: FlightListState = {
  flightList: [],
};

const flightListSlice = createSlice({
  name: "flightList",
  initialState,
  reducers: {
    initialFlightList: (state, action: PayloadAction<GeneralFlight[]>) => {
      state.flightList = action.payload;
      console.log(state.flightList);
    },
    deleteFlightList: (state, action: PayloadAction<string>) => {
      state.flightList = state.flightList.filter(
        (flight) => flight.id !== action.payload
      );
    },
    addFlightList: (state, action: PayloadAction<GeneralFlight>) => {
      state.flightList.push(action.payload);
    },
    clearFlightList: (state) => {
      state.flightList = [];
      console.log("Clear flight list");
    },
  }
});

export const { initialFlightList, deleteFlightList, addFlightList, clearFlightList } = flightListSlice.actions;
export default flightListSlice.reducer;
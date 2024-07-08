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
    },
    deleteFlightList: (state, action: PayloadAction<string>) => {
      state.flightList = state.flightList.filter(
        (flight) => flight.id !== action.payload
      );
    },
    addFlightList: (state, action: PayloadAction<GeneralFlight>) => {
      state.flightList.push(action.payload);
    },
  }
});

export const { initialFlightList, deleteFlightList, addFlightList } = flightListSlice.actions;
export default flightListSlice.reducer;
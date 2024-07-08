import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FlightState {
  id: string;
  fromDestination: string;
  toDestination: string;
  date: Date;
  time: string;
  price: number;
  flightNumber: string;
  seats: string[];
}

const initialState: FlightState = {
  id: "",
  fromDestination: "",
  toDestination: "",
  date: new Date(),
  time: "",
  price: 0,
  flightNumber: "",
  seats: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id;
      console.log("Update new id: " + state.id);
    },
    updateFromDestination: (state, action: PayloadAction<any>) => {
      state.fromDestination = action.payload.fromDestination;
      console.log("Update new fromDestination: " + state.fromDestination);
    },
    updateToDestination: (state, action: PayloadAction<any>) => {
      state.toDestination = action.payload.toDestination;
      console.log("Update new toDestination: " + state.toDestination);
    },
    updateDate: (state, action: PayloadAction<any>) => {
      state.date = action.payload.date;
      console.log("Update new date: " + state.date);
    },
    updateTime: (state, action: PayloadAction<any>) => {
      state.time = action.payload.type;
      console.log("Update new type: " + state.time);
    },
    updatePrice: (state, action: PayloadAction<any>) => {
      state.price = action.payload.price;
      console.log("Update new price: " + state.price);
    },
    updateFlightNumber: (state, action: PayloadAction<any>) => {
      state.flightNumber = action.payload.flightNumber;
      console.log("Update new flight number: " + state.flightNumber);
    },
    updateSeats: (state, action: PayloadAction<any>) => {
      state.seats = [action.payload, ...state.seats];
      console.log(state.seats.length);
    },
    clearFlight: (state) => {
      state.id = "";
      state.fromDestination = "";
      state.toDestination = "";
      state.date = new Date();
      state.time = "";
      state.price = 0;
      state.flightNumber = "";
      state.seats = [];
      console.log("Clear flight information");
    },
  },
});

export const {
  updateId,
  updateFromDestination,
  updateToDestination,
  updateDate,
  updateTime,
  updatePrice,
  updateFlightNumber,
  updateSeats,
  clearFlight,
} = flightSlice.actions;
export default flightSlice.reducer;

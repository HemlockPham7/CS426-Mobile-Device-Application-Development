import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const today = new Date();
export interface TicketState {
  id: string;
  flightID: string;
  adults: number;
  babies: number;
  pets: number;
  luggages: number;
  fromDestination: string;
  toDestination: string;
  depDate: Date;
  retDate: Date;
  price: string;
  ticketNumber: string;
  seats: string[];
}

const initialState: TicketState = {
  id: "",
  flightID: "",
  adults: 1,
  babies: 0,
  pets: 0,
  luggages: 0,
  fromDestination: "New York (NYC)",
  toDestination: "London (LDN)",
  depDate: today,
  retDate: today,
  price: "",
  ticketNumber: "",
  seats: [],
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id;
      console.log("Update new id: " + state.id);
    },
    updateFlightID: (state, action: PayloadAction<any>) => {
      state.flightID = action.payload.flightID;
      console.log("Update new flightID: " + state.flightID);
    },
    updateAdults: (state, action: PayloadAction<any>) => {
      state.adults = action.payload.adults;
      console.log("Update new adults: " + state.adults);
    },
    updateBabies: (state, action: PayloadAction<any>) => {
      state.babies = action.payload.babies;
      console.log("Update new babies: " + state.babies);
    },
    updatePets: (state, action: PayloadAction<any>) => {
      state.pets = action.payload.pets;
      console.log("Update new pets: " + state.pets);
    },
    updateLuggages: (state, action: PayloadAction<any>) => {
      state.luggages = action.payload.luggages;
      console.log("Update new luggages: " + state.luggages);
    },
    updateFromDestination: (state, action: PayloadAction<any>) => {
      state.fromDestination = action.payload.fromDestination;
      console.log("Update new fromDestination: " + state.fromDestination);
    },
    updateToDestination: (state, action: PayloadAction<any>) => {
      state.toDestination = action.payload.toDestination;
      console.log("Update new toDestination: " + state.toDestination);
    },
    updateDepDate: (state, action: PayloadAction<any>) => {
      state.depDate = action.payload.depDate;
      console.log("Update new depDate: " + state.depDate);
    },
    updateRetDate: (state, action: PayloadAction<any>) => {
      state.retDate = action.payload.retDate;
      console.log("Update new retDate: " + state.retDate);
    },
    updatePrice: (state, action: PayloadAction<any>) => {
      state.price = action.payload.price;
      console.log("Update new price: " + state.price);
    },
    updateTicketNumber: (state, action: PayloadAction<any>) => {
      state.ticketNumber = action.payload.ticketNumber;
      console.log("Update new ticket number: " + state.ticketNumber);
    },
    updateSeats: (state, action: PayloadAction<any>) => {
      state.seats = [action.payload, ...state.seats];
      console.log(state.seats.length);
    },
    clearTicket: (state) => {
      state.id = "";
      state.flightID = "";
      state.adults = 1;
      state.babies = 0;
      state.pets = 0;
      state.luggages = 0;
      state.fromDestination = "New York (NYC)";
      state.toDestination = "London (LDN)";
      state.depDate = today;
      state.retDate = today;
      state.price = "";
      state.ticketNumber = "";
      state.seats = [];
      console.log("Clear ticket information");
    },
  },
});

export const {
  updateId,
  updateFlightID,
  updateAdults,
  updateBabies,
  updatePets,
  updateLuggages,
  updateFromDestination,
  updateToDestination,
  updateDepDate,
  updateRetDate,
  updatePrice,
  updateTicketNumber,
  updateSeats,
  clearTicket,
} = ticketSlice.actions;
export default ticketSlice.reducer;

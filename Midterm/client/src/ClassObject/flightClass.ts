export class GeneralFlight {
  id: string;
  fromDestination: string;
  toDestination: string;
  date: Date;
  time: string;
  price: number;
  flightNumber: string;
  seats: string[];

  constructor(
    id: string,
    fromDestination: string,
    toDestination: string,
    date: Date,
    time: string,
    price: number,
    flightNumber: string,
    seats: string[],
  ) {
    this.id = id;
    this.fromDestination = fromDestination;
    this.toDestination = toDestination;
    this.date = date;
    this.time = time;
    this.price = price;
    this.flightNumber = flightNumber;
    this.seats = seats;
  }
}
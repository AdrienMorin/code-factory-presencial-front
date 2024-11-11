import { Flight } from "./flight";


export interface Reservation {
  reservationCode: string;
  id: string;
  flight: Flight;
}

export interface ReservationRequest {
  flightId: number;
  passengerIds: number[];
}

export interface ReservationPassenger {
  allReservationPassengers: AllReservationsPassenger[];
}

export interface AllReservationsPassenger {
  id: string;
  passenger: PassengerReservation;
  reservation: ReservationData;
  reservationTime: Date;
  seatNumber: string;
}

export interface PassengerReservation {
  name: string;
  lastName: string;
  id: string;
}

export interface ReservationData {
  reservationCode: string;
  flight: FlightReservation;
}

export interface FlightReservation {
  origin: string;
  destination: string;
  flightNumber: string;
}

import { Flight } from "./flight";
import { PassengerDB } from "./passenger";


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

export interface ReservationPassengerID {
  reservationPassengerById: ReservationPassengerById;
}

export interface ReservationPassengerById {
  reservationTime: Date;
  seatNumber: string;
  passenger: PassengerDB;
  reservation: ReservationData;
}

export interface PassengerReservation {
  name: string;
  lastName: string;
  id: number;
}

export interface ReservationData {
  id: number;
  reservationCode: string;
  flight: FlightReservation;
}

export interface FlightReservation {
  origin: string;
  destination: string;
  flightNumber: string;
}

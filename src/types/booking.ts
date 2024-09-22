import { Passenger } from "./passenger";

export interface BookingInfo {
    idVueloIda: number;
    idVueloVuelta: number;
    numeroReserva: string;
    fechaReserva: Date;
    numeroPasajeros: number;
  }

  export interface Booking {
    idVueloIda: number;
    idVueloVuelta: number;
    numeroReserva: string;
    fechaReserva: Date;
    numeroPasajeros: number;
    pasajeros: Passenger[];
  }
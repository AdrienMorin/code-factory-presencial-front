import { Passenger, PassengerDB } from "./passenger";

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

  export interface BookingDB {
    idReserva: number;
    numeroReserva: string;
    fechaReserva: Date;
    numeroPasajeros: number;
    idVueloIda: number;
    idVueloVuelta: number;
  }

  export interface BookingPassenger {
    idReservaPasajero: number;
    reserva: BookingDB;
    pasajero: PassengerDB;
    accesibilidad: boolean;
    equipajeAdicional: boolean;
    adiciones: boolean;
    asientoElegido: boolean;
  }
export interface Flight {
  flightType: "INTERNACIONAL" | "NACIONAL";
  departureCity: string;
  destinationCity: string;
  aircraftId: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  price: number;
  taxPercentage: number;
  surcharge: number;
}

export type FlightType = {
  getFlightsByFilters: Flight[];
};

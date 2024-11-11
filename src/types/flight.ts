export interface Flight {
    arrivalTime: Date;
    departureTime: Date;
    destination: string;
    flightNumber: string;
    id: string;
    origin: string;
    seatsAvailable: number;
}

export interface FlightSelection {
    allFlights: AllFlightsSelection[];

}

export interface AllFlightsSelection {
    destination: string;
    id: string;
    origin: string;
}


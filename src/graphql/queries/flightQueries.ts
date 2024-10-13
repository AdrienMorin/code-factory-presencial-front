import { gql } from "@apollo/client";

export const ALL_FLIGHTS = gql`
  query AllFlights {
    getFlightsByFilters {
      id
      flightType
      flightNumber
      departureCity
      destinationCity
      aircraftId
      departureDate
      departureTime
      arrivalDate
      arrivalTime
      price
      taxPercentage
      surcharge
    }
  }
`;

export const FLIGHT_BY_ID = gql`
  query FlightById($id: ID!) {
    flightById(id: $id) {
      id
      flightNumber
      departureCity
      destinationCity
      aircraftId
      departureDate
      departureTime
      arrivalDate
      arrivalTime
      price
      taxPercentage
      surcharge
    }
  }
`;

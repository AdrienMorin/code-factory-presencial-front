import { gql } from "@apollo/client";

export const ALL_FLIGHTS = gql`
  query AllFlights {
    allFlights {
      id
      flightType
      origin
      destination
      aircraftModel
      departureDate
      departureTime
      arrivalDate
      arrivalTime
      price
      tax
      surcharge
    }
  }
`;

export const FLIGHT_BY_ID = gql`
  query FlightById($id: ID!) {
    flightById(id: $id) {
      id
      flightType
      origin
      destination
      aircraftModel
      departureDate
      departureTime
      arrivalDate
      arrivalTime
      price
      tax
      surcharge
    }
  }
`;

import { gql } from "@apollo/client";

export const CREATE_FLIGHT = gql`
  mutation CreateFlight($input: FlightInput!) {
    createFlight(input: $input) {
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

export const UPDATE_FLIGHT = gql`
  mutation UpdateFlight($id: ID!, $input: FlightInput!) {
    updateFlight(id: $id, input: $input) {
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

export const DELETE_FLIGHT = gql`
  mutation DeleteFlight($id: ID!) {
    deleteFlight(id: $id)
  }
`;

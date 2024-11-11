import { gql } from "@apollo/client";

const GET_RESERVATIONS = gql`query MyQuery {
  allReservations {
    id
    reservationCode
    flight {
      id
      origin
      destination
      arrivalTime
      departureTime
      flightNumber
      seatsAvailable
    }
  }
}
`;

const GET_RESERVATIONS_PASSENGER = gql`
query MyQuery {
  allReservationPassengers {
    id
    passenger {
      name
      lastName
      id
    }
    reservation {
      flight {
        origin
        destination
        flightNumber
      }
      reservationCode
    }
    reservationTime
    seatNumber
  }
}
`;

export {
    GET_RESERVATIONS,
    GET_RESERVATIONS_PASSENGER
}
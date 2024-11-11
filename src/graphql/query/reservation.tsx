import { gql } from "@apollo/client";

const GET_RESERVATIONS = gql`
query MyQuery {
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
      id
      reservationCode
    }
    reservationTime
    seatNumber
  }
}
`;

const GET_RESERVATION_PASSENGER_BY_ID = gql`
query MyQuery($id: ID!) {
  reservationPassengerById(id: $id) {
    reservationTime
    seatNumber
    passenger {
      age
      dni
      email
      id
      lastName
      name
      nationality
      phone
      typeDni
    }
    reservation {
      reservationCode
      id
      flight {
        origin
        destination
        flightNumber
      }
    }
  }
}
`;

export {
    GET_RESERVATIONS,
    GET_RESERVATIONS_PASSENGER,
    GET_RESERVATION_PASSENGER_BY_ID
}
import { gql } from "@apollo/client";

const SAVE_RESERVATION = gql`
  mutation SaveReservation($input: ReservationInput!) {
    saveReservation(reservationInput: $input) {
      flight {
        id
        origin
        destination
        flightNumber
      }
      id
      reservationCode
      reservationPassenger {
        passenger {
          name
          lastName
          nationality
          age
          phone
        }
        seatNumber
        reservationTime
      }
    }
  }
`;

const DELETE_RESERVATION_PASSENGER = gql`
  mutation DeleteReservationPassenger($id: ID!) {
    deleteReservationPassenger(id: $id)
  }
`;

export {
  SAVE_RESERVATION,
  DELETE_RESERVATION_PASSENGER
};

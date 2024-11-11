import { gql } from "@apollo/client";

const SAVE_PASSENGER = gql`
  mutation SavePassenger($input: PassengerInput!) {
    savePassenger(passengerInput: $input) {
      id
      name
      lastName
      nationality
      typeDni
      dni
      age
      email
      phone
    }
  }
`;

export { SAVE_PASSENGER };
import { gql } from "@apollo/client";

const GET_PASSENGER_BY_ID = gql`
    query getPassengerById($id: ID!) {
        passenger(id: $id) {
            age
            dni
            email
            lastName
            name
            nationality
            phone
            typeDni
        }
    }
`;

const UPDATE_PASSENGER = gql`
mutation MyMutation($id: ID!, $passengerInput: PassengerInput!) {
  updatePassenger(id: $id, passengerInput: $passengerInput) {
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

export {
    GET_PASSENGER_BY_ID,
    UPDATE_PASSENGER
};
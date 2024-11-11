import { gql } from "@apollo/client";

const GET_FLIGHTS = gql`
query MyQuery {
  allFlights {
    origin
    destination
    id
  }
}
`;

export {
    GET_FLIGHTS
}
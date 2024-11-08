// mutations.ts
import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      message
    }
  }
`;

export const AUTHENTICATE_MUTATION = gql`
  mutation Authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      token
      message
    }
  }
`;

// Tipos de los datos de respuesta
export interface AuthResponse {
  token: string;
  message: string;
}

import { gql } from '@apollo/client';

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($inputTransaction: InputTransaction!) {
    createTransaction(inputTransaction: $inputTransaction)
  }
`;

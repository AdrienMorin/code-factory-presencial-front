import { gql } from '@apollo/client';

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($inputTransaction: InputTransaction!) {
    createTransaction(inputTransaction: $inputTransaction) {
      id
      status
      date
      total_price
      additional_charge
    }
  }
`;

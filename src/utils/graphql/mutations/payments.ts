import { gql } from '@apollo/client';

export const CREATE_STRIPE_PAYMENT = gql`
    mutation CreateStripePaymentSession($transactionId: ID!) {
        createStripePaymentSession(transactionId: $transactionId)
      }
`;

export const CREATE_MERCADO_PAGO_PAYMENT = gql`
    mutation CreateMercadoPagoPreference($transactionId: ID!, $amount: Int!) {
        createMercadoPagoPreference(transactionId: $transactionId, amount: $amount)
    }
`;
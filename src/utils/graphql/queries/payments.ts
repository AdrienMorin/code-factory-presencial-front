import {gql} from '@apollo/client';

export const GET_PAYMENT_BY_ID = gql`
    query FindPaymentById {
    findPaymentById(payment_id: "1") {
        payment_id
        date
    }
}
`;
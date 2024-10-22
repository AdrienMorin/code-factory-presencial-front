import {gql} from '@apollo/client';

export const GET_ALL_USER_BOOKINGS = gql`
    query GetAllUserBookings($userId: ID!) {
    getAllUserBookings(user_id: $userId) {
        id
        is_paid
        price
        additional_charge
        flight_infos {
            id
            flight {
                id
                departure_date
                departure_time
                arrival_time
                departure_airport
                arrival_airport
                duration
                flight_number
                flight_class
                stops
            }
        }
    }
}
`;

export const GET_BOOKING_BY_ID = gql`
    query GetBookingById($booking_id: ID!) {
    getBookingById(booking_id: $booking_id) {
        id
        is_paid
        price
        additional_charge
        flight_infos {
            id
            flight {
                id
                departure_date
                departure_time
                arrival_time
                departure_airport
                arrival_airport
                duration
                flight_number
                flight_class
                stops
            }
        }
    }
}
`;
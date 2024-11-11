import { BookingInfo } from '@/components/ui/reservasa/all/BookingInfo'
import { PassengerInfo } from '@/components/ui/reservasa/all/PassengerInfo'
import { GET_RESERVATION_PASSENGER_BY_ID } from '@/graphql/query/reservation'
import { ReservationPassengerID } from '@/types/booking'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const EditBooking = () => {
    const router = useRouter()
    const { id } = router.query

    const { data: booking, loading, error } = useQuery<ReservationPassengerID>(GET_RESERVATION_PASSENGER_BY_ID, {
        skip: !id,
        variables: {
            id: parseInt(id as string)
        }
    });

    useEffect(() => {
        if (loading) {
            console.log('Loading data...');
        }
        if (error) {
            console.error('Error fetching data:', error);
        }
        console.log('Booking data:', booking);
    }, [loading, error, booking]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching booking data</p>;

    return (
        <div>
            <div className='flex w-full p-6 space-x-20 justify-center'>
                {booking && (
                    <>
                        <PassengerInfo booking={booking} />
                        <BookingInfo booking={booking} />
                    </>
                )}

            </div>

        </div>
    );
}

export default EditBooking;

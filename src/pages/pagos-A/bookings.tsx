import { useRouter } from 'next/router';
import Header from "@/components/molecules/header";
import React, { useState, useEffect } from "react";
import BookingCard from "../../components/atoms/bookingCard";
import { useQuery } from "@apollo/client";
import { GET_ALL_USER_BOOKINGS } from "@/utils/graphql/queries/bookings";

interface FlightInfo {
    id: number,
    flight: {
        id: number,
        departure_date: string,
        departure_time: string,
        arrival_time: string,
        departure_airport: string,
        arrival_airport: string,
        duration: string,
        flight_number: string,
        flight_class: string,
        stops: string
    }
}

interface BookingCardProps {
    id: number,
    is_paid: boolean,
    price: number,
    additional_charge: number,
    flight_infos: FlightInfo[]
}

export default function Bookings() {
    const router = useRouter();
    const { userId } = router.query;

    if (!userId) {
        return <div>Loading...</div>;
    }

    const [bookings, setBookings] = useState<BookingCardProps[]>([]);

    const bookingsResult = useQuery(GET_ALL_USER_BOOKINGS, {
        variables: { userId: userId },
    });

    useEffect(() => {
        if (bookingsResult.data) {
            setBookings(bookingsResult.data.getAllUserBookings);
        }
    }, [bookingsResult.data]);

    return (
        <div>
            <Header />
            <div className="w-full h-full bg-gray-200">
                <div className="bg-white w-11/12 h-dvh mx-auto pt-4">
                    <div className="bg-white w-5/12 h-14 rounded-2xl flex items-center -mt-10">
                        <h2 className="scroll-m-20 text-3xl mx-auto font-semibold tracking-tight">
                            Vuestras reservas
                        </h2>
                    </div>
                    <div className={"flex flex-col lg:flex-row lg:justify-between"}>
                        {bookings.map((booking) => (
                            <BookingCard key={booking.id} {...booking} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

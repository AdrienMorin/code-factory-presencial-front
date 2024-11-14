import { useRouter } from 'next/router';
import Header from "@/components/molecules/header";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKINGS } from "@/utils/graphql/queries/bookings";
import {BookingsTable} from "../../components/molecules/bookingsTable";

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
    user: {
        id: number
    },
    flight_infos: FlightInfo[]
}

export default function BookingsAdmin() {
    const router = useRouter();

    const [bookings, setBookings] = useState<BookingCardProps[]>([]);

    const bookingsResult = useQuery(GET_ALL_BOOKINGS);

    useEffect(() => {
        if (bookingsResult.data) {
            setBookings(bookingsResult.data.getAllBookings || []);
        }
    }, [bookingsResult.data]);

    return (
        <div>
            <Header />
            <div className="w-full h-full bg-gray-200">
                <div className="bg-white w-11/12 h-dvh mx-auto pt-4">
                    <div className="bg-white w-5/12 h-14 rounded-2xl flex items-center -mt-10">
                        <h2 className="scroll-m-20 text-3xl mx-auto font-semibold tracking-tight">
                            Administración de reservas
                        </h2>
                    </div>
                    <div className={"w-11/12 mx-auto"}>
                        <BookingsTable bookings={bookings} />
                    </div>
                </div>
            </div>
        </div>
    );
}

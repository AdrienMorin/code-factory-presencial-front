import { useRouter } from 'next/router';
import {Card} from "@/components/ui/card";
import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_BOOKING_BY_ID} from "@/utils/graphql/queries/bookings";
import {Icon} from "@iconify/react";
import { Button } from "@/components/ui/button"

interface FlightInfo {
    id: number;
    flight: {
        id: number;
        departure_date: string;
        departure_time: string;
        arrival_time: string;
        departure_airport: string;
        arrival_airport: string;
        duration: string;
        flight_number: string;
        flight_class: string;
        stops: string;
    };
}

interface BookingCardProps {
    id: number;
    is_paid: boolean;
    price: number;
    additional_charge: number;
    flight_infos: FlightInfo[];
}

export default function PaymentSuccess() {
    const router = useRouter();
    const { booking_id } = router.query;

    const [booking, setBooking] = useState<BookingCardProps | null>(null);

    const bookingResult = useQuery(GET_BOOKING_BY_ID, {
        variables: { booking_id: booking_id },
    });

    useEffect(() => {
        if (bookingResult.data) {
            setBooking(bookingResult.data.getBookingById);
        }
    }, [bookingResult.data]);

    return (
        <Card className="w-4/5 text-center mx-auto mt-12 flex flex-col justify-center items-center">
            <div className="mb-10 flex flex-col justify-center items-center">
                <Icon icon={"mdi:check-circle"} className={"text-6xl text-green-500 mt-4"}/>
                <h1 className="scroll-m-20 pt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Muchas gracias!
                </h1>
                <h3 className="mt-3 scroll-m-20 text-2xl font-semibold tracking-tight">
                    Su transacción ha sido pagada con éxito
                </h3>
                <Card className="mt-6 w-1/2 mx-auto bg-gray-200 flex justify-center">
                    <h2 className="scroll-m-20 p-2 text-3xl font-semibold tracking-tight first:mt-0">
                        ${(booking?.price! + booking?.additional_charge!).toLocaleString('es-CO')} COP
                    </h2>
                </Card>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Ahora puede cerrar esta pantalla.
                </p>
                <Button className="mt-6" onClick={() => router.push(`/pagos-A/transaction-details?id=${booking?.id!}`)}>Ver los detalles de la reserva</Button>
            </div>
        </Card>
    );
}

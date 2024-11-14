import { PaymentModule } from "@/components/organisms/paymentModule";
import React, { useEffect, useState } from "react";
import Header from "@/components/molecules/header";
import OrderSummary from "@/components/organisms/orderSummary";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_BOOKING_BY_ID } from "@/utils/graphql/queries/bookings";
import TransactionPayed from "@/components/molecules/transactionPayed";

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

export default function Pagos() {
    const router = useRouter();
    const { id } = router.query;

    const [booking, setBooking] = useState<BookingCardProps | null>(null);

    const bookingResult = useQuery(GET_BOOKING_BY_ID, {
        variables: { booking_id: id },
    });

    useEffect(() => {
        if (bookingResult.data) {
            setBooking(bookingResult.data.getBookingById);
        }
    }, [bookingResult.data]);

    return (
        <div>
            <Header />
            <div className="w-full h-full bg-gray-200">
                <div className="bg-white w-11/12 h-dvh mx-auto pt-4">
                    <div className="bg-white w-5/12 h-14 rounded-2xl flex items-center -mt-10">
                        <h2 className="scroll-m-20 text-3xl mx-auto font-semibold tracking-tight">
                            Método de pago
                        </h2>
                    </div>
                    <div className={"flex flex-col lg:flex-row lg:justify-between"}>
                        <div className="m-2 px-8 lg:w-7/12">
                            {booking?.is_paid ? <TransactionPayed /> : <PaymentModule amount={booking?.price! + booking?.additional_charge!} />}
                        </div>
                        <div className={"mt-2 mr-10 ml-10 lg:w-4/12 lg:mr-8"}>
                            {booking ? <OrderSummary orderData={booking} /> : <div>Loading...</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

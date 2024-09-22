import { BookingInfo } from "@/components/ui/reservasa/buscar/bookingInfo";
import { PassengerInfo } from "@/components/ui/reservasa/buscar/passengerInfo";
import { SearchBookingForm } from "@/components/ui/reservasa/buscar/searchBookingForm";
import { useBooking } from "@/hooks/useBooking";
import { BookingPassenger } from "@/types/booking";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Alert from '@mui/material/Alert';
import React, { useEffect, useState } from "react";

const Buscar = () => {
  const [bookings, setBookings] = useState<BookingPassenger[]>();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { findBooking } = useBooking();

  useEffect(() => {
    const getBooking = async () => {
      const numeroReserva = searchParams.get("numeroReserva");
      const numeroDocumento = searchParams.get("numeroDocumento");

      if (numeroReserva && numeroDocumento) {
        const bookingdb = await findBooking(numeroReserva, numeroDocumento);
        setBookings(bookingdb);
        console.log(bookingdb);
      }
    };
    getBooking();
  }, [searchParams, findBooking]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const numeroReserva = data.numeroReserva as string;
    const numeroDocumento = data.numeroDocumento as string;

    router.push(
      pathname +
        "?" +
        new URLSearchParams({ numeroReserva, numeroDocumento }).toString()
    );
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center w-full space-y-20">
        <SearchBookingForm handleFormSubmit={handleFormSubmit} />
        {bookings && (
          <div className="flex justify-center space-x-20">
            <BookingInfo bookings={bookings} />
            <PassengerInfo bookings={bookings} />
          </div>
        )}
        {!bookings && (
          <div className="flex justify-center items-center">
            <Alert severity="info" variant="outlined">No se han encontrado reservas</Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buscar;

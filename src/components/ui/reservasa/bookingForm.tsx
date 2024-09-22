import { CardContent, CardFooter } from "../card";
import { Separator } from "../separator";
import { Button } from "../button";
import { Input } from "../input";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Booking, BookingInfo } from "@/types/booking";
import { useState } from "react";
import { useBooking } from "@/hooks/useBooking";
import Swal from "sweetalert2";
import { Passenger } from "@/types/passenger";
import { PassengerCard } from "./passengerCard";

const BookingForm = ({
  passengers,
  setShowBookingForm,
  setShowPassengerForm,
  setPassengers,
  showPassengerCard,
  setShowPassengerCard,
}: {
  passengers: Passenger[];
  setShowBookingForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPassengerForm: React.Dispatch<React.SetStateAction<boolean>>;
  setPassengers: React.Dispatch<React.SetStateAction<Passenger[]>>;
  showPassengerCard: boolean;
  setShowPassengerCard: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [bookingData, setBookingData] = useState<BookingInfo>({
    idVueloIda: 0,
    idVueloVuelta: 0,
    numeroReserva: "",
    fechaReserva: new Date(),
    numeroPasajeros: 0,
  });

  const { createBooking } = useBooking();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const newBooking: BookingInfo = {
      idVueloIda: parseInt(data.idVueloIda as string),
      idVueloVuelta: parseInt(data.idVueloVuelta as string),
      numeroReserva: data.numeroReserva as string,
      fechaReserva: new Date(),
      numeroPasajeros: passengers.length,
    };
    setBookingData(newBooking);
    setShowPassengerForm(true);
    setShowBookingForm(false);
  };

  const saveBooking = async () => {
    if (passengers.length === 0) {
      return;
    }

    const booking: Booking = {
      ...bookingData,
      pasajeros: passengers,
    };

    const bookingSaved = await createBooking(booking);
    if (bookingSaved) {
      setShowPassengerCard(false);
      setPassengers([]);

      Swal.fire({
        title: "Reserva guardada",
        text: "La reserva se ha guardado correctamente",
        icon: "success",
      });
    }
  };

  const previousStep = () => {
    setShowBookingForm(false);
    setShowPassengerForm(true);
  };

  return (
    <div className={`${showPassengerCard ? "grid grid-cols-2 gap-4 p-8" : ""}`}>
      <form onSubmit={handleSubmit}>
        <CardContent className="p-6 text-sm">
          <div className="flex flex-col space-y-3">
            <div className="font-semibold">Información de la reserva</div>
            <ul className="flex flex-col space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Vuelo de ida</span>
                <div>
                  <Input
                    type="number"
                    min={0}
                    name="idVueloIda"
                    defaultValue={bookingData.idVueloIda}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Vuelo de vuelta</span>
                <div>
                  <Input
                    type="number"
                    min={0}
                    name="idVueloVuelta"
                    defaultValue={bookingData.idVueloVuelta}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between md:space-x-3">
                <span className="text-muted-foreground">Número de reserva</span>
                <div>
                  <Input
                    type="text"
                    name="numeroReserva"
                    defaultValue={bookingData.numeroReserva}
                    required
                  />
                </div>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
        </CardContent>
        <CardFooter className="flex justify-end">
          {!showPassengerCard ? (
            <Button type="submit" className="flex ">
              <AiFillCaretRight />
            </Button>
          ) : (
            <div className="flex space-x-36">
              <div>
                <Button type="button" onClick={previousStep}>
                  <AiFillCaretLeft />
                </Button>
              </div>
              <div>
                <Button type="button" onClick={saveBooking}>
                  Guardar Reserva
                </Button>
              </div>
            </div>
          )}
        </CardFooter>
      </form>
      <div
        className={`flex flex-col space-y-4 ${
          showPassengerCard ? "block" : "hidden"
        }`}
      >
        {passengers.map((passenger, index) => (
          <PassengerCard
            key={index}
            passenger={passenger}
            passengers={passengers}
            setPassengers={setPassengers}
          />
        ))}
      </div>
    </div>
  );
};

export { BookingForm };

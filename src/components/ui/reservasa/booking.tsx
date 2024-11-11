import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PassengerForm } from "./passengerForm";
import { BookingForm } from "./bookingForm";
import { Passenger, PassengerDB } from "@/types/passenger";
import { useState } from "react";

const Booking = ({
  passengers,
  setPassengers,
}: {
  passengers: PassengerDB[];
  setPassengers: React.Dispatch<React.SetStateAction<PassengerDB[]>>;
}) => {
  const [showBookingForm, setShowBookingForm] = useState<boolean>(true);
  const [showPassengerForm, setShowPassengerForm] = useState<boolean>(false);
  const [showPassengerCard, setShowPassengerCard] = useState<boolean>(false);

  const now = new Date();

  return (
    <div className="flex justify-center">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              {showPassengerCard ? "Resumen" : "Nueva Reserva"}
            </CardTitle>
            <CardDescription>{now.toDateString()}</CardDescription>
          </div>
        </CardHeader>
        <div className={showBookingForm ? "block" : "hidden"}>
          <BookingForm
            passengers={passengers}
            setShowBookingForm={setShowBookingForm}
            setShowPassengerForm={setShowPassengerForm}
            setPassengers={setPassengers}
            showPassengerCard={showPassengerCard}
            setShowPassengerCard={setShowPassengerCard}
          />
        </div>

        <div className={showPassengerForm ? "block" : "hidden"}>
          <PassengerForm
            setShowBookingForm={setShowBookingForm}
            passengers={passengers}
            setPassengers={setPassengers}
            setShowPassengerForm={setShowPassengerForm}
            setShowPassengerCard={setShowPassengerCard}
          />
        </div>
      </Card>
    </div>
  );
};

export default Booking;

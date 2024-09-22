import { Card, CardContent } from "@/components/ui/card";
import { BookingPassenger } from "@/types/booking";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const BookingInfo = ({ bookings }: { bookings: BookingPassenger[] }) => {
  return (
    <Card className="shadow-lg rounded-lg h-fit p-6">
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="font-bold text-lg">Información de la reserva</div>
          <ul className="space-y-6">
            {bookings.map((booking, index) => {
              const newDate = new Date(booking.reserva.fechaReserva);
              const formattedDate = newDate.toLocaleDateString("es-ES");
              return (
                <li
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-none"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <span className="text-gray-600">Número de reserva</span>
                    <div className="text-right font-medium">
                      {booking.reserva.numeroReserva}
                    </div>

                    <span className="text-gray-600">Fecha de reserva</span>
                    <div className="text-right font-medium">
                      {formattedDate}
                    </div>

                    <span className="text-gray-600">Vuelo de ida</span>
                    <div className="text-right font-medium">
                      {booking.reserva.idVueloIda}
                    </div>

                    <span className="text-gray-600">Vuelo de vuelta</span>
                    <div className="text-right font-medium">
                      {booking.reserva.idVueloVuelta}
                    </div>

                    <span className="text-gray-600">Número de pasajeros</span>
                    <div className="text-right font-medium">
                      {booking.reserva.numeroPasajeros}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Separator className="my-4" />
      </CardContent>
    </Card>
  );
};

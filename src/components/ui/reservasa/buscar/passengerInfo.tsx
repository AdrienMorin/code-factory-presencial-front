import { Card, CardContent } from "@/components/ui/card";
import { BookingPassenger } from "@/types/booking";

export const PassengerInfo = ({
  bookings,
}: {
  bookings: BookingPassenger[];
}) => {
  return (
    <Card className="shadow-lg rounded-lg">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="font-bold text-lg">Pasajero</div>
          <ul className="space-y-6">
            {bookings.map((booking, index) => (
              <li
                key={index}
                className="border-b border-gray-200 pb-4 last:border-none"
              >
                <div className="grid grid-cols-2 gap-4">
                  <span className="text-gray-600">Nombres</span>
                  <div className="text-right font-medium">
                    {booking.pasajero.nombre}
                  </div>

                  <span className="text-gray-600">Apellidos</span>
                  <div className="text-right font-medium">
                    {booking.pasajero.apellido}
                  </div>

                  <span className="text-gray-600">Tipo de documento</span>
                  <div className="text-right font-medium">
                    {booking.pasajero.tipoDocumento}
                  </div>

                  <span className="text-gray-600">Número de documento</span>
                  <div className="text-right font-medium">
                    {booking.pasajero.numeroDocumento}
                  </div>

                  <span className="text-gray-600">Accesibilidad</span>
                  <div className="text-right font-medium">
                    {booking.accesibilidad ? "Sí" : "No"}
                  </div>

                  <span className="text-gray-600">Equipaje adicional</span>
                  <div className="text-right font-medium">
                    {booking.equipajeAdicional ? "Sí" : "No"}
                  </div>

                  <span className="text-gray-600">Adiciones</span>
                  <div className="text-right font-medium">
                    {booking.adiciones ? "Sí" : "No"}
                  </div>

                  <span className="text-gray-600">Asiento elegido</span>
                  <div className="text-right font-medium">
                    {booking.asientoElegido ? "Sí" : "No"}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

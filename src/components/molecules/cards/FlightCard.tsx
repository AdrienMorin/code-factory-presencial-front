import { Button } from "@/components/ui/button";
import { ALL_FLIGHTS } from "@/graphql/queries/flightQueries";
import { FlightType } from "@/types/FlighTypes";
import { useQuery } from "@apollo/client";
import { CircleEllipsis, Pencil, X } from "lucide-react";
import React from "react";

const FlightCard = () => {
  const { data } = useQuery<FlightType>(ALL_FLIGHTS);
  const flights = data?.getFlightsByFilters || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 px-4">
      {flights.map((flight, index) => (
        <div
          key={index}
          className="w-full max-w-3xl border border-slate-300 shadow-lg rounded-lg p-6 flex flex-col gap-4"
        >
          {/* Tipo de vuelo en la esquina superior izquierda */}
          <div className="flex justify-between">
            <span className="text-sm font-semibold text-gray-500">
              Vuelo {flight.flightType.toLowerCase()}
            </span>
          </div>

          {/* Código del vuelo centrado */}
          <h2 className="text-2xl font-bold text-center">
            {flight.flightNumber}
          </h2>

          {/* Detalles divididos en dos columnas */}
          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">Origen</span>
              <span>{flight.departureCity}</span>
              <span className="text-sm font-semibold">Fecha de salida</span>
              <span>
                {flight.departureDate} - {flight.departureTime}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">Destino</span>
              <span>{flight.destinationCity}</span>
              <span className="text-sm font-semibold">Fecha de llegada</span>
              <span>
                {flight.arrivalDate} - {flight.arrivalTime}
              </span>
            </div>
          </div>

          {/* Botones al final */}
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              className="flex gap-1 items-center justify-center"
            >
              <CircleEllipsis />
              Ver más
            </Button>
            <Button
              variant="default"
              className="flex gap-1 items-center justify-center"
            >
              <Pencil /> Editar
            </Button>
            <Button
              variant="destructive"
              className="flex gap-1 items-center justify-center"
            >
              <X />
              Eliminar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightCard;
